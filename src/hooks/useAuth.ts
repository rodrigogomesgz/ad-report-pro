"use client";
import { useState, useEffect } from 'react';
import { 
  initiateGoogleAdsAuth, 
  initiateMetaAdsAuth, 
  handleAuthCallback, 
  getConnectionStatus, 
  disconnectAccount 
} from '@/api/auth';
import { AuthResponse } from '@/api/auth';

interface ConnectionStatus {
  platform: 'google' | 'meta';
  connected: boolean;
  accountId?: string;
  accountName?: string;
}

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Carregar status das conexões
  const loadConnectionStatus = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await getConnectionStatus();
      if (response.success && response.data?.connectionStatus) {
        setConnectionStatus(response.data.connectionStatus);
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setIsLoading(false);
    }
  };

  // Iniciar autenticação Google Ads
  const connectGoogleAds = async (): Promise<string | null> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await initiateGoogleAdsAuth();
      if (response.success && response.data?.authUrl) {
        return response.data.authUrl;
      } else {
        setError(response.message);
        return null;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  // Iniciar autenticação Meta Ads
  const connectMetaAds = async (): Promise<string | null> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await initiateMetaAdsAuth();
      if (response.success && response.data?.authUrl) {
        return response.data.authUrl;
      } else {
        setError(response.message);
        return null;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  // Processar callback OAuth2
  const handleCallback = async (platform: 'google' | 'meta', code: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await handleAuthCallback(platform, code);
      if (response.success) {
        // Recarregar status das conexões
        await loadConnectionStatus();
        return true;
      } else {
        setError(response.message);
        return false;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Desconectar conta
  const disconnect = async (platform: 'google' | 'meta'): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await disconnectAccount(platform);
      if (response.success) {
        // Recarregar status das conexões
        await loadConnectionStatus();
        return true;
      } else {
        setError(response.message);
        return false;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Carregar status na inicialização
  useEffect(() => {
    loadConnectionStatus();
  }, []);

  return {
    isLoading,
    connectionStatus,
    error,
    connectGoogleAds,
    connectMetaAds,
    handleCallback,
    disconnect,
    loadConnectionStatus
  };
}
