"use client";
import { useNav } from "@/lib/navigation";

export function Footer() {
  const nav = useNav();
  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold text-foreground">RelatoriFy</span>
            </div>
            <p className="text-muted-foreground">
              Relatórios automáticos de tráfego pago para gestores e agências.
            </p>
          </div>
          
          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Produto</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Recursos</a></li>
              <li><button onClick={() => nav.push("/precos")} className="hover:text-foreground transition-colors">Preços</button></li>
              <li><button onClick={() => nav.push("/integracoes")} className="hover:text-foreground transition-colors">Integrações</button></li>
              <li><button onClick={() => nav.push("/api")} className="hover:text-foreground transition-colors">API</button></li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Suporte</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><button onClick={() => nav.push("/documentacao")} className="hover:text-foreground transition-colors">Documentação</button></li>
              <li><button onClick={() => nav.push("/tutoriais")} className="hover:text-foreground transition-colors">Tutoriais</button></li>
              <li><button onClick={() => nav.push("/contato")} className="hover:text-foreground transition-colors">Contato</button></li>
              <li><button onClick={() => nav.push("/status")} className="hover:text-foreground transition-colors">Status</button></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><button onClick={() => nav.push("/privacidade")} className="hover:text-foreground transition-colors">Privacidade</button></li>
              <li><button onClick={() => nav.push("/termos")} className="hover:text-foreground transition-colors">Termos</button></li>
              <li><button onClick={() => nav.push("/cookies")} className="hover:text-foreground transition-colors">Cookies</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 RelatoriFy. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}