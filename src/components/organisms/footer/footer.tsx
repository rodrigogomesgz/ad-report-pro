"use client";
import { useNav } from "@/lib/navigation";
import { Container } from "@/components/atoms/container";

export function Footer() {
  const nav = useNav();
  return (
    <footer className="bg-muted/20 border-t border-border">
      <Container size="xl" padding="lg">
        <div className="py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-lg md:text-xl font-bold text-foreground">TráfegoClaro</span>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Relatórios automáticos de tráfego pago para gestores e agências.
            </p>
          </div>
          
          {/* Product */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-base md:text-lg font-semibold text-foreground">Produto</h4>
            <ul className="space-y-2 md:space-y-3 text-muted-foreground">
              <li><a href="#features" className="text-sm md:text-base hover:text-foreground transition-colors block py-1">Recursos</a></li>
              <li><button onClick={() => nav.push("/precos")} className="text-sm md:text-base hover:text-foreground transition-colors block py-1">Preços</button></li>
              <li><button onClick={() => nav.push("/integracoes")} className="text-sm md:text-base hover:text-foreground transition-colors block py-1">Integrações</button></li>
              <li><button onClick={() => nav.push("/api")} className="text-sm md:text-base hover:text-foreground transition-colors block py-1">API</button></li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-base md:text-lg font-semibold text-foreground">Suporte</h4>
            <ul className="space-y-2 md:space-y-3 text-muted-foreground">
              <li><button onClick={() => nav.push("/documentacao")} className="text-sm md:text-base hover:text-foreground transition-colors block py-1">Documentação</button></li>
              <li><button onClick={() => nav.push("/tutoriais")} className="text-sm md:text-base hover:text-foreground transition-colors block py-1">Tutoriais</button></li>
              <li><button onClick={() => nav.push("/contato")} className="text-sm md:text-base hover:text-foreground transition-colors block py-1">Contato</button></li>
              <li><button onClick={() => nav.push("/status")} className="text-sm md:text-base hover:text-foreground transition-colors block py-1">Status</button></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-base md:text-lg font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 md:space-y-3 text-muted-foreground">
              <li><button onClick={() => nav.push("/privacidade")} className="text-sm md:text-base hover:text-foreground transition-colors block py-1">Privacidade</button></li>
              <li><button onClick={() => nav.push("/termos")} className="text-sm md:text-base hover:text-foreground transition-colors block py-1">Termos</button></li>
              <li><button onClick={() => nav.push("/cookies")} className="text-sm md:text-base hover:text-foreground transition-colors block py-1">Cookies</button></li>
            </ul>
          </div>
          </div>
          
          <div className="border-t border-border mt-8 md:mt-12 pt-6 md:pt-8 text-center text-muted-foreground">
            <p className="text-sm md:text-base">&copy; 2024 TráfegoClaro. Todos os direitos reservados.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}