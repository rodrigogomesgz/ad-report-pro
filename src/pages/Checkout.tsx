"use client";
import { Card, Title, Text, TextInput, Alert } from "@mantine/core";
import { Button } from "@/components/atoms/button";
import { CheckCircle, ArrowLeft, CreditCard, Loader } from "lucide-react";
import { useNav } from "@/lib/navigation";
import { PageTemplate } from "@/components/templates/pageTemplate";
import { stripeService } from "@/services/stripeService";
import { useState } from "react";

export function Checkout() {
  const nav = useNav();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleStartTest = async () => {
    setIsLoading(true);
    setError("");

    try {
      if (stripeService.isConfigured()) {
        // Usar Stripe real com cupom de 100%
        await stripeService.applyFreeTrialCoupon();
      } else {
        // Fallback para MVP sem Stripe configurado
        console.log("Stripe not configured, using mock checkout");
        nav.push("/connect");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setError("Erro ao processar o checkout. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageTemplate>
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6">
            <img
              src="/logo.png"
              alt="TráfegoClaro"
              className="w-16 h-16"
            />
          </div>
          <Title order={1} className="text-3xl font-bold text-foreground mb-4">
            Teste o TráfegoClaro
          </Title>
          <Text size="lg" c="dimmed">
            Experimente por apenas R$1 e veja como é fácil
          </Text>
        </div>

        {/* Pricing Card */}
        <Card className="p-8 shadow-strong border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <CheckCircle className="w-4 h-4" />
              Teste Grátis por 7 dias
            </div>
            <div className="text-4xl font-bold text-foreground mb-2">
              R$ 1,00
            </div>
            <Text c="dimmed" size="sm">
              Primeiros 7 dias, depois R$ 67/mês
            </Text>
          </div>

          {/* Features */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
              <Text size="sm">Relatórios de Google Ads e Meta Ads</Text>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
              <Text size="sm">PDF pronto para apresentação</Text>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
              <Text size="sm">Entrega por e-mail</Text>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
              <Text size="sm">KPIs essenciais</Text>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
              <Text size="sm">Cancele quando quiser</Text>
            </div>
          </div>

          {/* Error Alert */}
          {error && (
            <Alert color="red" className="mb-6">
              {error}
            </Alert>
          )}

          {/* Email Input */}
          <div className="mb-6">
            <TextInput
              label="Email para receber o relatório"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
          </div>

          {/* CTA Button */}
          <Button
            variant="hero"
            size="lg"
            onClick={handleStartTest}
            disabled={isLoading || !email}
            className="w-full h-14 text-lg font-semibold"
          >
            {isLoading ? (
              <>
                <Loader className="w-5 h-5 animate-spin mr-2" />
                Processando...
              </>
            ) : (
              <>
                <CreditCard className="w-5 h-5 mr-2" />
                Começar Teste Grátis
              </>
            )}
          </Button>

          {/* Security Info */}
          <div className="mt-6 text-center">
            <Text size="xs" c="dimmed">
              🔒 Pagamento seguro processado pelo Stripe
            </Text>
          </div>
        </Card>

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <Text size="sm" c="dimmed" className="mb-4">
            Mais de 1.000 gestores de tráfego confiam no TráfegoClaro
          </Text>
          <div className="flex justify-center items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-secondary" />
              <span>Sem fidelidade</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-secondary" />
              <span>Suporte 24/7</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-secondary" />
              <span>Dados seguros</span>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default Checkout;