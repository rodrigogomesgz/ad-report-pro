import { Card, Title, Text } from "@mantine/core";
import { Button } from "@/components/atoms/button";
import { ArrowLeft, Zap, Puzzle, Code, ExternalLink } from "lucide-react";
import { useNav } from "@/lib/navigation";

export function Integracoes() {
  const nav = useNav();

  const integracoes = [
    {
      name: "Google Ads",
      description: "Conecte suas campanhas do Google Ads para relatórios automáticos",
      icon: "G",
      status: "Disponível",
      color: "bg-blue-100 text-blue-600",
      action: () => nav.push("/oauth/google")
    },
    {
      name: "Meta Ads",
      description: "Importe dados do Facebook e Instagram Ads",
      icon: "M", 
      status: "Disponível",
      color: "bg-blue-100 text-blue-600",
      action: () => nav.push("/oauth/meta")
    },
    {
      name: "TikTok Ads",
      description: "Relatórios das suas campanhas no TikTok",
      icon: "T",
      status: "Em breve",
      color: "bg-gray-100 text-gray-400"
    },
    {
      name: "LinkedIn Ads",
      description: "Dados das campanhas B2B do LinkedIn",
      icon: "L",
      status: "Em breve", 
      color: "bg-gray-100 text-gray-400"
    },
    {
      name: "Google Analytics",
      description: "Combine dados de anúncios com analytics",
      icon: "GA",
      status: "Planejado",
      color: "bg-gray-100 text-gray-400"
    },
    {
      name: "Webhook Custom",
      description: "Integre qualquer plataforma via webhook",
      icon: "API",
      status: "Planejado",
      color: "bg-gray-100 text-gray-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header espaçamento */}
      <div className="h-16"></div>
      
      <div className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <button 
          onClick={() => nav.back()} 
          className="flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Voltar
        </button>

        <div className="text-center mb-16">
          <Title order={1} className="text-4xl font-bold text-foreground mb-4">
            Integrações
          </Title>
          <Text size="lg" c="dimmed" className="max-w-2xl mx-auto">
            Conecte suas plataformas de anúncios e centralize todos os dados em relatórios automáticos.
          </Text>
        </div>

        {/* Integracoes Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {integracoes.map((integracao, index) => (
            <Card key={index} className="p-6 hover:shadow-medium transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${integracao.color}`}>
                  <span className="font-bold text-sm">{integracao.icon}</span>
                </div>
                <div className={`px-2 py-1 rounded text-xs font-semibold ${
                  integracao.status === "Disponível" 
                    ? "bg-green-100 text-green-600"
                    : integracao.status === "Em breve"
                    ? "bg-yellow-100 text-yellow-600" 
                    : "bg-gray-100 text-gray-500"
                }`}>
                  {integracao.status}
                </div>
              </div>
              
              <Title order={3} className="text-lg font-semibold mb-2">
                {integracao.name}
              </Title>
              <Text size="sm" c="dimmed" className="mb-4">
                {integracao.description}
              </Text>
              
              {integracao.status === "Disponível" && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={integracao.action}
                >
                  <ExternalLink size={14} className="mr-2" />
                  Conectar
                </Button>
              )}
              
              {integracao.status !== "Disponível" && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full"
                  disabled
                >
                  {integracao.status}
                </Button>
              )}
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="max-w-4xl mx-auto">
          <Title order={2} className="text-2xl font-bold text-foreground mb-8 text-center">
            Como funciona
          </Title>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <Title order={3} className="text-lg font-semibold mb-2">
                Conexão Rápida
              </Title>
              <Text size="sm" c="dimmed">
                OAuth seguro em poucos cliques. Sem precisar inserir senhas ou tokens manualmente.
              </Text>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Puzzle className="w-8 h-8 text-green-600" />
              </div>
              <Title order={3} className="text-lg font-semibold mb-2">
                Sincronização Automática
              </Title>
              <Text size="sm" c="dimmed">
                Dados atualizados automaticamente. Relatórios sempre com as informações mais recentes.
              </Text>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-purple-600" />
              </div>
              <Title order={3} className="text-lg font-semibold mb-2">
                API Robusta
              </Title>
              <Text size="sm" c="dimmed">
                Infraestrutura confiável que aguenta picos de uso e grandes volumes de dados.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Integracoes;