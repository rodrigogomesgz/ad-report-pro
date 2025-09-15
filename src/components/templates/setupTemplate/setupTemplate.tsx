"use client";
import { Card, Title, Text, Select, TextInput } from "@mantine/core";
import { Button } from "@/components/atoms/button";
import { Mail, Clock, CheckCircle } from "lucide-react";
import { useNav } from "@/lib/navigation";

export function SetupTemplate() {
  const nav = useNav();
  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-xl animate-fade-in">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <Title order={1} className="text-3xl font-bold text-foreground mb-4">
            Quase pronto!
          </Title>
          <Text size="lg" c="dimmed">
            Configure como você quer receber seus relatórios
          </Text>
        </div>

        <Card className="p-8 shadow-medium">
          <div className="space-y-6">
            {/* Email */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail size={20} className="text-primary" />
                <Text fw={600}>E-mail para receber relatórios</Text>
              </div>
              <TextInput
                placeholder="seu@email.com"
                size="md"
                className="w-full"
              />
            </div>

            {/* Frequência */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Clock size={20} className="text-primary" />
                <Text fw={600}>Frequência dos relatórios</Text>
              </div>
              <Select
                placeholder="Selecione a frequência"
                size="md"
                data={[
                  { value: "weekly", label: "Semanal (toda segunda-feira)" },
                  { value: "monthly", label: "Mensal (todo dia 1)" }
                ]}
                defaultValue="weekly"
              />
            </div>

            <div className="pt-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={() => nav.push("/dashboard")}
              >
                Finalizar Configuração
              </Button>
            </div>
          </div>
        </Card>

        <div className="text-center mt-6">
          <Text size="sm" c="dimmed">
            Você pode alterar essas configurações a qualquer momento
          </Text>
        </div>
      </div>
    </div>
  );
}