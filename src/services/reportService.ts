import { 
  TrafficReport, 
  CampaignReport, 
  AccountReport, 
  BaseKpi, 
  ReportPeriod, 
  ReportInsight, 
  ReportSection,
  ReportGenerationRequest 
} from "@/types/reports";
import { DataService } from "./dataService";

// Dados mockados para MVP
const mockKpis: BaseKpi[] = [
  { 
    label: "Investimento Total", 
    value: "R$ 4.250,00", 
    trend: "up", 
    change: "+12% vs mês anterior",
    format: "currency"
  },
  { 
    label: "ROAS", 
    value: "3,4x", 
    trend: "up", 
    change: "+0.3x vs mês anterior",
    format: "number"
  },
  { 
    label: "CTR", 
    value: "2,15%", 
    trend: "down", 
    change: "-0.2% vs mês anterior",
    format: "percentage"
  },
  { 
    label: "CPA", 
    value: "R$ 32,80", 
    trend: "down", 
    change: "-R$ 5,20 vs mês anterior",
    format: "currency"
  },
  { 
    label: "Cliques", 
    value: "12.487", 
    trend: "up", 
    change: "+1.234 vs mês anterior",
    format: "number"
  },
  { 
    label: "Impressões", 
    value: "982.315", 
    trend: "up", 
    change: "+45.123 vs mês anterior",
    format: "number"
  }
];

const mockInsights: ReportInsight[] = [
  {
    type: "positive",
    title: "ROAS em Crescimento",
    description: "O ROAS aumentou 9% em relação ao mês anterior, indicando melhor eficiência das campanhas.",
    priority: "high"
  },
  {
    type: "recommendation",
    title: "Otimizar Campanha B",
    description: "A Campanha B apresenta CTR abaixo da média. Considere atualizar os criativos e ajustar o targeting.",
    priority: "medium"
  },
  {
    type: "positive",
    title: "CPA Reduzido",
    description: "O custo por aquisição diminuiu 13% no período, melhorando a eficiência do investimento.",
    priority: "high"
  },
  {
    type: "neutral",
    title: "Volume de Impressões Estável",
    description: "O volume de impressões manteve-se consistente, indicando boa cobertura do público-alvo.",
    priority: "low"
  }
];

const mockChartData = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
  datasets: [
    {
      label: "Investimento",
      data: [3200, 3800, 4100, 3950, 4200, 4250],
      backgroundColor: "rgba(46, 204, 64, 0.1)",
      borderColor: "rgba(46, 204, 64, 1)"
    },
    {
      label: "Receita",
      data: [9600, 11400, 12300, 11850, 12600, 12750],
      backgroundColor: "rgba(46, 204, 64, 0.2)",
      borderColor: "rgba(46, 204, 64, 0.8)"
    }
  ]
};

const mockTableData = [
  { Campanha: "Campanha A", Investimento: "R$ 2.100", ROAS: "4.2x", CTR: "2.8%" },
  { Campanha: "Campanha B", Investimento: "R$ 1.500", ROAS: "2.1x", CTR: "1.4%" },
  { Campanha: "Campanha C", Investimento: "R$ 650", ROAS: "5.1x", CTR: "3.2%" }
];

export class ReportService {
  static async generateTrafficReport(request: ReportGenerationRequest): Promise<TrafficReport> {
    // Simula delay de API
    await new Promise(resolve => setTimeout(resolve, 1000));

    const period: ReportPeriod = request.period;
    const reportId = `traffic_${Date.now()}`;

    // Em produção, coletar dados reais das APIs
    const dataService = DataService.getInstance();
    let kpis = mockKpis;
    let chartData = mockChartData;
    let tableData = mockTableData;
    let totalSpend = 4250;
    let totalConversions = 129;
    let averageROAS = 3.4;

    // Se as APIs estiverem configuradas, coletar dados reais
    try {
      if (request.platform === 'google' || request.platform === 'both') {
        const googleData = await dataService.collectGoogleAdsData(period, '1234567890');
        // Processar dados do Google Ads
      }
      
      if (request.platform === 'meta' || request.platform === 'both') {
        const metaData = await dataService.collectMetaAdsData(period, 'act_1234567890');
        // Processar dados do Meta Ads
      }
    } catch (error) {
      console.warn('Using mock data due to API error:', error);
    }

    const sections: ReportSection[] = [
      {
        id: "overview",
        title: "Visão Geral",
        type: "kpis",
        data: kpis,
        order: 1
      }
    ];

    // Adicionar gráfico se solicitado
    if (request.includeCharts !== false) {
      sections.push({
        id: "performance_chart",
        title: "Evolução do Investimento e Receita",
        type: "chart",
        data: chartData,
        order: 2
      });
    }

    // Adicionar tabela de campanhas
    sections.push({
      id: "campaigns_table",
      title: "Performance por Campanha",
      type: "table",
      data: tableData,
      order: 3
    });

    return {
      id: reportId,
      title: "Relatório de Tráfego Pago",
      period,
      platform: request.platform,
      sections,
      insights: request.includeInsights !== false ? mockInsights : [],
      generatedAt: new Date(),
      metadata: {
        totalSpend,
        totalConversions,
        averageROAS
      }
    };
  }

  static async generateCampaignReport(campaignId: string, period: ReportPeriod): Promise<CampaignReport> {
    await new Promise(resolve => setTimeout(resolve, 800));

    const reportId = `campaign_${campaignId}_${Date.now()}`;

    const sections: ReportSection[] = [
      {
        id: "campaign_kpis",
        title: "Métricas da Campanha",
        type: "kpis",
        data: mockKpis.slice(0, 4),
        order: 1
      },
      {
        id: "campaign_chart",
        title: "Evolução Diária",
        type: "chart",
        data: mockChartData,
        order: 2
      }
    ];

    return {
      id: reportId,
      title: `Relatório da Campanha ${campaignId}`,
      period,
      campaignId,
      campaignName: `Campanha ${campaignId}`,
      platform: "google",
      sections,
      insights: mockInsights.slice(0, 2),
      generatedAt: new Date(),
      metadata: {
        spend: 2100,
        conversions: 50,
        roas: 4.2,
        ctr: 2.8,
        cpc: 0.85
      }
    };
  }

  static async generateAccountReport(accountId: string, period: ReportPeriod): Promise<AccountReport> {
    await new Promise(resolve => setTimeout(resolve, 1200));

    const reportId = `account_${accountId}_${Date.now()}`;

    const sections: ReportSection[] = [
      {
        id: "account_overview",
        title: "Visão Geral da Conta",
        type: "kpis",
        data: mockKpis,
        order: 1
      },
      {
        id: "campaigns_summary",
        title: "Resumo das Campanhas",
        type: "table",
        data: mockTableData,
        order: 2
      }
    ];

    return {
      id: reportId,
      title: `Relatório da Conta ${accountId}`,
      period,
      accountId,
      accountName: `Conta ${accountId}`,
      platform: "google",
      campaigns: [],
      sections,
      insights: mockInsights,
      generatedAt: new Date(),
      metadata: {
        totalSpend: 4250,
        totalConversions: 129,
        averageROAS: 3.4,
        activeCampaigns: 3
      }
    };
  }

  static getAvailableTemplates() {
    return [
      {
        id: "traffic_standard",
        name: "Relatório de Tráfego Padrão",
        description: "Relatório completo com KPIs, gráficos e insights",
        type: "traffic" as const,
        sections: ["overview", "performance_chart", "campaigns_table", "insights"],
        isDefault: true
      },
      {
        id: "campaign_focused",
        name: "Relatório de Campanha",
        description: "Foco em performance de campanha específica",
        type: "campaign" as const,
        sections: ["campaign_kpis", "campaign_chart"],
        isDefault: false
      },
      {
        id: "executive_summary",
        name: "Resumo Executivo",
        description: "Relatório resumido para tomada de decisão",
        type: "traffic" as const,
        sections: ["overview", "insights"],
        isDefault: false
      }
    ];
  }
}

