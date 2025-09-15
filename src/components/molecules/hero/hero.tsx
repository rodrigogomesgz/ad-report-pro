"use client";
import { Button } from "@/components/atoms/button";
import { useNav } from "@/lib/navigation";
export function Hero() {
  const nav = useNav();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.primary.DEFAULT)_1px,transparent_0)] [background-size:24px_24px]" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
            Relatórios automáticos de{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              tráfego pago
            </span>{" "}
            em PDF, sem complicação
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Conecte sua conta e receba seu relatório em minutos
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="min-w-[200px]"
              onClick={() => nav.push("/checkout")}
            >
              Teste por R$ 1
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="min-w-[200px]"
              onClick={() => nav.push("/connect")}
            >
              Ver como funciona
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="text-sm text-muted-foreground space-y-2">
            <p>Depois R$ 67/mês. Cancele quando quiser.</p>
            <p>Conecta com Google Ads e Meta Ads</p>
          </div>
        </div>
      </div>
    </section>
  );
}