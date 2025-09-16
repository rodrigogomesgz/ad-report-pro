// Tipos base para relatórios
export interface BaseKpi {
  label: string;
  value: string | number;
  hint?: string;
  trend?: 'up' | 'down' | 'stable';
  change?: string;
  format?: 'currency' | 'percentage' | 'number' | 'text';
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
  }[];
}

export interface ReportPeriod {
  start: Date;
  end: Date;
  label: string;
}

export interface ReportInsight {
  type: 'positive' | 'negative' | 'neutral' | 'recommendation';
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

export interface ReportSection {
  id: string;
  title: string;
  type: 'kpis' | 'chart' | 'table' | 'insights' | 'text';
  data: any;
  order: number;
}

// Tipos específicos de relatórios
export interface TrafficReport {
  id: string;
  title: string;
  period: ReportPeriod;
  platform: 'google' | 'meta' | 'both';
  sections: ReportSection[];
  insights: ReportInsight[];
  generatedAt: Date;
  metadata: {
    totalSpend: number;
    totalConversions: number;
    averageROAS: number;
  };
}

export interface CampaignReport {
  id: string;
  title: string;
  period: ReportPeriod;
  campaignId: string;
  campaignName: string;
  platform: 'google' | 'meta';
  sections: ReportSection[];
  insights: ReportInsight[];
  generatedAt: Date;
  metadata: {
    spend: number;
    conversions: number;
    roas: number;
    ctr: number;
    cpc: number;
  };
}

export interface AccountReport {
  id: string;
  title: string;
  period: ReportPeriod;
  accountId: string;
  accountName: string;
  platform: 'google' | 'meta';
  campaigns: CampaignReport[];
  sections: ReportSection[];
  insights: ReportInsight[];
  generatedAt: Date;
  metadata: {
    totalSpend: number;
    totalConversions: number;
    averageROAS: number;
    activeCampaigns: number;
  };
}

// Tipos para geração de PDF
export interface PdfOptions {
  filename?: string;
  marginMm?: number;
  scale?: number;
  backgroundColor?: string;
  includeCharts?: boolean;
  includeInsights?: boolean;
  watermark?: string;
}

// Tipos para templates
export interface ReportTemplate {
  id: string;
  name: string;
  description: string;
  type: 'traffic' | 'campaign' | 'account' | 'custom';
  sections: string[];
  isDefault: boolean;
}

// Tipos para dados de API
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  timestamp: Date;
}

export interface ReportGenerationRequest {
  type: 'traffic' | 'campaign' | 'account';
  period: ReportPeriod;
  platform: 'google' | 'meta' | 'both';
  templateId?: string;
  customSections?: string[];
  includeCharts?: boolean;
  includeInsights?: boolean;
}

