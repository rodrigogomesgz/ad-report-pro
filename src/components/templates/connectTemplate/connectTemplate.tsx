"use client";
import { Card, Title, Text } from "@mantine/core";
import { Button } from "@/components/atoms/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useNav } from "@/lib/navigation";

export function ConnectTemplate() {
  const nav = useNav();
  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-2xl animate-fade-in">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-2xl">R</span>
          </div>
          <Title order={1} className="text-3xl font-bold text-foreground mb-4">
            Conecte suas contas de anúncios
          </Title>
          <Text size="lg" c="dimmed" className="max-w-lg mx-auto">
            Conecte suas contas para começar a receber relatórios automáticos
          </Text>
        </div>

        <div className="space-y-6">
          {/* Google Ads */}
          <Card className="p-8 hover:shadow-medium transition-all duration-300 cursor-pointer group">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">G</span>
                </div>
                <div>
                  <Title order={3} className="text-xl font-semibold mb-1">
                    Google Ads
                  </Title>
                  <Text size="sm" c="dimmed">
                    Conecte sua conta do Google Ads
                  </Text>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-muted-foreground">
                  <CheckCircle size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <Button 
                  variant="outline" 
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => nav.push("/setup")}
                >
                  Conectar
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </Card>

          {/* Meta Ads */}
          <Card className="p-8 hover:shadow-medium transition-all duration-300 cursor-pointer group">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">M</span>
                </div>
                <div>
                  <Title order={3} className="text-xl font-semibold mb-1">
                    Meta Ads
                  </Title>
                  <Text size="sm" c="dimmed">
                    Conecte sua conta do Facebook/Instagram
                  </Text>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-muted-foreground">
                  <CheckCircle size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <Button 
                  variant="outline" 
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => nav.push("/setup")}
                >
                  Conectar
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Text size="sm" c="dimmed">
            Conexões seguras via OAuth. Seus dados estão protegidos.
          </Text>
        </div>
      </div>
    </div>
  );
}