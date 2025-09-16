// Serviço de autenticação seguro e temporário
// Não salva dados em banco - apenas em memória/session

import { dataService } from './dataService';

export interface TemporaryTokens {
  google?: {
    accessToken: string;
    refreshToken: string;
    expiresAt: number;
    accountId: string;
    accountName: string;
  };
  meta?: {
    accessToken: string;
    expiresAt: number;
    accountId: string;
    accountName: string;
  };
}

export interface UserAccount {
  platform: 'google' | 'meta';
  accountId: string;
  accountName: string;
  connected: boolean;
  lastSync?: Date;
}

export class SecureAuthService {
  private static instance: SecureAuthService;
  private tokens: TemporaryTokens = {};
  private sessionId: string;

  private constructor() {
    // Gerar ID único para a sessão (não persistente)
    this.sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  static getInstance(): SecureAuthService {
    if (!SecureAuthService.instance) {
      SecureAuthService.instance = new SecureAuthService();
    }
    return SecureAuthService.instance;
  }

  // Gerar URLs de autorização OAuth2
  generateGoogleAdsAuthUrl(): string {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID;
    const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_ADS_REDIRECT_URI;
    const state = this.sessionId; // Usar sessionId como state para segurança

    if (!clientId || !redirectUri) {
      throw new Error('Google Ads credentials not configured');
    }

    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: 'code',
      scope: 'https://www.googleapis.com/auth/adwords',
      access_type: 'offline',
      prompt: 'consent',
      state: state
    });

    return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  }

  generateMetaAdsAuthUrl(): string {
    const appId = process.env.NEXT_PUBLIC_META_ADS_APP_ID;
    const redirectUri = process.env.NEXT_PUBLIC_META_ADS_REDIRECT_URI;
    const state = this.sessionId;

    if (!appId || !redirectUri) {
      throw new Error('Meta Ads credentials not configured');
    }

    const params = new URLSearchParams({
      client_id: appId,
      redirect_uri: redirectUri,
      response_type: 'code',
      scope: 'ads_read,business_management',
      state: state
    });

    return `https://www.facebook.com/v18.0/dialog/oauth?${params.toString()}`;
  }

  // Processar callback OAuth2 (simulado para MVP)
  async handleGoogleAdsCallback(code: string, state: string): Promise<boolean> {
    // Verificar se o state corresponde à sessão atual
    if (state !== this.sessionId) {
      throw new Error('Invalid state parameter - possible CSRF attack');
    }

    try {
      // Em produção, fazer chamada real para trocar código por token
      // Por enquanto, simular com dados mockados
      const mockTokens = {
        accessToken: `google_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        refreshToken: `google_refresh_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        expiresAt: Date.now() + 3600000, // 1 hora
        accountId: '123-456-7890',
        accountName: 'Minha Conta Google Ads'
      };

      this.tokens.google = mockTokens;
      return true;
    } catch (error) {
      console.error('Error processing Google Ads callback:', error);
      return false;
    }
  }

  async handleMetaAdsCallback(code: string, state: string): Promise<boolean> {
    if (state !== this.sessionId) {
      throw new Error('Invalid state parameter - possible CSRF attack');
    }

    try {
      const mockTokens = {
        accessToken: `meta_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        expiresAt: Date.now() + 3600000, // 1 hora
        accountId: 'act_1234567890',
        accountName: 'Minha Conta Meta Ads'
      };

      this.tokens.meta = mockTokens;
      return true;
    } catch (error) {
      console.error('Error processing Meta Ads callback:', error);
      return false;
    }
  }

  // Verificar status das conexões
  getConnectionStatus(): UserAccount[] {
    const accounts: UserAccount[] = [];

    if (this.tokens.google) {
      const isExpired = Date.now() > this.tokens.google.expiresAt;
      accounts.push({
        platform: 'google',
        accountId: this.tokens.google.accountId,
        accountName: this.tokens.google.accountName,
        connected: !isExpired,
        lastSync: isExpired ? undefined : new Date()
      });
    } else {
      accounts.push({
        platform: 'google',
        accountId: '',
        accountName: '',
        connected: false
      });
    }

    if (this.tokens.meta) {
      const isExpired = Date.now() > this.tokens.meta.expiresAt;
      accounts.push({
        platform: 'meta',
        accountId: this.tokens.meta.accountId,
        accountName: this.tokens.meta.accountName,
        connected: !isExpired,
        lastSync: isExpired ? undefined : new Date()
      });
    } else {
      accounts.push({
        platform: 'meta',
        accountId: '',
        accountName: '',
        connected: false
      });
    }

    return accounts;
  }

  // Obter token de acesso (se válido)
  getValidToken(platform: 'google' | 'meta'): string | null {
    const token = this.tokens[platform];
    if (!token) return null;

    const isExpired = Date.now() > token.expiresAt;
    if (isExpired) {
      // Remover token expirado
      delete this.tokens[platform];
      return null;
    }

    return token.accessToken;
  }

  // Desconectar conta
  disconnectAccount(platform: 'google' | 'meta'): boolean {
    try {
      delete this.tokens[platform];
      return true;
    } catch (error) {
      console.error(`Error disconnecting ${platform}:`, error);
      return false;
    }
  }

  // Limpar todos os tokens (logout)
  clearAllTokens(): void {
    this.tokens = {};
  }

  // Verificar se há tokens válidos
  hasValidTokens(): boolean {
    return Object.values(this.tokens).some(token => 
      token && Date.now() < token.expiresAt
    );
  }

  // Obter informações da conta conectada
  getAccountInfo(platform: 'google' | 'meta'): { accountId: string; accountName: string } | null {
    const token = this.tokens[platform];
    if (!token || Date.now() > token.expiresAt) {
      return null;
    }

    return {
      accountId: token.accountId,
      accountName: token.accountName
    };
  }

  // Test connection with real APIs
  async testApiConnection(platform: 'google' | 'meta', accountId: string): Promise<boolean> {
    const token = this.tokens[platform];
    if (!token || Date.now() > token.expiresAt) {
      return false;
    }

    try {
      if (platform === 'google') {
        return await dataService.testGoogleAdsConnection(token.accessToken, accountId);
      } else if (platform === 'meta') {
        return await dataService.testMetaAdsConnection(token.accessToken, accountId);
      }
      return false;
    } catch (error) {
      console.error(`Error testing ${platform} connection:`, error);
      return false;
    }
  }

  // Get account info from APIs
  async getApiAccountInfo(platform: 'google' | 'meta', accountId: string): Promise<{ name: string; id: string } | null> {
    const token = this.tokens[platform];
    if (!token || Date.now() > token.expiresAt) {
      return null;
    }

    try {
      if (platform === 'google') {
        const refreshToken = 'refreshToken' in token ? token.refreshToken : undefined;
        const googleData = await dataService.collectGoogleAdsData('last_30_days' as any, accountId, token.accessToken, refreshToken);
        return googleData.accountInfo;
      } else if (platform === 'meta') {
        const metaData = await dataService.collectMetaAdsData('last_30_days' as any, accountId, token.accessToken);
        return metaData.accountInfo;
      }
      return null;
    } catch (error) {
      console.error(`Error getting ${platform} account info:`, error);
      return null;
    }
  }
}
