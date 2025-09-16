import { Card, Title, Text } from "@mantine/core";
import { Button } from "@/components/atoms/button";
import { ArrowLeft, CheckCircle, AlertCircle, Clock, Zap } from "lucide-react";
import { useNav } from "@/lib/navigation";
import { Header } from "@/components/organisms/header";
import { Footer } from "@/components/organisms/footer";

export function Status() {
  const nav = useNav();

  const servicos = [
    {
      name: "API Principal",
      status: "operational",
      description: "Geração de relatórios e integrações",
      uptime: "99.9%"
    },
    {
      name: "Google Ads Integration",
      status: "operational", 
      description: "Conexão com Google Ads API",
      uptime: "99.8%"
    },
    {
      name: "Meta Ads Integration",
      status: "operational",
      description: "Conexão com Meta Business API", 
      uptime: "99.7%"
    },
    {
      name: "PDF Generation",
      status: "operational",
      description: "Serviço de geração de relatórios PDF",
      uptime: "99.9%"
    },
    {
      name: "Email Delivery",
      status: "operational",
      description: "Entrega de relatórios por email",
      uptime: "99.8%"
    },
    {
      name: "Dashboard Web",
      status: "operational",
      description: "Interface web do TráfegoClaro",
      uptime: "100%"
    }
  ];

  const incidentes = [
    {
      date: "2024-01-15",
      title: "Lentidão na geração de relatórios",
      status: "resolved",
      description: "Alguns usuários experienciaram lentidão na geração de PDFs entre 14h-15h.",
      duration: "1h 23min"
    },
    {
      date: "2024-01-10", 
      title: "Manutenção programada",
      status: "scheduled",
      description: "Atualização dos servidores de integração com Google Ads.",
      duration: "30min"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "degraded":
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      case "down":
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      default:
        return <Clock className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "text-green-600";
      case "degraded":
        return "text-yellow-600";
      case "down":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "operational":
        return "Operacional";
      case "degraded":
        return "Degradado";
      case "down":
        return "Indisponível";
      case "resolved":
        return "Resolvido";
      case "scheduled":
        return "Programado";
      default:
        return "Desconhecido";
    }
  };

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
            Status dos Sistemas
          </Title>
          <Text size="lg" c="dimmed" className="max-w-2xl mx-auto">
            Monitore em tempo real o status de todos os nossos serviços e veja o histórico de incidentes.
          </Text>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Status Geral */}
          <Card className="p-8 bg-green-50 border-green-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <Title order={3} className="text-xl font-semibold mb-1">
                    Todos os sistemas operacionais
                  </Title>
                  <Text c="dimmed">
                    Última atualização: {new Date().toLocaleString()}
                  </Text>
                </div>
              </div>
              <div className="text-right">
                <Text fw={600} size="lg" className="text-green-600">99.8%</Text>
                <Text size="sm" c="dimmed">Uptime geral</Text>
              </div>
            </div>
          </Card>

          {/* Serviços */}
          <div>
            <Title order={2} className="text-2xl font-bold text-foreground mb-6">
              Status dos Serviços
            </Title>
            
            <div className="space-y-3">
              {servicos.map((servico, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(servico.status)}
                      <div>
                        <Text fw={600}>{servico.name}</Text>
                        <Text size="sm" c="dimmed">{servico.description}</Text>
                      </div>
                    </div>
                    <div className="text-right">
                      <Text fw={600} className={getStatusColor(servico.status)}>
                        {getStatusText(servico.status)}
                      </Text>
                      <Text size="sm" c="dimmed">{servico.uptime} uptime</Text>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Histórico de Incidentes */}
          <div>
            <Title order={2} className="text-2xl font-bold text-foreground mb-6">
              Histórico de Incidentes
            </Title>
            
            <div className="space-y-4">
              {incidentes.map((incidente, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-gray-300 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <Text fw={600}>{incidente.title}</Text>
                        <div className="flex items-center space-x-4">
                          <Text size="sm" c="dimmed">{incidente.duration}</Text>
                          <Text 
                            size="sm" 
                            fw={600}
                            className={getStatusColor(incidente.status)}
                          >
                            {getStatusText(incidente.status)}
                          </Text>
                        </div>
                      </div>
                      <Text size="sm" c="dimmed" className="mb-2">
                        {incidente.description}
                      </Text>
                      <Text size="xs" c="dimmed">
                        {new Date(incidente.date).toLocaleDateString('pt-BR')}
                      </Text>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Métricas */}
          <div>
            <Title order={2} className="text-2xl font-bold text-foreground mb-6">
              Métricas de Performance
            </Title>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                <Text fw={600} size="xl">1.2s</Text>
                <Text size="sm" c="dimmed">Tempo médio de geração</Text>
              </Card>
              
              <Card className="p-6 text-center">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <Text fw={600} size="xl">99.8%</Text>
                <Text size="sm" c="dimmed">Uptime últimos 30 dias</Text>
              </Card>
              
              <Card className="p-6 text-center">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <Text fw={600} size="xl">2min</Text>
                <Text size="sm" c="dimmed">Tempo de resolução médio</Text>
              </Card>
            </div>
          </div>

          {/* Inscrever-se para atualizações */}
          <Card className="p-8 text-center">
            <Title order={3} className="text-xl font-semibold mb-4">
              Receber Atualizações de Status
            </Title>
            <Text c="dimmed" className="mb-6">
              Seja notificado sobre manutenções programadas e incidentes em tempo real.
            </Text>
            <Button 
              variant="outline"
              onClick={() => nav.push("/contato")}
            >
              Inscrever-se
            </Button>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Status;