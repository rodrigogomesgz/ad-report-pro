import { TrafficReport, ReportPeriod, ReportGenerationRequest } from '@/types/reports';
import { DataService } from '@/services/dataService';
import { ReportService } from '@/services/reportService';

export interface ReportApiResponse {
  success: boolean;
  message: string;
  data?: TrafficReport;
  error?: string;
}

// Gerar relatório de tráfego
export async function generateTrafficReport(
  request: ReportGenerationRequest
): Promise<ReportApiResponse> {
  try {
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Em produção, coletar dados reais das APIs
    const dataService = DataService.getInstance();
    
    // Mock para MVP - em produção, usar dados reais
    const period: ReportPeriod = request.period;
    
    // Gerar relatório usando o serviço
    const report = await ReportService.generateTrafficReport(request);
    
    return {
      success: true,
      message: 'Traffic report generated successfully',
      data: report
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to generate traffic report',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

// Coletar dados de campanhas
export async function collectCampaignData(
  platform: 'google' | 'meta',
  period: ReportPeriod,
  accountId: string
): Promise<ReportApiResponse> {
  try {
    const dataService = DataService.getInstance();
    
    let data;
    if (platform === 'google') {
      data = await dataService.collectGoogleAdsData(period, accountId);
    } else {
      data = await dataService.collectMetaAdsData(period, accountId);
    }

    // Converter para formato de relatório
    const kpis = dataService.convertToKpis(
      platform === 'google' ? data as any : { metrics: { totalCost: 0, totalConversions: 0, totalImpressions: 0, totalClicks: 0 } },
      platform === 'meta' ? data as any : { metrics: { totalSpend: 0, totalConversions: 0, totalImpressions: 0, totalClicks: 0 } }
    );

    const report: TrafficReport = {
      id: `campaign_${platform}_${Date.now()}`,
      title: `Relatório de Campanhas ${platform === 'google' ? 'Google Ads' : 'Meta Ads'}`,
      period,
      platform,
      sections: [
        {
          id: 'overview',
          title: 'Visão Geral',
          type: 'kpis',
          data: kpis,
          order: 1
        }
      ],
      insights: [],
      generatedAt: new Date(),
      metadata: {
        totalSpend: platform === 'google' ? (data as any).metrics.totalCost : (data as any).metrics.totalSpend,
        totalConversions: (data as any).metrics.totalConversions,
        averageROAS: (data as any).metrics.averageRoas
      }
    };

    return {
      success: true,
      message: 'Campaign data collected successfully',
      data: report
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to collect campaign data',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

// Sincronizar dados
export async function syncData(): Promise<ReportApiResponse> {
  try {
    // Simular sincronização
    await new Promise(resolve => setTimeout(resolve, 1500));

    return {
      success: true,
      message: 'Data synchronized successfully'
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to sync data',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

// Obter histórico de relatórios
export async function getReportHistory(): Promise<ReportApiResponse> {
  try {
    // Mock para MVP
    const reports: TrafficReport[] = [
      {
        id: 'report_1',
        title: 'Relatório Semanal',
        period: {
          start: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          end: new Date(),
          label: 'Última semana'
        },
        platform: 'both',
        sections: [],
        insights: [],
        generatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
        metadata: {
          totalSpend: 2500,
          totalConversions: 75,
          averageROAS: 3.2
        }
      }
    ];

    return {
      success: true,
      message: 'Report history retrieved',
      data: reports as any
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to get report history',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}
