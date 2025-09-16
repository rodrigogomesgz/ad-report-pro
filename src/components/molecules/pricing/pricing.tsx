import { Button } from "@/components/atoms/button";
import { Container } from "@/components/atoms/container";
import { Card } from "@mantine/core";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Teste",
    price: "R$1",
    period: "primeiros 7 dias",
    description: "Teste completo da plataforma",
    features: [
      "Relatórios de Google Ads e Meta Ads",
      "PDF pronto para apresentação",
      "Entrega por e-mail",
      "KPIs essenciais",
    ],
    cta: "Testar por R$1",
    highlighted: true,
  },
  {
    name: "Profissional",
    price: "R$67",
    period: "por mês",
    description: "Para gestores e agências",
    features: [
      "Tudo do plano de teste",
      "Relatórios ilimitados",
      "Gráficos e insights",
      "Suporte prioritário"
    ],
    cta: "Assinar agora",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section className="mobile-section bg-muted/30">
      <Container size="xl" padding="lg">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="mobile-title font-bold text-foreground mb-3 md:mb-4">
            Preços transparentes e justos
          </h2>
          <p className="mobile-text text-muted-foreground">
            Comece com um teste de R$1 e evolua conforme sua necessidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 mobile-gap max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-6 md:p-8 flex flex-col justify-between relative ${
                plan.highlighted 
                  ? 'shadow-strong border-primary/20 bg-gradient-to-b from-primary/5 to-transparent' 
                  : 'shadow-subtle'
              }`}
            >
             {plan.highlighted && (
                  <div className="text-center">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Mais Popular
                    </span>
                  </div>
                )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-5">{plan.name}</h3>
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
                className="mobile-button h-12 md:h-14 text-base md:text-lg font-semibold"
                size="lg"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <p className="text-sm md:text-base text-muted-foreground">
            Todos os planos incluem integração com Google Ads e Meta Ads
          </p>
        </div>
      </Container>
    </section>
  );
}