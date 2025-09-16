"use client";
import { Card } from "@mantine/core";
import { Container } from "@/components/atoms/container";
import { 
  BarChart3, 
  Facebook, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Twitter,
  Mail,
  ShoppingCart,
  Search,
  TrendingUp,
  Users,
  Target
} from "lucide-react";

const integrations = [
  { name: "Google Ads", icon: BarChart3, color: "text-blue-500" },
  { name: "Meta Ads", icon: Facebook, color: "text-blue-600" },
  { name: "Instagram", icon: Instagram, color: "text-pink-500" },
  { name: "Facebook", icon: Facebook, color: "text-blue-600" },
  { name: "YouTube", icon: Youtube, color: "text-red-500" },
  { name: "LinkedIn", icon: Linkedin, color: "text-blue-700" },
  { name: "Twitter Ads", icon: Twitter, color: "text-blue-400" },
  { name: "TikTok", icon: TrendingUp, color: "text-black" },
  { name: "Pinterest", icon: Target, color: "text-red-600" },
  { name: "Google Analytics", icon: BarChart3, color: "text-orange-500" },
  { name: "Mailchimp", icon: Mail, color: "text-yellow-500" },
  { name: "Shopify", icon: ShoppingCart, color: "text-green-600" },
  { name: "WooCommerce", icon: ShoppingCart, color: "text-purple-600" },
  { name: "Google Search Console", icon: Search, color: "text-green-500" },
  { name: "HubSpot", icon: Users, color: "text-orange-600" },
  { name: "RD Station", icon: Target, color: "text-blue-500" },
];

export function Integrations() {
  return (
    <section className="mobile-section bg-gradient-to-b from-background to-muted/10">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="mobile-title font-bold text-foreground mb-4 md:mb-6">
            Veja em uma só tela os indicadores de todos seus canais
          </h2>
          <p className="mobile-text text-muted-foreground leading-relaxed">
            Conecte Google Ads, Meta Ads, Instagram, YouTube, LinkedIn, TikTok, e-commerces, 
            CRMs e muito mais. Todas as suas métricas em um só lugar.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mobile-gap max-w-6xl mx-auto">
          {integrations.map((integration, index) => (
            <Card
              key={index}
              className="p-4 md:p-6 shadow-subtle hover:shadow-medium transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group cursor-pointer"
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 rounded-xl bg-muted/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <integration.icon className={`w-6 h-6 ${integration.color}`} />
                </div>
                <span className="text-sm font-medium text-foreground text-center">
                  {integration.name}
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-6 py-3 rounded-full text-sm font-medium mb-4">
            <BarChart3 className="w-4 h-4" />
            +20 integrações disponíveis
          </div>
          <p className="text-muted-foreground text-sm">
            Conecte todas as suas ferramentas favoritas em segundos
          </p>
        </div>
    </section>
  );
}

export default Integrations;
