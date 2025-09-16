"use client";
import { useEffect, useState } from 'react';
import { Card, Title, Text, Button, Alert } from '@mantine/core';
import { CheckCircle, XCircle, AlertCircle, Loader } from 'lucide-react';
import { useNav } from '@/lib/navigation';
import { PlatformIcon } from '@/components/atoms/platformIcon';

interface OAuthCallbackProps {
  platform: 'google' | 'meta';
}

export function OAuthCallback({ platform }: OAuthCallbackProps) {
  const nav = useNav();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Processando autorização...');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processCallback = async () => {
      try {
        // Obter parâmetros da URL
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const state = urlParams.get('state');
        const error = urlParams.get('error');

        if (error) {
          setStatus('error');
          setMessage('Autorização negada pelo usuário');
          setError('O usuário cancelou a autorização');
          return;
        }

        if (!code || !state) {
          setStatus('error');
          setMessage('Parâmetros de autorização inválidos');
          setError('Código de autorização ou state não encontrados');
          return;
        }

        // Simular processamento do callback
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Enviar mensagem para a janela pai
        if (window.opener) {
          window.opener.postMessage({
            type: 'OAUTH_CALLBACK',
            platform,
            code,
            state
          }, window.location.origin);

          setStatus('success');
          setMessage('Conta conectada com sucesso!');
          
          // Fechar janela após 2 segundos
          setTimeout(() => {
            window.close();
          }, 2000);
        } else {
          setStatus('error');
          setMessage('Erro ao processar autorização');
          setError('Janela pai não encontrada');
        }
      } catch (err) {
        setStatus('error');
        setMessage('Erro ao processar autorização');
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      }
    };

    processCallback();
  }, [platform]);

  const handleClose = () => {
    if (window.opener) {
      window.close();
    } else {
      nav.push('/connect');
    }
  };

  const getPlatformInfo = () => {
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

  const platformInfo = getPlatformInfo();

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 shadow-medium">
        <div className="text-center">
          {status === 'loading' && (
            <>
              <div className="w-16 h-16 bg-muted/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Loader className="w-8 h-8 text-muted-foreground animate-spin" />
              </div>
              <Title order={2} className="text-xl font-semibold mb-2">
                Conectando {platformInfo.name}
              </Title>
              <Text c="dimmed">
                {message}
              </Text>
            </>
          )}

          {status === 'success' && (
            <>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <Title order={2} className="text-xl font-semibold mb-2 text-green-600">
                Sucesso!
              </Title>
              <Text c="dimmed" className="mb-6">
                {message}
              </Text>
              <Button
                variant="outline"
                onClick={handleClose}
                className="w-full"
              >
                Fechar Janela
              </Button>
            </>
          )}

          {status === 'error' && (
            <>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <Title order={2} className="text-xl font-semibold mb-2 text-red-600">
                Erro
              </Title>
              <Text c="dimmed" className="mb-4">
                {message}
              </Text>
              
              {error && (
                <Alert
                  icon={<AlertCircle size={16} />}
                  title="Detalhes do erro"
                  color="red"
                  variant="light"
                  className="mb-4"
                >
                  {error}
                </Alert>
              )}
              
              <Button
                variant="outline"
                onClick={handleClose}
                className="w-full"
              >
                Tentar Novamente
              </Button>
            </>
          )}
        </div>
      </Card>
    </div>
  );
}

export default OAuthCallback;
