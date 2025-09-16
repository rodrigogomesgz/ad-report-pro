import { Card, Title, Text } from "@mantine/core";
import { Button } from "@/components/atoms/button";
import { ArrowLeft, Shield, Eye, Cookie, Lock } from "lucide-react";
import { useNav } from "@/lib/navigation";
import { Header } from "@/components/organisms/header";
import { Footer } from "@/components/organisms/footer";

export function Privacidade() {
  const nav = useNav();

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
            Política de Privacidade
          </Title>
          <Text size="lg" c="dimmed" className="max-w-2xl mx-auto">
            Sua privacidade é fundamental para nós. Veja como protegemos e usamos seus dados.
          </Text>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Resumo */}
          <Card className="p-8 bg-blue-50 border-blue-200">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <Title order={3} className="text-xl font-semibold mb-2">
                  Compromisso com sua Privacidade
                </Title>
                <Text c="dimmed">
                  O TráfegoClaro coleta apenas os dados necessários para gerar seus relatórios de tráfego pago. 
                  Não vendemos, alugamos ou compartilhamos suas informações com terceiros para fins comerciais.
                </Text>
              </div>
            </div>
          </Card>

          {/* Seções */}
          <div className="space-y-8">
            <Card className="p-6">
              <div className="flex items-start space-x-4 mb-4">
                <Eye className="w-6 h-6 text-primary" />
                <Title order={3} className="text-lg font-semibold">
                  Dados que Coletamos
                </Title>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <Text fw={600} className="mb-2">Informações de Conta:</Text>
                  <Text c="dimmed">E-mail, nome e informações de pagamento para criar e gerenciar sua conta.</Text>
                </div>
                <div>
                  <Text fw={600} className="mb-2">Dados de Campanhas:</Text>
                  <Text c="dimmed">Métricas de suas campanhas do Google Ads e Meta Ads necessárias para gerar relatórios.</Text>
                </div>
                <div>
                  <Text fw={600} className="mb-2">Dados de Uso:</Text>
                  <Text c="dimmed">Como você usa nossa plataforma para melhorar nossos serviços.</Text>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4 mb-4">
                <Lock className="w-6 h-6 text-primary" />
                <Title order={3} className="text-lg font-semibold">
                  Como Protegemos seus Dados
                </Title>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <Text c="dimmed">Criptografia em trânsito e em repouso</Text>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <Text c="dimmed">Acesso restrito apenas para funcionários autorizados</Text>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <Text c="dimmed">Servidores seguros com certificação ISO</Text>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <Text c="dimmed">Monitoramento 24/7 contra ameaças</Text>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4 mb-4">
                <Cookie className="w-6 h-6 text-primary" />
                <Title order={3} className="text-lg font-semibold">
                  Cookies e Tecnologias Similares
                </Title>
              </div>
              <Text size="sm" c="dimmed" className="mb-4">
                Usamos cookies essenciais para o funcionamento da plataforma e cookies analíticos 
                para entender como melhorar nossos serviços.
              </Text>
              <Button variant="outline" size="sm" onClick={() => nav.push("/cookies")}>
                Ver Política de Cookies
              </Button>
            </Card>

            <Card className="p-6">
              <Title order={3} className="text-lg font-semibold mb-4">
                Seus Direitos
              </Title>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <Text fw={600} className="mb-2">Acesso:</Text>
                  <Text c="dimmed">Solicitar cópia dos seus dados</Text>
                </div>
                <div>
                  <Text fw={600} className="mb-2">Correção:</Text>
                  <Text c="dimmed">Corrigir dados incorretos</Text>
                </div>
                <div>
                  <Text fw={600} className="mb-2">Exclusão:</Text>
                  <Text c="dimmed">Solicitar remoção dos seus dados</Text>
                </div>
                <div>
                  <Text fw={600} className="mb-2">Portabilidade:</Text>
                  <Text c="dimmed">Exportar seus dados</Text>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <Title order={3} className="text-lg font-semibold mb-4">
                Compartilhamento de Dados
              </Title>
              <Text size="sm" c="dimmed" className="mb-4">
                Seus dados são compartilhados apenas em situações específicas:
              </Text>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <Text c="dimmed">Com provedores de serviços que nos ajudam a operar a plataforma</Text>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <Text c="dimmed">Quando exigido por lei ou autoridades competentes</Text>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <Text c="dimmed">Com seu consentimento explícito</Text>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <Title order={3} className="text-lg font-semibold mb-4">
                Retenção de Dados
              </Title>
              <Text size="sm" c="dimmed">
                Mantemos seus dados apenas pelo tempo necessário para fornecer nossos serviços. 
                Dados de campanhas são mantidos por 2 anos após o cancelamento da conta para 
                fins de histórico e compliance.
              </Text>
            </Card>
          </div>

          {/* Contato */}
          <Card className="p-8 text-center">
            <Title order={3} className="text-xl font-semibold mb-4">
              Dúvidas sobre Privacidade?
            </Title>
            <Text c="dimmed" className="mb-6">
              Nossa equipe está disponível para esclarecer qualquer questão sobre 
              como tratamos seus dados pessoais.
            </Text>
            <Button 
              variant="hero"
              onClick={() => nav.push("/contato")}
            >
              Entrar em Contato
            </Button>
          </Card>

          {/* Atualização */}
          <div className="text-center pt-8 border-t">
            <Text size="sm" c="dimmed">
              Última atualização: 15 de janeiro de 2024
            </Text>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Privacidade;