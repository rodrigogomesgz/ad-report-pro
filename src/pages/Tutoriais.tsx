import { Card, Title, Text } from "@mantine/core";
import { Button } from "@/components/atoms/button";
import { ArrowLeft, Play, Clock, Users, Zap } from "lucide-react";
import { useNav } from "@/lib/navigation";
import { Header } from "@/components/organisms/header";
import { Footer } from "@/components/organisms/footer";

export function Tutoriais() {
  const nav = useNav();

  const tutoriais = [
    {
      title: "Como conectar sua conta do Google Ads",
      description: "Passo a passo para autorizar o acesso aos seus dados do Google Ads",
      duration: "3 min",
      difficulty: "Básico",
      thumbnail: "bg-blue-100",
      coming: true
    },
    {
      title: "Conectando Meta Ads (Facebook/Instagram)",
      description: "Processo completo de integração com suas campanhas do Meta",
      duration: "4 min", 
      difficulty: "Básico",
      thumbnail: "bg-blue-100",
      coming: true
    },
    {
      title: "Gerando seu primeiro relatório",
      description: "Como gerar e personalizar seu primeiro relatório PDF",
      duration: "5 min",
      difficulty: "Básico", 
      thumbnail: "bg-green-100",
      coming: true
    },
    {
      title: "Configurando entrega automática por email",
      description: "Setup para receber relatórios periodicamente no seu email",
      duration: "3 min",
      difficulty: "Intermediário",
      thumbnail: "bg-purple-100",
      coming: true
    },
    {
      title: "Interpretando métricas de tráfego pago",
      description: "Entenda ROAS, CTR, CPA e outras métricas importantes",
      duration: "8 min",
      difficulty: "Intermediário",
      thumbnail: "bg-orange-100", 
      coming: true
    },
    {
      title: "Troubleshooting: Resolvendo problemas comuns",
      description: "Soluções para os problemas mais frequentes dos usuários",
      duration: "6 min",
      difficulty: "Avançado",
      thumbnail: "bg-red-100",
      coming: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
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
            Tutoriais em Vídeo
          </Title>
          <Text size="lg" c="dimmed" className="max-w-2xl mx-auto">
            Aprenda a usar o TráfegoClaro com nossos tutoriais passo a passo. 
            Do básico ao avançado, tudo explicado de forma clara e prática.
          </Text>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Status */}
          <Card className="p-8 bg-yellow-50 border-yellow-200">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Play className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <Title order={3} className="text-xl font-semibold mb-2">
                  Tutoriais em Produção
                </Title>
                <Text c="dimmed">
                  Estamos gravando tutoriais em vídeo para facilitar seu aprendizado. 
                  Os primeiros vídeos estarão disponíveis em breve.
                </Text>
              </div>
            </div>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="p-4 text-center">
              <Play className="w-8 h-8 text-primary mx-auto mb-2" />
              <Text fw={600} size="lg">6</Text>
              <Text size="sm" c="dimmed">Tutoriais planejados</Text>
            </Card>
            <Card className="p-4 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
              <Text fw={600} size="lg">29 min</Text>
              <Text size="sm" c="dimmed">Duração total</Text>
            </Card>
            <Card className="p-4 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <Text fw={600} size="lg">3</Text>
              <Text size="sm" c="dimmed">Níveis de dificuldade</Text>
            </Card>
            <Card className="p-4 text-center">
              <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
              <Text fw={600} size="lg">100%</Text>
              <Text size="sm" c="dimmed">Gratuitos</Text>
            </Card>
          </div>

          {/* Lista de tutoriais */}
          <div>
            <Title order={2} className="text-2xl font-bold text-foreground mb-8">
              Playlist Completa
            </Title>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutoriais.map((tutorial, index) => (
                <Card key={index} className="overflow-hidden shadow-subtle hover:shadow-hover transition-all duration-300 cursor-pointer">
                  {/* Thumbnail */}
                  <div className={`h-32 ${tutorial.thumbnail} flex items-center justify-center relative`}>
                    <Play className="w-12 h-12 text-white bg-black bg-opacity-50 rounded-full p-2" />
                    {tutorial.coming && (
                      <div className="absolute top-2 right-2 bg-yellow-100 text-yellow-600 px-2 py-1 rounded text-xs font-semibold">
                        Em breve
                      </div>
                    )}
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`px-2 py-1 rounded text-xs font-semibold ${
                        tutorial.difficulty === "Básico" 
                          ? "bg-green-100 text-green-600"
                          : tutorial.difficulty === "Intermediário"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }`}>
                        {tutorial.difficulty}
                      </div>
                      <div className="flex items-center text-muted-foreground text-xs">
                        <Clock size={12} className="mr-1" />
                        {tutorial.duration}
                      </div>
                    </div>
                    
                    <Title order={4} className="font-semibold mb-2 line-clamp-2">
                      {tutorial.title}
                    </Title>
                    <Text size="sm" c="dimmed" className="line-clamp-2 mb-4">
                      {tutorial.description}
                    </Text>
                    
                    <Button 
                      variant={tutorial.coming ? "ghost" : "outline"} 
                      size="sm" 
                      className="w-full"
                      disabled={tutorial.coming}
                    >
                      {tutorial.coming ? "Em breve" : "Assistir"}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Card className="p-8 max-w-2xl mx-auto">
              <Title order={3} className="text-xl font-semibold mb-4">
                Quer um tutorial específico?
              </Title>
              <Text c="dimmed" className="mb-6">
                Tem alguma dúvida específica ou gostaria de um tutorial sobre um tópico? 
                Entre em contato e vamos priorizar sua sugestão.
              </Text>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => nav.push("/contato")}
              >
                Sugerir Tutorial
              </Button>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Tutoriais;