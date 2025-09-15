import { Card, Title, Text } from "@mantine/core";
import { Button } from "@/components/atoms/button";
import { ArrowLeft, Book, Video, MessageSquare, FileText } from "lucide-react";
import { useNav } from "@/lib/navigation";

export function Documentacao() {
  const nav = useNav();

  const docs = [
    {
      title: "Primeiros Passos",
      description: "Como configurar sua conta e conectar suas primeiras plataformas",
      icon: Book,
      color: "bg-blue-100 text-blue-600",
      items: [
        "Criando sua conta",
        "Conectando Google Ads",
        "Conectando Meta Ads", 
        "Gerando seu primeiro relatório"
      ]
    },
    {
      title: "Integrações",
      description: "Guias detalhados para cada plataforma suportada",
      icon: FileText,
      color: "bg-green-100 text-green-600",
      items: [
        "Google Ads: Setup e permissões",
        "Meta Ads: Configuração OAuth",
        "Troubleshooting conexões",
        "Gerenciar múltiplas contas"
      ]
    },
    {
      title: "Relatórios",
      description: "Como personalizar e otimizar seus relatórios",
      icon: FileText,
      color: "bg-purple-100 text-purple-600",
      items: [
        "Tipos de relatório disponíveis",
        "Personalizando métricas",
        "Agendamento automático",
        "Entrega por email"
      ]
    },
    {
      title: "Solução de Problemas",
      description: "Respostas para dúvidas mais comuns",
      icon: MessageSquare,
      color: "bg-orange-100 text-orange-600",
      items: [
        "Erro de conexão OAuth",
        "Dados não aparecem no relatório",
        "Problemas de entrega de email",
        "Como cancelar assinatura"
      ]
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
            Documentação
          </Title>
          <Text size="lg" c="dimmed" className="max-w-2xl mx-auto">
            Tudo que você precisa saber para usar o RelatoriFy e gerar relatórios 
            profissionais de tráfego pago.
          </Text>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Status */}
          <Card className="p-8 bg-blue-50 border-blue-200">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Book className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <Title order={3} className="text-xl font-semibold mb-2">
                  Documentação em Construção
                </Title>
                <Text c="dimmed">
                  Estamos preparando uma documentação completa. Enquanto isso, 
                  use o suporte via WhatsApp para qualquer dúvida.
                </Text>
              </div>
            </div>
          </Card>

          {/* Seções */}
          <div className="grid md:grid-cols-2 gap-8">
            {docs.map((doc, index) => {
              const IconComponent = doc.icon;
              return (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${doc.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <Title order={3} className="text-lg font-semibold mb-2">
                        {doc.title}
                      </Title>
                      <Text size="sm" c="dimmed">
                        {doc.description}
                      </Text>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {doc.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></div>
                        <Text size="sm" c="dimmed">{item}</Text>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="ghost" size="sm" disabled>
                    Em breve
                  </Button>
                </Card>
              );
            })}
          </div>

          {/* Recursos alternativos */}
          <div>
            <Title order={2} className="text-2xl font-bold text-foreground mb-8 text-center">
              Precisa de ajuda agora?
            </Title>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-green-600" />
                </div>
                <Title order={3} className="text-lg font-semibold mb-2">
                  Suporte WhatsApp
                </Title>
                <Text size="sm" c="dimmed" className="mb-4">
                  Tire suas dúvidas diretamente com nossa equipe de suporte.
                </Text>
                <Button 
                  variant="outline"
                  onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
                >
                  Abrir WhatsApp
                </Button>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8 text-blue-600" />
                </div>
                <Title order={3} className="text-lg font-semibold mb-2">
                  Tutoriais em Vídeo
                </Title>
                <Text size="sm" c="dimmed" className="mb-4">
                  Aprenda visualmente como usar todas as funcionalidades.
                </Text>
                <Button 
                  variant="outline"
                  onClick={() => nav.push("/tutoriais")}
                >
                  Ver Tutoriais
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documentacao;