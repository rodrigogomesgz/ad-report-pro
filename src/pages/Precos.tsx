import { Card, Title, Text } from "@mantine/core";
import { Button } from "@/components/atoms/button";
import { ArrowLeft, Check } from "lucide-react";
import { useNav } from "@/lib/navigation";

export function Precos() {
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
            Preços Simples e Transparentes
          </Title>
          <Text size="lg" c="dimmed" className="max-w-2xl mx-auto">
            Comece com um teste de R$ 1 e depois pague apenas R$ 67/mês. 
            Sem pegadinhas, sem taxas escondidas.
          </Text>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Teste */}
          <Card className="p-8 border-2 border-dashed border-border">
            <div className="text-center">
              <Text c="dimmed" size="sm" fw={600} className="mb-2">TESTE</Text>
              <div className="mb-4">
                <span className="text-4xl font-bold text-foreground">R$ 1</span>
                <Text c="dimmed" size="sm" className="mt-1">por 7 dias</Text>
              </div>
              <Text c="dimmed" className="mb-6">
                Experimente todas as funcionalidades
              </Text>
              
              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center space-x-3">
                  <Check size={16} className="text-green-500" />
                  <Text size="sm">Conectar Google Ads e Meta Ads</Text>
                </div>
                <div className="flex items-center space-x-3">
                  <Check size={16} className="text-green-500" />
                  <Text size="sm">Relatórios PDF ilimitados</Text>
                </div>
                <div className="flex items-center space-x-3">
                  <Check size={16} className="text-green-500" />
                  <Text size="sm">Entrega por email</Text>
                </div>
                <div className="flex items-center space-x-3">
                  <Check size={16} className="text-green-500" />
                  <Text size="sm">Suporte via WhatsApp</Text>
                </div>
              </div>

              <Button 
                variant="outline" 
                size="lg" 
                className="w-full"
                onClick={() => nav.push("/checkout")}
              >
                Começar teste
              </Button>
            </div>
          </Card>

          {/* Mensal */}
          <Card className="p-8 border-2 border-primary shadow-elegant">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                MAIS POPULAR
              </div>
              <Text c="dimmed" size="sm" fw={600} className="mb-2">MENSAL</Text>
              <div className="mb-4">
                <span className="text-4xl font-bold text-foreground">R$ 67</span>
                <Text c="dimmed" size="sm" className="mt-1">por mês</Text>
              </div>
              <Text c="dimmed" className="mb-6">
                Após o período de teste
              </Text>
              
              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center space-x-3">
                  <Check size={16} className="text-green-500" />
                  <Text size="sm">Tudo do teste incluído</Text>
                </div>
                <div className="flex items-center space-x-3">
                  <Check size={16} className="text-green-500" />
                  <Text size="sm">Suporte prioritário</Text>
                </div>
                <div className="flex items-center space-x-3">
                  <Check size={16} className="text-green-500" />
                  <Text size="sm">Relatórios personalizados</Text>
                </div>
                <div className="flex items-center space-x-3">
                  <Check size={16} className="text-green-500" />
                  <Text size="sm">Cancele quando quiser</Text>
                </div>
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={() => nav.push("/checkout")}
              >
                Assinar agora
              </Button>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Text size="sm" c="dimmed">
            Todas as assinaturas incluem 30 dias de garantia. 
            Cancele a qualquer momento sem burocracia.
          </Text>
        </div>
      </div>
    </div>
  );
}

export default Precos;