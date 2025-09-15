import { Button } from "@/components/atoms/button";
import { Card } from "@mantine/core";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Teste",
    price: "R$ 1",
    period: "primeiros 7 dias",
    description: "Teste completo da plataforma",
    features: [
      "Conexão ilimitada de contas",
      "Relatórios semanais",
      "Entrega por e-mail",
      "Suporte por chat",
    ],
    cta: "Começar teste",
    highlighted: false,
  },
  {
    name: "Profissional",
    price: "R$ 67",
    period: "por mês",
    description: "Para gestores e agências",
    features: [
      "Tudo do plano de teste",
      "Relatórios ilimitados",
      "Entrega WhatsApp",
      "Relatórios personalizados",
      "Suporte prioritário",
    ],
    cta: "Assinar agora",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "R$ 87",
    period: "por mês",
    description: "Relatórios diários",
    features: [
      "Tudo do plano Profissional",
      "Relatórios diários",
      "Análises avançadas",
      "API de integração",
      "Suporte dedicado",
    ],
    cta: "Falar com especialista",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Preços transparentes e justos
          </h2>
          <p className="text-lg text-muted-foreground">
            Comece com um teste de R$ 1 e evolua conforme sua necessidade.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 relative ${
                plan.highlighted 
                  ? 'shadow-strong border-primary/20 bg-gradient-to-b from-primary/5 to-transparent' 
                  : 'shadow-subtle'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.highlighted ? "hero" : "outline"} 
                className="w-full"
                size="lg"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Todos os planos incluem integração com Google Ads e Meta Ads
          </p>
        </div>
      </div>
    </section>
  );
}