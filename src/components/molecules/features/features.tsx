import { Card } from "@mantine/core";
import { BarChart3, Clock, Mail, MessageSquare, Shield, Target, Zap, Brain, TrendingUp, Users, FileText, Smartphone } from "lucide-react";
import { Container } from "@/components/atoms/container";

const features = [
  {
    icon: BarChart3,
    title: "Relatórios com IA",
    description: "Relatórios totalmente personalizados, com vários templates prontos para diversos cenários e canais de marketing e vendas. Além disso, use a IA para gerar insights instantâneos.",
    gradient: "from-secondary/10 to-secondary/5",
    iconColor: "text-secondary",
  },
  {
    icon: Target,
    title: "Dashboards Profissionais",
    description: "Templates de Dashboards para todos os tipos de empresas. De gestão de tráfego a SEO, passando por redes sociais e canais de vendas. Controle os indicadores da sua empresa num só painel.",
    gradient: "from-accent/10 to-accent/5",
    iconColor: "text-accent",
  },
  {
    icon: Clock,
    title: "Automação Inteligente",
    description: "Crie relatórios automatizados, que podem ser enviados diretamente via e-mail. Selecione a frequência, o período de análise, um template e para quem deseja enviar.",
    gradient: "from-tertiary/10 to-tertiary/5",
    iconColor: "text-tertiary",
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description: "Além de gerar insights sobre os dados dos seus canais de marketing e vendas, a IA conta com assistentes personalizados para Gerenciamento de Tráfego e Instagram.",
    gradient: "from-quaternary/10 to-quaternary/5",
    iconColor: "text-quaternary",
  },
  {
    icon: TrendingUp,
    title: "Controle Total",
    description: "Monitore seus indicadores de marketing/vendas e o orçamento de suas campanhas. Receba alertas de desempenho e tome decisões mais rápidas para garantir que suas metas serão atingidas!",
    gradient: "from-secondary/10 to-accent/5",
    iconColor: "text-secondary",
  },
  {
    icon: Users,
    title: "Visão Unificada",
    description: "Os principais dados dos seus projetos, uma única tela. Monitore as principais métricas de todos os projetos em um único painel, facilitando a análise dos indicadores mais importantes.",
    gradient: "from-accent/10 to-tertiary/5",
    iconColor: "text-accent",
  },
];

export function Features() {
  return (
    <section className="mobile-section bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
        <h2 className="mobile-title font-bold text-foreground mb-4 md:mb-6">
          Pare de perder tempo com relatórios e dashboards feitos manualmente e ganhe produtividade!
        </h2>
        <p className="mobile-text text-muted-foreground leading-relaxed">
          Não perca tempo com tarefas manuais, aumente sua produtividade e seus resultados com marketing digital.
          Realize um teste simples agora e veja como o TráfegoClaro vai <span className="font-semibold text-foreground">otimizar</span> a maneira como você trabalha.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mobile-gap max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Card
            key={index}
            className={`p-6 md:p-8 shadow-subtle hover:shadow-strong transition-all duration-300 border-0 bg-gradient-to-br ${feature.gradient} group cursor-pointer`}
          >
            <div className="space-y-4">
              <div className={`w-16 h-16 rounded-2xl bg-white/80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12 md:mt-16">
        <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
          <Zap className="w-3 h-3 md:w-4 md:h-4" />
          Teste grátis por 3 dias
        </div>
        <p className="text-xs md:text-sm text-muted-foreground">
          Sem cartão de crédito • Cancele quando quiser • Suporte 24/7
        </p>
      </div>
    </section>
  );
}