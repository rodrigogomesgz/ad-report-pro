import { Card, Title, Text, Badge } from "@mantine/core";
import { Button } from "@/components/atoms/button";
import { KpiGrid } from "@/components/molecules/kpiGrid";
import { ReportsTable } from "@/components/organisms/reportsTable";
import { Download, Settings, Zap } from "lucide-react";

type ReportRow = {
  id: string; 
  dateRange: string; 
  source: "google_ads" | "meta_ads" | "combined"; 
  url: string;
  status: "ready" | "processing" | "error";
};

type Props = {
  kpis: { label: string; value: string; hint?: string }[];
  reports: ReportRow[];
};

export function DashboardTemplate({ kpis, reports }: Props) {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <Title order={2} className="text-xl font-bold">Dashboard</Title>
            </div>
            <div className="flex items-center space-x-3">
              <Badge color="green" variant="light">Conectado</Badge>
              <Button variant="outline" size="sm">
                <Settings size={16} />
                Configurações
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8 animate-fade-in">
          {/* KPIs */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <Title order={3} className="text-lg font-semibold">Últimos 7 dias</Title>
              <Button variant="hero" size="sm">
                <Zap size={16} />
                Gerar Relatório Agora
              </Button>
            </div>
            <KpiGrid items={kpis} />
          </div>

          {/* Relatórios */}
          <Card className="p-6 shadow-medium">
            <div className="flex items-center justify-between mb-6">
              <Title order={3} className="text-lg font-semibold">Seus Relatórios</Title>
              <Button variant="outline" size="sm">
                <Download size={16} />
                Baixar Todos
              </Button>
            </div>
            <ReportsTable rows={reports} />
          </Card>
        </div>
      </div>
    </div>
  );
}