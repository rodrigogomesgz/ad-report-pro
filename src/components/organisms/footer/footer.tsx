export function Footer() {
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
          
          {/* Contato */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contato</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="mailto:contato@relatorify.com" className="hover:text-foreground transition-colors">
                  contato@relatorify.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/5511999999999" target="_blank" className="hover:text-foreground transition-colors">
                  WhatsApp Suporte
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/privacidade" className="hover:text-foreground transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/termos" className="hover:text-foreground transition-colors">
                  Termos de Uso
                </a>
              </li>
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