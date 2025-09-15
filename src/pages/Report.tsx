"use client";
import { useState } from "react";
import { Card, Title, Text, TextInput } from "@mantine/core";
import { Button } from "@/components/atoms/button";
import { Download, Mail, FileText, ArrowLeft } from "lucide-react";
import { useNav } from "@/lib/navigation";

export function Report() {
  const nav = useNav();
  const [isGenerating, setIsGenerating] = useState(false);
  const [reportGenerated, setReportGenerated] = useState(false);
  const [reportUrl, setReportUrl] = useState<string>("");
  const [email, setEmail] = useState("");
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  const handleGenerateReport = async () => {
    setIsGenerating(true);
    try {
      // Mock for MVP - simulate PDF generation
      setTimeout(() => {
        setReportGenerated(true);
        setReportUrl("#mock-report"); // Mock URL
        setIsGenerating(false);
      }, 3000);
    } catch (error) {
      console.error("Error generating report:", error);
      setIsGenerating(false);
    }
  };

  const handleSendEmail = async () => {
    if (!email) return;
    
    setIsSendingEmail(true);
    try {
      // Mock for MVP
      setTimeout(() => {
        setIsSendingEmail(false);
        alert("Relatório enviado para seu email!");
      }, 2000);
    } catch (error) {
      console.error("Error sending email:", error);
      setIsSendingEmail(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-2xl animate-fade-in">
        {/* Back Button */}
        <button 
          onClick={() => nav.back()} 
          className="flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Voltar
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <Title order={1} className="text-3xl font-bold text-foreground mb-4">
            Gerar Relatório
          </Title>
          <Text size="lg" c="dimmed">
            Seu relatório será gerado com os dados mais recentes
          </Text>
        </div>

        <Card className="p-8 shadow-medium">
          {!reportGenerated ? (
            <div className="text-center">
              <div className="mb-6">
                <Text fw={600} size="lg" className="mb-2">
                  Contas conectadas:
                </Text>
                <div className="flex justify-center gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <Text size="sm">Google Ads</Text>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <Text size="sm">Meta Ads</Text>
                  </div>
                </div>
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={handleGenerateReport}
                loading={isGenerating}
              >
                {isGenerating ? "Gerando relatório..." : "Gerar Relatório PDF"}
              </Button>

              {isGenerating && (
                <Text size="sm" c="dimmed" className="mt-4">
                  Coletando dados e gerando PDF... isso pode levar alguns minutos
                </Text>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
                <Text fw={600} size="lg" className="mb-2">
                  Relatório gerado com sucesso!
                </Text>
                <Text size="sm" c="dimmed">
                  Período: {new Date().toLocaleDateString()} - {new Date().toLocaleDateString()}
                </Text>
              </div>

              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open(reportUrl, "_blank")}
                >
                  <Download size={16} className="mr-2" />
                  Download PDF
                </Button>

                <div className="space-y-3">
                  <Text fw={600} size="sm">Enviar por email:</Text>
                  <div className="flex gap-2">
                    <TextInput
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.currentTarget.value)}
                      className="flex-1"
                    />
                    <Button 
                      variant="outline"
                      onClick={handleSendEmail}
                      loading={isSendingEmail}
                      disabled={!email}
                    >
                      <Mail size={16} />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    setReportGenerated(false);
                    setReportUrl("");
                  }}
                >
                  Gerar novo relatório
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

export default Report;