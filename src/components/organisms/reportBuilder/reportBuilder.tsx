"use client";
import { useState, useEffect } from "react";
import { Card, Title, Text, Button, Group, Select, Checkbox, TextInput, Divider } from "@mantine/core";
import { Download, Settings, FileText, Calendar, BarChart3 } from "lucide-react";
import { TrafficReportTemplate } from "@/components/templates/trafficReportTemplate";
import { Container } from "@/components/atoms/container";
import { ReportSkeleton } from "@/components/atoms/reportSkeleton";
import { ReportService } from "@/services/reportService";
import { generatePdfFromSelector } from "@/lib/pdf";
import { TrafficReport, ReportPeriod, ReportGenerationRequest } from "@/types/reports";

export function ReportBuilder() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [report, setReport] = useState<TrafficReport | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState("traffic_standard");
  const [includeCharts, setIncludeCharts] = useState(true);
  const [includeInsights, setIncludeInsights] = useState(true);
  const [customTitle, setCustomTitle] = useState("");
  const [watermark, setWatermark] = useState("");

  const templates = ReportService.getAvailableTemplates();

  const generateReport = async () => {
    setIsGenerating(true);
    try {
      const period: ReportPeriod = {
        start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 dias atrás
        end: new Date(),
        label: "Últimos 30 dias"
      };

      const request: ReportGenerationRequest = {
        type: "traffic",
        period,
        platform: "both",
        templateId: selectedTemplate,
        includeCharts,
        includeInsights
      };

      const generatedReport = await ReportService.generateTrafficReport(request);
      
      if (customTitle) {
        generatedReport.title = customTitle;
      }
      
      setReport(generatedReport);
    } catch (error) {
      console.error("Error generating report:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadPdf = async () => {
    if (!report) return;
    
    try {
      await generatePdfFromSelector('#report-root', {
        filename: `${report.title.replace(/\s+/g, '-')}-${new Date().toISOString().slice(0, 10)}.pdf`,
        marginMm: 15,
        scale: 2,
        backgroundColor: '#ffffff',
        watermark: watermark || undefined
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Container size="xl" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Painel de Configuração */}
          <div className="lg:col-span-1">
            <Card className="p-6 shadow-medium sticky top-4">
              <div className="flex items-center space-x-2 mb-6">
                <Settings className="w-5 h-5 text-secondary" />
                <Title order={3} className="text-lg font-semibold">
                  Configurações do Relatório
                </Title>
              </div>

              <div className="space-y-6">
                {/* Template */}
                <div>
                  <Text size="sm" fw={600} className="mb-2">
                    Template
                  </Text>
                  <Select
                    value={selectedTemplate}
                    onChange={(value) => setSelectedTemplate(value || "traffic_standard")}
                    data={templates.map(t => ({
                      value: t.id,
                      label: t.name
                    }))}
                    placeholder="Selecione um template"
                  />
                </div>

                {/* Título Personalizado */}
                <div>
                  <Text size="sm" fw={600} className="mb-2">
                    Título Personalizado
                  </Text>
                  <TextInput
                    value={customTitle}
                    onChange={(e) => setCustomTitle(e.currentTarget.value)}
                    placeholder="Deixe vazio para usar o padrão"
                  />
                </div>

                {/* Opções */}
                <div>
                  <Text size="sm" fw={600} className="mb-3">
                    Opções
                  </Text>
                  <div className="space-y-3">
                    <Checkbox
                      label="Incluir Gráficos"
                      checked={includeCharts}
                      onChange={(e) => setIncludeCharts(e.currentTarget.checked)}
                    />
                    <Checkbox
                      label="Incluir Insights"
                      checked={includeInsights}
                      onChange={(e) => setIncludeInsights(e.currentTarget.checked)}
                    />
                  </div>
                </div>

                {/* Watermark */}
                <div>
                  <Text size="sm" fw={600} className="mb-2">
                    Watermark (opcional)
                  </Text>
                  <TextInput
                    value={watermark}
                    onChange={(e) => setWatermark(e.currentTarget.value)}
                    placeholder="Ex: CONFIDENCIAL"
                  />
                </div>

                <Divider />

                {/* Botões de Ação */}
                <div className="space-y-3">
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full"
                    onClick={generateReport}
                    loading={isGenerating}
                    leftSection={<FileText className="w-4 h-4" />}
                  >
                    {isGenerating ? "Gerando Relatório..." : "Gerar Relatório"}
                  </Button>

                  {report && (
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full"
                      onClick={downloadPdf}
                      leftSection={<Download className="w-4 h-4" />}
                    >
                      Download PDF
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </div>

          {/* Visualização do Relatório */}
          <div className="lg:col-span-2">
            {!report ? (
              <div className="space-y-6">
                <Card className="p-6 text-center shadow-medium">
                  <div className="w-16 h-16 bg-muted/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <Title order={3} className="text-xl font-semibold mb-2">
                    Nenhum Relatório Gerado
                  </Title>
                  <Text c="dimmed" className="mb-6">
                    Configure as opções ao lado e clique em "Gerar Relatório" para ver a prévia
                  </Text>
                  <Button
                    variant="outline"
                    onClick={generateReport}
                    loading={isGenerating}
                    leftSection={<FileText className="w-4 h-4" />}
                  >
                    Gerar Primeiro Relatório
                  </Button>
                </Card>
                
                {/* Preview Skeleton */}
                <div className="border rounded-lg overflow-hidden bg-white shadow-medium">
                  <div className="p-4 border-b bg-muted/20">
                    <Text size="sm" fw={600} c="dimmed">Prévia do Relatório</Text>
                  </div>
                  <ReportSkeleton className="border-0 shadow-none" />
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Header do Relatório */}
                <Card className="p-4 shadow-medium">
                  <div className="flex items-center justify-between">
                    <div>
                      <Title order={3} className="text-lg font-semibold">
                        Prévia do Relatório
                      </Title>
                      <Text size="sm" c="dimmed">
                        {report.title} • {report.period.label}
                      </Text>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <Text size="sm" c="dimmed">Pronto para download</Text>
                    </div>
                  </div>
                </Card>

                {/* Relatório */}
                <div className="border rounded-lg overflow-hidden bg-white shadow-medium">
                  <TrafficReportTemplate report={report} />
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ReportBuilder;

