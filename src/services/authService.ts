import { GoogleAdsApi, Customer } from 'google-ads-api';
import { FacebookAdsApi, AdAccount } from 'facebook-nodejs-business-sdk';

// Tipos para autenticação
export interface AuthTokens {
  accessToken: string;
  refreshToken?: string;
  expiresAt: number;
  scope: string[];
}

export interface GoogleAdsCredentials {
  clientId: string;
  clientSecret: string;
  developerToken: string;
  refreshToken: string;
}

export interface MetaAdsCredentials {
  appId: string;
  appSecret: string;
  accessToken: string;
}

export interface ConnectionStatus {
  platform: 'google' | 'meta';
  connected: boolean;
  accountId?: string;
  accountName?: string;
  lastSync?: Date;
  error?: string;
}

export class AuthService {
  private static instance: AuthService;
  private googleAdsApi: GoogleAdsApi | null = null;
  private metaAdsApi: FacebookAdsApi | null = null;

  private constructor() {}

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  // Google Ads Authentication
  async initializeGoogleAds(credentials: GoogleAdsCredentials): Promise<void> {
    try {
      this.googleAdsApi = new GoogleAdsApi({
        client_id: credentials.clientId,
        client_secret: credentials.clientSecret,
        developer_token: credentials.developerToken,
      });
    } catch (error) {
      console.error('Error initializing Google Ads API:', error);
      throw new Error('Failed to initialize Google Ads API');
    }
  }

  async authenticateGoogleAds(refreshToken: string): Promise<AuthTokens> {
    if (!this.googleAdsApi) {
      throw new Error('Google Ads API not initialized');
    }

    try {
      const customer = this.googleAdsApi.Customer({
        customer_id: '1234567890', // Será dinâmico
        refresh_token: refreshToken,
      });

      // Teste de conexão
      await customer.query(`
        SELECT customer.id, customer.descriptive_name 
        FROM customer 
        LIMIT 1
      `);

      return {
        accessToken: 'mock_access_token',
        refreshToken,
        expiresAt: Date.now() + 3600000, // 1 hora
        scope: ['https://www.googleapis.com/auth/adwords']
      };
    } catch (error) {
      console.error('Google Ads authentication error:', error);
      throw new Error('Failed to authenticate with Google Ads');
    }
  }

  // Meta Ads Authentication
  async initializeMetaAds(credentials: MetaAdsCredentials): Promise<void> {
    try {
      this.metaAdsApi = FacebookAdsApi.init(credentials.appId, credentials.appSecret, credentials.accessToken);
    } catch (error) {
      console.error('Error initializing Meta Ads API:', error);
      throw new Error('Failed to initialize Meta Ads API');
    }
  }

  async authenticateMetaAds(accessToken: string): Promise<AuthTokens> {
    if (!this.metaAdsApi) {
      throw new Error('Meta Ads API not initialized');
    }

    try {
      // Teste de conexão
      const adAccount = new AdAccount('act_1234567890'); // Será dinâmico
      await adAccount.get(['id', 'name']);

      return {
        accessToken,
        expiresAt: Date.now() + 3600000, // 1 hora
        scope: ['ads_read', 'business_management']
      };
    } catch (error) {
      console.error('Meta Ads authentication error:', error);
      throw new Error('Failed to authenticate with Meta Ads');
    }
  }

  // Verificar status das conexões
  async getConnectionStatus(): Promise<ConnectionStatus[]> {
    const statuses: ConnectionStatus[] = [];

    // Google Ads status
    try {
      if (this.googleAdsApi) {
        // Mock para MVP
        statuses.push({
          platform: 'google',
          connected: true,
          accountId: '123-456-7890',
          accountName: 'Conta Google Ads',
          lastSync: new Date()
        });
      } else {
        statuses.push({
          platform: 'google',
          connected: false,
          error: 'API not initialized'
        });
      }
    } catch (error) {
      statuses.push({
        platform: 'google',
        connected: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }

    // Meta Ads status
    try {
      if (this.metaAdsApi) {
        // Mock para MVP
        statuses.push({
          platform: 'meta',
          connected: true,
          accountId: 'act_1234567890',
          accountName: 'Conta Meta Ads',
          lastSync: new Date()
        });
      } else {
        statuses.push({
          platform: 'meta',
          connected: false,
          error: 'API not initialized'
        });
      }
    } catch (error) {
      statuses.push({
        platform: 'meta',
        connected: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }

    return statuses;
  }

  // Gerar URLs de autorização OAuth2
  generateGoogleAdsAuthUrl(): string {
    const clientId = process.env.GOOGLE_ADS_CLIENT_ID || 'your_client_id';
    const redirectUri = process.env.GOOGLE_ADS_REDIRECT_URI || 'http://localhost:3000/auth/google/callback';
    const scope = 'https://www.googleapis.com/auth/adwords';
    
    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: 'code',
      scope: scope,
      access_type: 'offline',
      prompt: 'consent'
    });

    return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  }

  generateMetaAdsAuthUrl(): string {
    const appId = process.env.META_ADS_APP_ID || 'your_app_id';
    const redirectUri = process.env.META_ADS_REDIRECT_URI || 'http://localhost:3000/auth/meta/callback';
    const scope = 'ads_read,business_management';
    
    const params = new URLSearchParams({
      client_id: appId,
      redirect_uri: redirectUri,
      response_type: 'code',
      scope: scope
    });

    return `https://www.facebook.com/v18.0/dialog/oauth?${params.toString()}`;
  }

  // Processar callbacks OAuth2
  async handleGoogleAdsCallback(code: string): Promise<AuthTokens> {
    // Implementar troca de código por token
    // Mock para MVP
    return {
      accessToken: 'mock_google_access_token',
      refreshToken: 'mock_google_refresh_token',
      expiresAt: Date.now() + 3600000,
      scope: ['https://www.googleapis.com/auth/adwords']
    };
  }

  async handleMetaAdsCallback(code: string): Promise<AuthTokens> {
    // Implementar troca de código por token
    // Mock para MVP
    return {
      accessToken: 'mock_meta_access_token',
      expiresAt: Date.now() + 3600000,
      scope: ['ads_read', 'business_management']
    };
  }
}
