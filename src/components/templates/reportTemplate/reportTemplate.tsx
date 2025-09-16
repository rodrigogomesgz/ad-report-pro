"use client";
import { Card, Title, Text, Group, Divider } from "@mantine/core";
import { KpiCard } from "@/components/atoms/kpiCard";

type Kpi = { label: string; value: string; hint?: string };

type Props = {
  title: string;
  periodLabel: string;
  kpis: Kpi[];
  notes?: string[];
};

/**
 * Template A4 simples para captura via html2canvas.
 * Mantém fundo branco e evita sombras pesadas para melhor renderização no PDF.
 */
export function ReportTemplate({ title, periodLabel, kpis, notes = [] }: Props) {
  return (
    <div id="report-root" className="bg-white text-foreground">
      <div className="mx-auto p-8" style={{ width: 794 }}> {/* ~ 210mm @ 96dpi */}
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <Title order={2} className="font-bold">{title}</Title>
            <Text c="dimmed" size="sm">{periodLabel}</Text>
          </div>
          <img 
            src="/logo.png" 
            alt="TráfegoClaro" 
            className="w-10 h-10"
          />
        </div>

        <Divider className="my-6" />

        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-16 mb-10">
          {kpis.map((kpi, idx) => (
            <KpiCard key={idx} label={kpi.label} value={kpi.value} hint={kpi.hint} />
          ))}
        </div>

        {/* Notes / Insights */}
        {notes.length > 0 && (
          <Card withBorder className="p-4">
            <Title order={5} className="mb-2">Observações</Title>
            <ul className="list-disc pl-5 space-y-1">
              {notes.map((n, i) => (
                <li key={i} className="text-sm text-muted-foreground">{n}</li>
              ))}
            </ul>
          </Card>
        )}
      </div>
    </div>
  );
}

export default ReportTemplate;


