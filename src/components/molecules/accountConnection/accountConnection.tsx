"use client";
import { useState, useEffect } from 'react';
import { Card, Title, Text, Button, Group, Badge, Alert } from '@mantine/core';
import { CheckCircle, XCircle, ExternalLink, RefreshCw, AlertCircle, Shield, Clock, Database } from 'lucide-react';
import { SecureAuthService, UserAccount } from '@/services/secureAuthService';
import { PlatformIcon } from '@/components/atoms/platformIcon';

interface AccountConnectionProps {
  onConnectionChange?: (accounts: UserAccount[]) => void;
  className?: string;
}

export function AccountConnection({ onConnectionChange, className = "" }: AccountConnectionProps) {
  const [accounts, setAccounts] = useState<UserAccount[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [authService] = useState(() => SecureAuthService.getInstance());

  // Carregar status das conexões
  const loadConnectionStatus = () => {
    const status = authService.getConnectionStatus();
    setAccounts(status);
    onConnectionChange?.(status);
  };

  // Conectar conta Google Ads
  const connectGoogleAds = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const authUrl = authService.generateGoogleAdsAuthUrl();
      // Abrir em nova aba para não perder o estado da aplicação
      window.open(authUrl, '_blank', 'width=600,height=600');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao conectar Google Ads');
    } finally {
      setIsLoading(false);
    }
  };

  // Conectar conta Meta Ads
  const connectMetaAds = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const authUrl = authService.generateMetaAdsAuthUrl();
      window.open(authUrl, '_blank', 'width=600,height=600');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao conectar Meta Ads');
    } finally {
      setIsLoading(false);
    }
  };

  // Desconectar conta
  const disconnectAccount = (platform: 'google' | 'meta') => {
    const success = authService.disconnectAccount(platform);
    if (success) {
      loadConnectionStatus();
    } else {
      setError(`Erro ao desconectar ${platform === 'google' ? 'Google Ads' : 'Meta Ads'}`);
    }
  };

  // Sincronizar dados
  const syncData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simular sincronização
      await new Promise(resolve => setTimeout(resolve, 2000));
      loadConnectionStatus();
    } catch (err) {
      setError('Erro ao sincronizar dados');
    } finally {
      setIsLoading(false);
    }
  };

  // Carregar status na inicialização
  useEffect(() => {
    loadConnectionStatus();
  }, []);

  // Escutar mudanças na janela (para callbacks OAuth2)
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      
      if (event.data.type === 'OAUTH_CALLBACK') {
        const { platform, code, state } = event.data;
        
        if (platform === 'google') {
          authService.handleGoogleAdsCallback(code, state).then(success => {
            if (success) {
              loadConnectionStatus();
            } else {
              setError('Erro ao processar callback do Google Ads');
            }
          });
        } else if (platform === 'meta') {
          authService.handleMetaAdsCallback(code, state).then(success => {
            if (success) {
              loadConnectionStatus();
            } else {
              setError('Erro ao processar callback do Meta Ads');
            }
          });
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [authService]);

  const getPlatformInfo = (platform: 'google' | 'meta') => {
    switch (platform) {
      case 'google':
        return {
          name: 'Google Ads',
          color: 'blue',
          icon: <PlatformIcon platform="google" size="md" />
        };
      case 'meta':
        return {
          name: 'Meta Ads',
          color: 'purple',
          icon: <PlatformIcon platform="meta" size="md" />
        };
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {error && (
        <Alert
          icon={<AlertCircle size={16} />}
          title="Erro"
          color="red"
          variant="light"
          onClose={() => setError(null)}
          withCloseButton
        >
          {error}
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {accounts.map((account) => {
          const platformInfo = getPlatformInfo(account.platform);
          
          return (
            <Card key={account.platform} className="p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {platformInfo.icon}
                  <div>
                    <Title order={4} className="text-lg font-semibold">
                      {platformInfo.name}
                    </Title>
                    {account.connected && account.accountName && (
                      <Text size="sm" c="dimmed">
                        {account.accountName}
                      </Text>
                    )}
                  </div>
                </div>
                
                <Badge
                  color={account.connected ? 'green' : 'gray'}
                  variant="light"
                  leftSection={
                    account.connected ? (
                      <CheckCircle size={12} />
                    ) : (
                      <XCircle size={12} />
                    )
                  }
                >
                  {account.connected ? 'Conectado' : 'Desconectado'}
                </Badge>
              </div>

              {account.connected ? (
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground">
                    <p>ID da Conta: {account.accountId}</p>
                    {account.lastSync && (
                      <p>Última sincronização: {account.lastSync.toLocaleString('pt-BR')}</p>
                    )}
                  </div>
                  
                  <Group spacing="xs">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => disconnectAccount(account.platform)}
                      leftSection={<XCircle size={14} />}
                    >
                      Desconectar
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={syncData}
                      loading={isLoading}
                      leftSection={<RefreshCw size={14} />}
                    >
                      Sincronizar
                    </Button>
                  </Group>
                </div>
              ) : (
                <div className="space-y-3">
                  <Text size="sm" c="dimmed">
                    Conecte sua conta {platformInfo.name} para acessar dados de campanhas e gerar relatórios.
                  </Text>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={account.platform === 'google' ? connectGoogleAds : connectMetaAds}
                    loading={isLoading}
                    leftSection={<ExternalLink size={14} />}
                    className="w-full"
                  >
                    Conectar {platformInfo.name}
                  </Button>
                </div>
              )}
            </Card>
          );
        })}
      </div>

      {accounts.some(acc => acc.connected) && (
        <Card className="p-4 bg-muted/20">
          <div className="flex items-center justify-between">
            <div>
              <Text size="sm" fw={600}>
                Contas Conectadas
              </Text>
              <Text size="xs" c="dimmed">
                {accounts.filter(acc => acc.connected).length} de {accounts.length} contas conectadas
              </Text>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={syncData}
              loading={isLoading}
              leftSection={<RefreshCw size={14} />}
            >
              Sincronizar Todas
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}

export default AccountConnection;
