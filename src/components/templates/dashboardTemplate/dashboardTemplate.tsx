import { Stack, Title } from "@mantine/core";
import { KpiGrid } from "@/components/molecules/kpiGrid";
import { ReportsTable } from "@/components/organisms/reportsTable";

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
    <div className="container mx-auto px-4 py-8">
      <Stack gap="lg">
        <Title order={2}>Dashboard</Title>
        <KpiGrid items={kpis} />
        <div>
          <Title order={3} className="mb-4">Relatórios Recentes</Title>
          <ReportsTable rows={reports} />
        </div>
      </Stack>
    </div>
  );
}