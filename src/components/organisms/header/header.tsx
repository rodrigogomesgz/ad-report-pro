"use client";
import { Button } from "@/components/atoms/button";
import { ThemeToggle } from "@/components/atoms/themeToggle";
import { Container } from "@/components/atoms/container";
import { useNav } from "@/lib/navigation";

export function Header() {
  const nav = useNav();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <Container size="xl" padding="lg">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => nav.push("/")}>
            <img 
              src="/logo-dark.png"
              alt="TráfegoClaro" 
              className="h-12"
            />
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
            {/* <ThemeToggle /> */}
            <Button variant="hero" onClick={() => nav.push("/connect")}>
              Testar agora
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}