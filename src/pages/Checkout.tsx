"use client";
import { Card, Title, Text } from "@mantine/core";
import { Button } from "@/components/atoms/button";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { useNav } from "@/lib/navigation";

export function Checkout() {
  const nav = useNav();

  const handleStartTest = async () => {
    // TODO: Integrate with Stripe Checkout
    // For MVP, redirect directly to connect page
    nav.push("/connect");
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
          <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-2xl">R</span>
          </div>
          <Title order={1} className="text-3xl font-bold text-foreground mb-4">
            Teste o RelatoriFy
          </Title>
          <Text size="lg" c="dimmed">
            Experimente por apenas R$ 1 e veja como é fácil
          </Text>
        </div>

        <Card className="p-8 shadow-medium mb-6">
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-foreground mb-2">R$ 1</div>
            <Text c="dimmed">Teste por 7 dias</Text>
            <Text size="sm" c="dimmed" className="mt-2">
              Depois R$ 67/mês. Cancele quando quiser.
            </Text>
          </div>

          <div className="space-y-3 mb-8">
            <div className="flex items-center space-x-3">
              <CheckCircle size={16} className="text-green-500" />
              <Text size="sm">Conectar Google Ads e Meta Ads</Text>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle size={16} className="text-green-500" />
              <Text size="sm">Relatórios PDF profissionais</Text>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle size={16} className="text-green-500" />
              <Text size="sm">Entrega por email em minutos</Text>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle size={16} className="text-green-500" />
              <Text size="sm">Suporte via WhatsApp</Text>
            </div>
          </div>

          <Button 
            variant="hero" 
            size="lg" 
            className="w-full"
            onClick={handleStartTest}
          >
            Começar teste por R$ 1
          </Button>
        </Card>

        <div className="text-center">
          <Text size="xs" c="dimmed">
            Pagamento seguro via Stripe. Cancele a qualquer momento.
          </Text>
        </div>
      </div>
    </div>
  );
}

export default Checkout;