"use client";
import { useState } from "react";
import { Card, Title, Text } from "@mantine/core";
import { Button } from "@/components/atoms/button";
import { ArrowLeft, ExternalLink, CheckCircle, AlertCircle } from "lucide-react";
import { useNav } from "@/lib/navigation";

export function OAuthGoogle() {
  const nav = useNav();
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<"idle" | "connecting" | "success" | "error">("idle");

  const handleConnect = async () => {
    setIsConnecting(true);
    setConnectionStatus("connecting");
    
    try {
      // Simulate OAuth flow for MVP
      // In production, this would redirect to Google OAuth
      setTimeout(() => {
        setConnectionStatus("success");
        setIsConnecting(false);
        
        // Redirect to report page after success
        setTimeout(() => {
          nav.push("/report?connected=google");
        }, 2000);
      }, 3000);
      
    } catch (error) {
      setConnectionStatus("error");
      setIsConnecting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-lg animate-fade-in">
        {/* Back Button */}
        <button 
          onClick={() => nav.back()} 
          className="flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Voltar
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-blue-600 font-bold text-2xl">G</span>
          </div>
          <Title order={1} className="text-3xl font-bold text-foreground mb-4">
            Conectar Google Ads
          </Title>
          <Text size="lg" c="dimmed">
            Autorize o acesso à sua conta do Google Ads
          </Text>
        </div>

        <Card className="p-8 shadow-medium">
          {connectionStatus === "idle" && (
            <div className="space-y-6">
              <div className="space-y-3">
                <Text fw={600} className="mb-3">O que vamos acessar:</Text>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={16} className="text-green-500" />
                    <Text size="sm">Dados de campanhas e desempenho</Text>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={16} className="text-green-500" />
                    <Text size="sm">Métricas de investimento e conversões</Text>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={16} className="text-green-500" />
                    <Text size="sm">Informações de palavras-chave</Text>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <Text size="sm" c="dimmed">
                  <strong>Seguro:</strong> Usamos OAuth 2.0 e não armazenamos suas credenciais. 
                  Você pode revogar o acesso a qualquer momento.
                </Text>
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={handleConnect}
              >
                <ExternalLink size={16} className="mr-2" />
                Autorizar com Google
              </Button>
            </div>
          )}

          {connectionStatus === "connecting" && (
            <div className="text-center space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <Text fw={600}>Conectando com Google Ads...</Text>
              <Text size="sm" c="dimmed">
                Você será redirecionado para autorizar o acesso
              </Text>
            </div>
          )}

          {connectionStatus === "success" && (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <Text fw={600} size="lg">Conectado com sucesso!</Text>
              <Text size="sm" c="dimmed">
                Redirecionando para gerar seu relatório...
              </Text>
            </div>
          )}

          {connectionStatus === "error" && (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <Text fw={600} size="lg">Erro na conexão</Text>
              <Text size="sm" c="dimmed">
                Tente novamente ou entre em contato com o suporte
              </Text>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full"
                onClick={() => {
                  setConnectionStatus("idle");
                  setIsConnecting(false);
                }}
              >
                Tentar novamente
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

export default OAuthGoogle;