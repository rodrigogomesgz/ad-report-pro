import { DashboardTemplate } from "@/components/templates/dashboardTemplate";

const Dashboard = () => {
  // Mock data - in real app this would come from Supabase
  const kpis = [
    { label: "Investimento", value: "R$ 4.250", hint: "Últimos 7 dias" },
    { label: "ROAS", value: "3,2x", hint: "Retorno sobre investimento" },
    { label: "CTR", value: "1,9%", hint: "Taxa de clique" },
    { label: "CPA", value: "R$ 18,40", hint: "Custo por aquisição" },
  ];
  
  const reports = [
    {
      id: "1",
      dateRange: "01/12/2024 - 07/12/2024",
      source: "combined" as const,
      url: "/reports/report-1.pdf",
      status: "ready" as const,
    },
    {
      id: "2", 
      dateRange: "24/11/2024 - 30/11/2024",
      source: "google_ads" as const,
      url: "/reports/report-2.pdf",
      status: "ready" as const,
    },
  ];

  return <DashboardTemplate kpis={kpis} reports={reports} />;
};

export default Dashboard;