"use client";
import { useState } from "react";
import { Card, Title, Text, TextInput, Tabs } from "@mantine/core";
import { Button } from "@/components/atoms/button";
import { Download, Mail, FileText, ArrowLeft, Settings, BarChart3 } from "lucide-react";
import { useNav } from "@/lib/navigation";
import { ReportTemplate } from "@/components/templates/reportTemplate";
import { ReportBuilder } from "@/components/organisms/reportBuilder";
import { Container } from "@/components/atoms/container";
import { generatePdfFromSelector } from "@/lib/pdf";

export function Report() {
  const nav = useNav();
  const [activeTab, setActiveTab] = useState<string | null>("builder");

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="bg-background/80 backdrop-blur-md border-b border-border">
        <Container padding="md">
          <div className="py-6 pt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => nav.back()} 
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Voltar
              </button>
              <div className="h-6 w-px bg-border"></div>
              <Title order={2} className="text-xl font-semibold">
                Relatórios
              </Title>
            </div>
          </div>
          </div>
        </Container>
      </div>

      {/* Tabs */}
      <Container padding="lg">
        <div className="py-6">
        <Tabs value={activeTab} onChange={setActiveTab}>
          <Tabs.List className="mb-6">
            <Tabs.Tab 
              value="builder" 
              leftSection={<Settings className="w-4 h-4" />}
            >
              Construtor de Relatórios
            </Tabs.Tab>
            <Tabs.Tab 
              value="simple" 
              leftSection={<BarChart3 className="w-4 h-4" />}
            >
              Relatório Simples
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="builder">
            <ReportBuilder />
          </Tabs.Panel>

          <Tabs.Panel value="simple">
            <Container size="lg">
              <Card className="p-8 shadow-medium">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <Title order={2} className="text-2xl font-bold text-foreground mb-4">
                    Relatório Simples
                  </Title>
                  <Text size="lg" c="dimmed">
                    Geração rápida de relatório com configurações básicas
                  </Text>
                </div>

                <div className="text-center">
                  <Text c="dimmed" className="mb-6">
                    Use o Construtor de Relatórios para opções avançadas e personalização completa.
                  </Text>
                  <Button 
                    variant="outline" 
                    onClick={() => setActiveTab("builder")}
                    leftSection={<Settings className="w-4 h-4" />}
                  >
                    Ir para Construtor
                  </Button>
                </div>
              </Card>
            </Container>
          </Tabs.Panel>
        </Tabs>
        </div>
      </Container>
    </div>
  );
}

export default Report;