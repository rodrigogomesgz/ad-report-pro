import { googleAdsService } from './googleAdsService';
import { metaAdsService } from './metaAdsService';
import { BaseKpi, ReportPeriod, ChartData } from '@/types/reports';

// Tipos para dados das APIs
export interface GoogleAdsData {
  campaigns: GoogleAdsCampaign[];
  metrics: GoogleAdsMetrics;
  accountInfo: GoogleAdsAccountInfo;
}

export interface MetaAdsData {
  campaigns: MetaAdsCampaign[];
  metrics: MetaAdsMetrics;
  accountInfo: MetaAdsAccountInfo;
}

export interface GoogleAdsCampaign {
  id: string;
  name: string;
  impressions: number;
  clicks: number;
  cost: number;
  conversions: number;
  ctr: number;
  cpc: number;
  cpm: number;
  roas: number;
  date: string;
}

export interface MetaAdsCampaign {
  id: string;
  name: string;
  impressions: number;
  clicks: number;
  spend: number;
  conversions: number;
  ctr: number;
  cpc: number;
  cpm: number;
  roas: number;
  date: string;
}

export interface GoogleAdsMetrics {
  totalImpressions: number;
  totalClicks: number;
  totalCost: number;
  totalConversions: number;
  averageCtr: number;
  averageCpc: number;
  averageCpm: number;
  averageRoas: number;
}

export interface MetaAdsMetrics {
  totalImpressions: number;
  totalClicks: number;
  totalSpend: number;
  totalConversions: number;
  averageCtr: number;
  averageCpc: number;
  averageCpm: number;
  averageRoas: number;
}

export interface GoogleAdsAccountInfo {
  id: string;
  name: string;
}

export interface MetaAdsAccountInfo {
  id: string;
  name: string;
}

class DataService {
  private static instance: DataService;

  private constructor() {}

  static getInstance(): DataService {
    if (!DataService.instance) {
      DataService.instance = new DataService();
    }
    return DataService.instance;
  }

  async collectGoogleAdsData(period: ReportPeriod, customerId: string, accessToken: string, refreshToken?: string): Promise<GoogleAdsData> {
    try {
      console.log('Collecting Google Ads data...');
      
      // Buscar dados reais da API
      const rawData = await googleAdsService.getCustomerData(accessToken, customerId, refreshToken);
      const accountInfo = await googleAdsService.getAccountInfo(accessToken, customerId);

      // Processar campanhas
      const campaigns: GoogleAdsCampaign[] = rawData.map(campaign => ({
        id: campaign.campaign_id,
        name: campaign.campaign_name,
        impressions: campaign.impressions,
        clicks: campaign.clicks,
        cost: campaign.cost_micros / 1000000, // Converter de micros para reais
        conversions: campaign.conversions,
        ctr: campaign.ctr,
        cpc: campaign.cpc,
        cpm: campaign.cpm,
        roas: campaign.roas,
        date: campaign.date
      }));

      // Calcular métricas agregadas
      const metrics: GoogleAdsMetrics = this.calculateGoogleAdsMetrics(campaigns);

      return {
        campaigns,
        metrics,
        accountInfo: {
          id: accountInfo.id,
          name: accountInfo.name
        }
      };

    } catch (error) {
      console.error('Error collecting Google Ads data:', error);
      // Retornar dados mock em caso de erro
      return this.getMockGoogleAdsData();
    }
  }

  async collectMetaAdsData(period: ReportPeriod, adAccountId: string, accessToken: string): Promise<MetaAdsData> {
    try {
      console.log('Collecting Meta Ads data...');
      
      // Buscar dados reais da API
      const rawData = await metaAdsService.getCampaignData(accessToken, adAccountId);
      const accountInfo = await metaAdsService.getAccountInfo(accessToken, adAccountId);

      // Processar campanhas
      const campaigns: MetaAdsCampaign[] = rawData.map(campaign => ({
        id: campaign.campaign_id,
        name: campaign.campaign_name,
        impressions: campaign.impressions,
        clicks: campaign.clicks,
        spend: campaign.spend,
        conversions: campaign.conversions,
        ctr: campaign.ctr,
        cpc: campaign.cpc,
        cpm: campaign.cpm,
        roas: campaign.roas,
        date: campaign.date
      }));

      // Calcular métricas agregadas
      const metrics: MetaAdsMetrics = this.calculateMetaAdsMetrics(campaigns);

      return {
        campaigns,
        metrics,
        accountInfo: {
          id: accountInfo.id,
          name: accountInfo.name
        }
      };

    } catch (error) {
      console.error('Error collecting Meta Ads data:', error);
      // Retornar dados mock em caso de erro
      return this.getMockMetaAdsData();
    }
  }

  private calculateGoogleAdsMetrics(campaigns: GoogleAdsCampaign[]): GoogleAdsMetrics {
    const totalImpressions = campaigns.reduce((sum, c) => sum + c.impressions, 0);
    const totalClicks = campaigns.reduce((sum, c) => sum + c.clicks, 0);
    const totalCost = campaigns.reduce((sum, c) => sum + c.cost, 0);
    const totalConversions = campaigns.reduce((sum, c) => sum + c.conversions, 0);
    const averageCtr = campaigns.length > 0 ? campaigns.reduce((sum, c) => sum + c.ctr, 0) / campaigns.length : 0;
    const averageCpc = campaigns.length > 0 ? campaigns.reduce((sum, c) => sum + c.cpc, 0) / campaigns.length : 0;
    const averageCpm = campaigns.length > 0 ? campaigns.reduce((sum, c) => sum + c.cpm, 0) / campaigns.length : 0;
    const averageRoas = campaigns.length > 0 ? campaigns.reduce((sum, c) => sum + c.roas, 0) / campaigns.length : 0;

    return {
      totalImpressions,
      totalClicks,
      totalCost,
      totalConversions,
      averageCtr,
      averageCpc,
      averageCpm,
      averageRoas
    };
  }

  private calculateMetaAdsMetrics(campaigns: MetaAdsCampaign[]): MetaAdsMetrics {
    const totalImpressions = campaigns.reduce((sum, c) => sum + c.impressions, 0);
    const totalClicks = campaigns.reduce((sum, c) => sum + c.clicks, 0);
    const totalSpend = campaigns.reduce((sum, c) => sum + c.spend, 0);
    const totalConversions = campaigns.reduce((sum, c) => sum + c.conversions, 0);
    const averageCtr = campaigns.length > 0 ? campaigns.reduce((sum, c) => sum + c.ctr, 0) / campaigns.length : 0;
    const averageCpc = campaigns.length > 0 ? campaigns.reduce((sum, c) => sum + c.cpc, 0) / campaigns.length : 0;
    const averageCpm = campaigns.length > 0 ? campaigns.reduce((sum, c) => sum + c.cpm, 0) / campaigns.length : 0;
    const averageRoas = campaigns.length > 0 ? campaigns.reduce((sum, c) => sum + c.roas, 0) / campaigns.length : 0;

    return {
      totalImpressions,
      totalClicks,
      totalSpend,
      totalConversions,
      averageCtr,
      averageCpc,
      averageCpm,
      averageRoas
    };
  }

  // Dados mock para fallback
  private getMockGoogleAdsData(): GoogleAdsData {
    return {
      campaigns: [
        {
          id: '1234567890',
          name: 'Campanha de Teste - Google',
          impressions: 125000,
          clicks: 2500,
          cost: 1250.50,
          conversions: 45,
          ctr: 2.0,
          cpc: 0.50,
          cpm: 10.00,
          roas: 3.2,
          date: new Date().toISOString().split('T')[0]
        }
      ],
      metrics: {
        totalImpressions: 125000,
        totalClicks: 2500,
        totalCost: 1250.50,
        totalConversions: 45,
        averageCtr: 2.0,
        averageCpc: 0.50,
        averageCpm: 10.00,
        averageRoas: 3.2
      },
      accountInfo: {
        id: '1234567890',
        name: 'Google Ads Account (Mock)'
      }
    };
  }

  private getMockMetaAdsData(): MetaAdsData {
    return {
      campaigns: [
        {
          id: 'act_1234567890',
          name: 'Campanha de Teste - Meta',
          impressions: 98000,
          clicks: 1950,
          spend: 980.25,
          conversions: 38,
          ctr: 1.99,
          cpc: 0.50,
          cpm: 10.00,
          roas: 2.8,
          date: new Date().toISOString().split('T')[0]
        }
      ],
      metrics: {
        totalImpressions: 98000,
        totalClicks: 1950,
        totalSpend: 980.25,
        totalConversions: 38,
        averageCtr: 1.99,
        averageCpc: 0.50,
        averageCpm: 10.00,
        averageRoas: 2.8
      },
      accountInfo: {
        id: 'act_1234567890',
        name: 'Meta Ads Account (Mock)'
      }
    };
  }

  // Método para testar conexões
  async testGoogleAdsConnection(accessToken: string, customerId: string): Promise<boolean> {
    try {
      return await googleAdsService.testConnection(accessToken, customerId);
    } catch (error) {
      console.error('Google Ads connection test failed:', error);
      return false;
    }
  }

  async testMetaAdsConnection(accessToken: string, adAccountId: string): Promise<boolean> {
    try {
      return await metaAdsService.testConnection(accessToken, adAccountId);
    } catch (error) {
      console.error('Meta Ads connection test failed:', error);
      return false;
    }
  }
}

export const dataService = DataService.getInstance();
export default DataService;