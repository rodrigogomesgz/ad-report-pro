import { Card, Title, Text } from "@mantine/core";
import { Button } from "@/components/atoms/button";
import { ArrowLeft, FileText, Scale, AlertCircle } from "lucide-react";
import { useNav } from "@/lib/navigation";

export function Termos() {
  const nav = useNav();

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
            Termos de Uso
          </Title>
          <Text size="lg" c="dimmed" className="max-w-2xl mx-auto">
            Condições gerais para uso da plataforma RelatoriFy e nossos serviços.
          </Text>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Resumo */}
          <Card className="p-8 bg-blue-50 border-blue-200">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <Title order={3} className="text-xl font-semibold mb-2">
                  Resumo dos Termos
                </Title>
                <Text c="dimmed">
                  Ao usar o RelatoriFy, você concorda em usar nossos serviços de forma responsável, 
                  pagar pelas assinaturas conforme escolhido e respeitar os direitos de propriedade intelectual.
                </Text>
              </div>
            </div>
          </Card>

          {/* Seções */}
          <div className="space-y-8">
            <Card className="p-6">
              <Title order={3} className="text-lg font-semibold mb-4">
                1. Aceitação dos Termos
              </Title>
              <Text size="sm" c="dimmed">
                Ao acessar e usar o RelatoriFy, você aceita estar vinculado a estes Termos de Uso. 
                Se você não concorda com algum destes termos, não deve usar nossos serviços.
              </Text>
            </Card>

            <Card className="p-6">
              <Title order={3} className="text-lg font-semibold mb-4">
                2. Descrição do Serviço
              </Title>
              <Text size="sm" c="dimmed" className="mb-4">
                O RelatoriFy é uma plataforma que conecta suas contas de anúncios (Google Ads, Meta Ads) 
                e gera relatórios automatizados em formato PDF.
              </Text>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <Text size="sm" c="dimmed">Integração com plataformas de anúncios via OAuth</Text>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <Text size="sm" c="dimmed">Geração automática de relatórios PDF</Text>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <Text size="sm" c="dimmed">Entrega por email</Text>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <Title order={3} className="text-lg font-semibold mb-4">
                3. Conta de Usuário
              </Title>
              <div className="space-y-3 text-sm">
                <div>
                  <Text fw={600} className="mb-1">Responsabilidade:</Text>
                  <Text c="dimmed">Você é responsável por manter a segurança da sua conta e senha.</Text>
                </div>
                <div>
                  <Text fw={600} className="mb-1">Informações precisas:</Text>
                  <Text c="dimmed">Deve fornecer informações verdadeiras e atualizadas.</Text>
                </div>
                <div>
                  <Text fw={600} className="mb-1">Uso autorizado:</Text>
                  <Text c="dimmed">Não compartilhe sua conta com terceiros não autorizados.</Text>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <Title order={3} className="text-lg font-semibold mb-4">
                4. Planos e Pagamentos
              </Title>
              <div className="space-y-3 text-sm">
                <div>
                  <Text fw={600} className="mb-1">Teste:</Text>
                  <Text c="dimmed">Período de teste de 7 dias por R$ 1,00.</Text>
                </div>
                <div>
                  <Text fw={600} className="mb-1">Assinatura mensal:</Text>
                  <Text c="dimmed">R$ 67,00 por mês após o período de teste.</Text>
                </div>
                <div>
                  <Text fw={600} className="mb-1">Cobrança:</Text>
                  <Text c="dimmed">Pagamentos processados via Stripe. Renovação automática até cancelamento.</Text>
                </div>
                <div>
                  <Text fw={600} className="mb-1">Cancelamento:</Text>
                  <Text c="dimmed">Pode cancelar a qualquer momento. Acesso mantido até o fim do período pago.</Text>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <Title order={3} className="text-lg font-semibold mb-4">
                5. Uso Aceitável
              </Title>
              <Text size="sm" c="dimmed" className="mb-4">
                Você concorda em não:
              </Text>
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-2">
                  <AlertCircle size={16} className="text-red-500 mt-0.5" />
                  <Text c="dimmed">Usar o serviço para atividades ilegais ou não autorizadas</Text>
                </div>
                <div className="flex items-start space-x-2">
                  <AlertCircle size={16} className="text-red-500 mt-0.5" />
                  <Text c="dimmed">Tentar acessar dados de outros usuários</Text>
                </div>
                <div className="flex items-start space-x-2">
                  <AlertCircle size={16} className="text-red-500 mt-0.5" />
                  <Text c="dimmed">Fazer engenharia reversa ou copiar nosso software</Text>
                </div>
                <div className="flex items-start space-x-2">
                  <AlertCircle size={16} className="text-red-500 mt-0.5" />
                  <Text c="dimmed">Sobrecarregar nossos sistemas com uso excessivo</Text>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <Title order={3} className="text-lg font-semibold mb-4">
                6. Propriedade Intelectual
              </Title>
              <Text size="sm" c="dimmed">
                Todo o conteúdo, funcionalidades e tecnologia do RelatoriFy são propriedade nossa 
                e estão protegidos por direitos autorais, marcas registradas e outras leis de 
                propriedade intelectual.
              </Text>
            </Card>

            <Card className="p-6">
              <Title order={3} className="text-lg font-semibold mb-4">
                7. Limitação de Responsabilidade
              </Title>
              <Text size="sm" c="dimmed">
                O RelatoriFy é fornecido "como está". Não garantimos que o serviço será 
                ininterrupto ou livre de erros. Nossa responsabilidade está limitada ao 
                valor pago pelos serviços.
              </Text>
            </Card>

            <Card className="p-6">
              <Title order={3} className="text-lg font-semibold mb-4">
                8. Modificações dos Termos
              </Title>
              <Text size="sm" c="dimmed">
                Podemos atualizar estes termos ocasionalmente. Mudanças significativas serão 
                comunicadas por email. O uso continuado após as alterações constitui 
                aceitação dos novos termos.
              </Text>
            </Card>

            <Card className="p-6">
              <Title order={3} className="text-lg font-semibold mb-4">
                9. Lei Aplicável
              </Title>
              <Text size="sm" c="dimmed">
                Estes termos são regidos pelas leis brasileiras. Disputas serão resolvidas 
                nos tribunais do Brasil.
              </Text>
            </Card>
          </div>

          {/* Contato */}
          <Card className="p-8 text-center">
            <Title order={3} className="text-xl font-semibold mb-4">
              Dúvidas sobre os Termos?
            </Title>
            <Text c="dimmed" className="mb-6">
              Nossa equipe jurídica está disponível para esclarecer qualquer questão 
              sobre estes termos de uso.
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
    </div>
  );
}

export default Termos;