import { Card, Title, Text, TextInput, Textarea } from "@mantine/core";
import { Button } from "@/components/atoms/button";
import { ArrowLeft, Mail, MessageSquare, Phone } from "lucide-react";
import { useNav } from "@/lib/navigation";
import { Header } from "@/components/organisms/header";
import { Footer } from "@/components/organisms/footer";

export function Contato() {
  const nav = useNav();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <button 
          onClick={() => nav.back()} 
          className="flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Voltar
        </button>

        <div className="text-center mb-16">
          <Title order={1} className="text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </Title>
          <Text size="lg" c="dimmed" className="max-w-2xl mx-auto">
            Tem dúvidas? Precisa de ajuda? Nossa equipe está pronta para ajudar você.
          </Text>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <Card className="p-8 shadow-subtle hover:shadow-medium transition-all duration-300">
            <Title order={2} className="text-2xl font-bold text-foreground mb-6">
              Envie sua mensagem
            </Title>
            
            <div className="space-y-6">
              <div>
                <Text fw={600} size="sm" className="mb-2">Nome completo</Text>
                <TextInput
                  placeholder="Seu nome"
                  size="md"
                />
              </div>
              
              <div>
                <Text fw={600} size="sm" className="mb-2">E-mail</Text>
                <TextInput
                  placeholder="seu@email.com"
                  size="md"
                  type="email"
                />
              </div>
              
              <div>
                <Text fw={600} size="sm" className="mb-2">Assunto</Text>
                <TextInput
                  placeholder="Como podemos ajudar?"
                  size="md"
                />
              </div>
              
              <div>
                <Text fw={600} size="sm" className="mb-2">Mensagem</Text>
                <Textarea
                  placeholder="Descreva sua dúvida ou solicitação..."
                  rows={5}
                  size="md"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Enviar mensagem
              </Button>
            </div>
          </Card>

          {/* Informações de contato */}
          <div className="space-y-8">
            <Card className="p-6 shadow-subtle hover:shadow-hover transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <Text fw={600} className="mb-2">Email</Text>
                  <Text c="dimmed" className="mb-2">
                    Para dúvidas gerais e suporte técnico
                  </Text>
                  <a 
                    href="mailto:contato@relatorify.com" 
                    className="text-primary hover:underline"
                  >
                    contato@relatorify.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-subtle hover:shadow-hover transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <Text fw={600} className="mb-2">WhatsApp</Text>
                  <Text c="dimmed" className="mb-2">
                    Suporte rápido durante horário comercial
                  </Text>
                  <a 
                    href="https://wa.me/5511999999999" 
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    (11) 99999-9999
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-subtle hover:shadow-hover transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <Text fw={600} className="mb-2">Horário de atendimento</Text>
                  <Text c="dimmed">
                    Segunda a Sexta: 9h às 18h<br />
                    Sábado: 9h às 12h<br />
                    Domingo: Fechado
                  </Text>
                </div>
              </div>
            </Card>

            <div className="bg-blue-50 p-6 rounded-lg">
              <Text fw={600} className="mb-2">Precisa de ajuda urgente?</Text>
              <Text size="sm" c="dimmed" className="mb-4">
                Para problemas críticos que afetam seus relatórios, 
                use o WhatsApp para suporte prioritário.
              </Text>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
              >
                Suporte WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contato;