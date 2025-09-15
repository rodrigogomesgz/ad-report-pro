import { Card, Title, Text } from "@mantine/core";
import { Button } from "@/components/atoms/button";
import { ArrowLeft, Cookie, Settings, Eye, Shield } from "lucide-react";
import { useNav } from "@/lib/navigation";
import { Header } from "@/components/organisms/header";
import { Footer } from "@/components/organisms/footer";

export function Cookies() {
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
            Política de Cookies
          </Title>
          <Text size="lg" c="dimmed" className="max-w-2xl mx-auto">
            Como usamos cookies e tecnologias similares para melhorar sua experiência no RelatoriFy.
          </Text>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Resumo */}
          <Card className="p-8 bg-blue-50 border-blue-200">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Cookie className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <Title order={3} className="text-xl font-semibold mb-2">
                  O que são Cookies
                </Title>
                <Text c="dimmed">
                  Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando 
                  você visita um site. Eles nos ajudam a lembrar suas preferências e melhorar 
                  sua experiência.
                </Text>
              </div>
            </div>
          </Card>

          {/* Tipos de Cookies */}
          <div className="space-y-6">
            <Title order={2} className="text-2xl font-bold text-foreground">
              Tipos de Cookies que Usamos
            </Title>

            <Card className="p-6">
              <div className="flex items-start space-x-4 mb-4">
                <Shield className="w-6 h-6 text-green-600" />
                <Title order={3} className="text-lg font-semibold text-green-600">
                  Cookies Essenciais
                </Title>
              </div>
              <Text size="sm" c="dimmed" className="mb-4">
                Necessários para o funcionamento básico da plataforma. Não podem ser desabilitados.
              </Text>
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></div>
                  <Text c="dimmed">Autenticação e sessão de usuário</Text>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></div>
                  <Text c="dimmed">Preferências de idioma</Text>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></div>
                  <Text c="dimmed">Segurança e prevenção de fraudes</Text>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4 mb-4">
                <Eye className="w-6 h-6 text-blue-600" />
                <Title order={3} className="text-lg font-semibold text-blue-600">
                  Cookies Analíticos
                </Title>
              </div>
              <Text size="sm" c="dimmed" className="mb-4">
                Nos ajudam a entender como você usa a plataforma para melhorar nossos serviços.
              </Text>
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                  <Text c="dimmed">Páginas mais visitadas</Text>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                  <Text c="dimmed">Tempo gasto na plataforma</Text>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                  <Text c="dimmed">Erros e problemas técnicos</Text>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4 mb-4">
                <Settings className="w-6 h-6 text-purple-600" />
                <Title order={3} className="text-lg font-semibold text-purple-600">
                  Cookies de Funcionalidade
                </Title>
              </div>
              <Text size="sm" c="dimmed" className="mb-4">
                Armazenam suas preferências para personalizar sua experiência.
              </Text>
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2"></div>
                  <Text c="dimmed">Preferências de tema (claro/escuro)</Text>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2"></div>
                  <Text c="dimmed">Configurações de relatório</Text>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2"></div>
                  <Text c="dimmed">Lembrar escolhas de filtros</Text>
                </div>
              </div>
            </Card>
          </div>

          {/* Controle de Cookies */}
          <Card className="p-6">
            <Title order={3} className="text-lg font-semibold mb-4">
              Como Controlar Cookies
            </Title>
            <Text size="sm" c="dimmed" className="mb-4">
              Você pode gerenciar cookies através das configurações do seu navegador:
            </Text>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <Text fw={600} className="mb-2">Chrome:</Text>
                <Text c="dimmed">Configurações → Privacidade e segurança → Cookies</Text>
              </div>
              <div>
                <Text fw={600} className="mb-2">Firefox:</Text>
                <Text c="dimmed">Opções → Privacidade e segurança → Cookies</Text>
              </div>
              <div>
                <Text fw={600} className="mb-2">Safari:</Text>
                <Text c="dimmed">Preferências → Privacidade → Cookies</Text>
              </div>
              <div>
                <Text fw={600} className="mb-2">Edge:</Text>
                <Text c="dimmed">Configurações → Privacidade → Cookies</Text>
              </div>
            </div>
          </Card>

          {/* Terceiros */}
          <Card className="p-6">
            <Title order={3} className="text-lg font-semibold mb-4">
              Cookies de Terceiros
            </Title>
            <Text size="sm" c="dimmed" className="mb-4">
              Alguns cookies são definidos por serviços terceiros que usamos:
            </Text>
            <div className="space-y-3 text-sm">
              <div>
                <Text fw={600} className="mb-1">Stripe:</Text>
                <Text c="dimmed">Para processar pagamentos de forma segura</Text>
              </div>
              <div>
                <Text fw={600} className="mb-1">Google Analytics:</Text>
                <Text c="dimmed">Para análise de uso da plataforma (se habilitado)</Text>
              </div>
            </div>
          </Card>

          {/* Atualizações */}
          <Card className="p-6">
            <Title order={3} className="text-lg font-semibold mb-4">
              Atualizações desta Política
            </Title>
            <Text size="sm" c="dimmed">
              Podemos atualizar esta política ocasionalmente para refletir mudanças em nossos 
              serviços ou requisitos legais. Recomendamos revisar periodicamente.
            </Text>
          </Card>

          {/* Contato */}
          <Card className="p-8 text-center">
            <Title order={3} className="text-xl font-semibold mb-4">
              Dúvidas sobre Cookies?
            </Title>
            <Text c="dimmed" className="mb-6">
              Se você tem dúvidas sobre como usamos cookies ou quer exercer seus direitos, 
              entre em contato conosco.
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

export default Cookies;