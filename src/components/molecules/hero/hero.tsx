"use client";
import { Button } from "@/components/atoms/button";
import { Container } from "@/components/atoms/container";
import { ChartSkeleton } from "@/components/atoms/chartSkeleton";
import { useNav } from "@/lib/navigation";
import { BarChart3, Zap, Users, Shield, TrendingUp } from "lucide-react";

export function Hero() {
  const nav = useNav();

  return (
    <section className="relative min-h-screen max-md:mt-24 flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tertiary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Mais de 1.000 gestores de tráfego confiam
            </div>

            {/* Main Headline */}
            <h1 className="mobile-title font-bold text-foreground leading-tight mb-6">
              Crie Relatórios de{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Tráfego Pago
              </span>{" "}
              em apenas 3 segundos
            </h1>

            {/* Subheadline */}
            <p className="mobile-subtitle text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Veja e analise em uma única tela os principais indicadores de Google Ads, Meta Ads e muito mais.
              <span className="font-semibold text-foreground"> Gere insights com Inteligência Artificial.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start items-center mb-6 md:mb-8">
              <Button
                variant="hero"
                size="lg"
                className="mobile-button h-12 md:h-14 text-base md:text-lg font-semibold"
                onClick={() => nav.push("/checkout")}
              >
                Quero testar agora
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="mobile-button h-12 md:h-14 text-base md:text-lg"
                onClick={() => nav.push("/connect")}
              >
                Ver demonstração
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-secondary" />
                <span>3 dias grátis</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-secondary" />
                <span>Sem cartão</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-secondary" />
                <span>Cancele quando quiser</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-strong p-6 border border-border/50">
              <ChartSkeleton type="dashboard" height={300} className="border-0 shadow-none p-0" />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}