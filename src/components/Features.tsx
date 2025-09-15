import { Card } from "@/components/ui/card";
import { BarChart3, Clock, Mail, MessageSquare, Shield, Target } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Relatórios Profissionais",
    description: "KPIs essenciais, gráficos claros e insights automatizados em formato PDF.",
  },
  {
    icon: Clock,
    title: "Totalmente Automático",
    description: "Configure uma vez e receba relatórios semanais ou diários sem intervenção manual.",
  },
  {
    icon: Target,
    title: "Múltiplas Plataformas",
    description: "Conecte Google Ads e Meta Ads em uma única solução integrada.",
  },
  {
    icon: Mail,
    title: "Entrega por E-mail",
    description: "Relatórios enviados diretamente para sua caixa de entrada com links compartilháveis.",
  },
  {
    icon: MessageSquare,
    title: "Notificação WhatsApp",
    description: "Receba alertas via WhatsApp quando novos relatórios estiverem prontos.",
  },
  {
    icon: Shield,
    title: "Dados Seguros",
    description: "Conexões OAuth seguras e dados protegidos com criptografia de ponta a ponta.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simplifique sua gestão de tráfego pago
          </h2>
          <p className="text-lg text-muted-foreground">
            Todas as ferramentas necessárias para automatizar relatórios e manter clientes informados.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 shadow-subtle hover:shadow-medium transition-shadow duration-300">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;