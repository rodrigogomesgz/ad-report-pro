"use client";
import { Button } from "@/components/atoms/button";
import { useNav } from "@/lib/navigation";

export function Header() {
  const nav = useNav();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-bold text-foreground">RelatoriFy</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Recursos
            </a>
            <button onClick={() => nav.push("/precos")} className="text-muted-foreground hover:text-foreground transition-colors">
              Preços
            </button>
            <button onClick={() => nav.push("/contato")} className="text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </button>
          </nav>
          
          {/* CTA */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => nav.push("/connect")}>
              Testar agora
            </Button>
            <Button variant="hero" onClick={() => nav.push("/checkout")}>
              R$ 1 por 7 dias
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}