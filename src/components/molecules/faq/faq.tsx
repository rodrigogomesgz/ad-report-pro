"use client";
import { useState } from "react";
import { Card } from "@mantine/core";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Container } from "@/components/atoms/container";

const faqs = [
  {
    question: "Como funciona o TráfegoClaro?",
    answer: "O TráfegoClaro conecta suas contas de Google Ads e Meta Ads através de OAuth seguro, coleta os dados automaticamente e gera relatórios profissionais em PDF. Tudo acontece em poucos segundos, sem necessidade de configurações complexas."
  },
  {
    question: "Quais plataformas são suportadas?",
    answer: "Atualmente suportamos Google Ads e Meta Ads (Facebook/Instagram). Estamos trabalhando para adicionar TikTok Ads, LinkedIn Ads, Pinterest Ads e outras plataformas populares de tráfego pago."
  },
  {
    question: "Meus dados estão seguros?",
    answer: "Sim! Utilizamos conexões OAuth seguras, não armazenamos senhas e seguimos as melhores práticas de segurança. Seus dados são criptografados e nunca compartilhados com terceiros."
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Sim, você pode cancelar sua assinatura a qualquer momento diretamente no painel. Não há taxas de cancelamento ou fidelidade. Seu acesso permanece ativo até o final do período pago."
  },
  {
    question: "Os relatórios são personalizáveis?",
    answer: "Sim! Você pode escolher quais métricas incluir, adicionar sua logo, personalizar cores e até mesmo criar templates específicos para diferentes clientes ou campanhas."
  },
  {
    question: "Há suporte técnico disponível?",
    answer: "Oferecemos suporte por email e chat para todos os usuários. Planos premium incluem suporte prioritário e consultoria personalizada para otimizar seus relatórios."
  },
  {
    question: "Posso testar antes de pagar?",
    answer: "Sim! Oferecemos 3 dias de teste gratuito sem necessidade de cartão de crédito. Você pode explorar todas as funcionalidades e gerar relatórios reais durante o período de teste."
  },
  {
    question: "Os relatórios são enviados automaticamente?",
    answer: "Sim! Você pode configurar envios automáticos por email em diferentes frequências (diário, semanal, mensal). Também estamos trabalhando em integração com WhatsApp para notificações instantâneas."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mobile-section bg-gradient-to-b from-muted/10 to-background">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="mobile-title font-bold text-foreground mb-3 md:mb-4">
              Perguntas Frequentes
            </h2>
            <p className="mobile-text text-muted-foreground max-w-2xl mx-auto">
              Tire suas dúvidas sobre o TráfegoClaro e como ele pode transformar sua gestão de tráfego pago
            </p>
          </div>

          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-0 shadow-subtle hover:shadow-medium transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-4 md:p-6 focus:outline-none focus:ring-2 focus:ring-secondary/20 rounded-lg"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base md:text-lg font-semibold text-foreground pr-2 md:pr-4">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </div>
                  
                  {openIndex === index && (
                    <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-border">
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </button>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-8 md:mt-12">
            <div className="bg-secondary/10 rounded-xl md:rounded-2xl p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                Ainda tem dúvidas?
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                Nossa equipe está pronta para ajudar você a começar
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <a 
                  href="mailto:suporte@trafegoclaro.com"
                  className="mobile-button inline-flex items-center justify-center px-4 md:px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium"
                >
                  Falar com Suporte
                </a>
                <a 
                  href="/contato"
                  className="mobile-button inline-flex items-center justify-center px-4 md:px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted/50 transition-colors font-medium"
                >
                  Ver Mais Contatos
                </a>
              </div>
            </div>
          </div>
    </section>
  );
}

export default FAQ;
