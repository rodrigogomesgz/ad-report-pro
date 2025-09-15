import { Card, Title, Text } from "@mantine/core";
import { Button } from "@/components/atoms/button";
import { ArrowLeft, Code, Key, Zap, Shield } from "lucide-react";
import { useNav } from "@/lib/navigation";
import { Header } from "@/components/organisms/header";
import { Footer } from "@/components/organisms/footer";

export function Api() {
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
            API RelatoriFy
          </Title>
          <Text size="lg" c="dimmed" className="max-w-2xl mx-auto">
            Integre o RelatoriFy em suas aplicações e automatize a geração de relatórios 
            de tráfego pago diretamente no seu sistema.
          </Text>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Status */}
          <Card className="p-8 bg-yellow-50 border-yellow-200 shadow-subtle hover:shadow-hover transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <Title order={3} className="text-xl font-semibold mb-2">
                  API em Desenvolvimento
                </Title>
                <Text c="dimmed">
                  Nossa API REST está sendo desenvolvida e estará disponível em breve. 
                  Cadastre-se para ser notificado quando estiver pronta.
                </Text>
              </div>
            </div>
          </Card>

          {/* Recursos planejados */}
          <div>
            <Title order={2} className="text-2xl font-bold text-foreground mb-8">
              Recursos Planejados
            </Title>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 shadow-subtle hover:shadow-hover transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <Title order={4} className="font-semibold mb-2">
                      Geração de Relatórios
                    </Title>
                    <Text size="sm" c="dimmed">
                      Gere relatórios programaticamente via API, com parâmetros 
                      customizáveis de período, plataformas e métricas.
                    </Text>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-subtle hover:shadow-hover transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Key className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <Title order={4} className="font-semibold mb-2">
                      Autenticação Segura
                    </Title>
                    <Text size="sm" c="dimmed">
                      Sistema de API keys com diferentes níveis de permissão 
                      para máxima segurança.
                    </Text>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-subtle hover:shadow-hover transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <Title order={4} className="font-semibold mb-2">
                      Webhooks
                    </Title>
                    <Text size="sm" c="dimmed">
                      Receba notificações automáticas quando relatórios 
                      estiverem prontos ou ocorrerem eventos importantes.
                    </Text>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-subtle hover:shadow-hover transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <Title order={4} className="font-semibold mb-2">
                      Rate Limiting
                    </Title>
                    <Text size="sm" c="dimmed">
                      Controle inteligente de taxa para garantir performance 
                      e disponibilidade para todos os usuários.
                    </Text>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Exemplo de código */}
          <div>
            <Title order={2} className="text-2xl font-bold text-foreground mb-8">
              Exemplo de Uso (Preview)
            </Title>
            
            <Card className="p-6 bg-gray-900 text-white shadow-subtle hover:shadow-hover transition-all duration-300">
              <pre className="text-sm overflow-x-auto">
{`// Gerar relatório via API
const response = await fetch('https://api.relatorify.com/v1/reports', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    start_date: '2024-01-01',
    end_date: '2024-01-31',
    platforms: ['google_ads', 'meta_ads'],
    format: 'pdf',
    email: 'cliente@empresa.com'
  })
});

const report = await response.json();
console.log('Relatório gerado:', report.download_url);`}
              </pre>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Card className="p-8 max-w-2xl mx-auto shadow-subtle hover:shadow-hover transition-all duration-300">
              <Title order={3} className="text-xl font-semibold mb-4">
                Interessado na API?
              </Title>
              <Text c="dimmed" className="mb-6">
                Deixe seu contato e te avisaremos quando a API estiver disponível. 
                Usuários early adopters terão acesso prioritário e desconto especial.
              </Text>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => nav.push("/contato")}
              >
                Manifestar Interesse
              </Button>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Api;