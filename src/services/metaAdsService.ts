import { FacebookAdsApi, AdAccount, Campaign } from 'facebook-nodejs-business-sdk';

interface MetaAdsMetrics {
  campaign_id: string;
  campaign_name: string;
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

class MetaAdsService {
  private api: FacebookAdsApi | null = null;
  private appId: string | null = null;
  private appSecret: string | null = null;

  constructor() {
    this.initializeConfig();
  }

  private initializeConfig() {
    const appId = process.env.NEXT_PUBLIC_META_ADS_APP_ID;
    const appSecret = process.env.NEXT_PUBLIC_META_ADS_APP_SECRET;

    if (appId && appSecret) {
      this.appId = appId;
      this.appSecret = appSecret;
      this.api = new FacebookAdsApi(appSecret);
    }
  }

  async getCampaignData(accessToken: string, adAccountId: string): Promise<MetaAdsMetrics[]> {
    if (!this.api || !this.appId) {
      throw new Error('Meta Ads API not configured. Please check your environment variables.');
    }

    try {
      // Configurar o token de acesso
      this.api.setAccessToken(accessToken);

      // Buscar campanhas ativas
      const adAccount = new AdAccount(adAccountId);
      const campaigns = await adAccount.getCampaigns([
        'id',
        'name',
        'status',
        'created_time',
        'updated_time'
      ], {
        limit: 100,
        filtering: [{ field: 'campaign.status', operator: 'IN', value: ['ACTIVE', 'PAUSED'] }]
      });

      const metrics: MetaAdsMetrics[] = [];

      // Para cada campanha, buscar métricas dos últimos 30 dias
      for (const campaign of campaigns) {
        try {
          const insights = await campaign.getInsights([
            'impressions',
            'clicks',
            'spend',
            'conversions',
            'ctr',
            'cpc',
            'cpm',
            'purchase_roas'
          ], {
            time_range: {
              since: this.getDate30DaysAgo(),
              until: this.getToday()
            },
            level: 'campaign',
            time_increment: 1
          });

          // Agregar métricas por campanha
          const aggregatedMetrics = this.aggregateMetrics(insights);

          metrics.push({
            campaign_id: campaign.id,
            campaign_name: campaign.name,
            impressions: aggregatedMetrics.impressions,
            clicks: aggregatedMetrics.clicks,
            spend: aggregatedMetrics.spend,
            conversions: aggregatedMetrics.conversions,
            ctr: aggregatedMetrics.ctr,
            cpc: aggregatedMetrics.cpc,
            cpm: aggregatedMetrics.cpm,
            roas: aggregatedMetrics.roas,
            date: this.getToday()
          });
        } catch (campaignError) {
          console.warn(`Error fetching metrics for campaign ${campaign.id}:`, campaignError);
          // Continuar com outras campanhas mesmo se uma falhar
        }
      }

      return metrics;

    } catch (error) {
      console.error('Error fetching Meta Ads data:', error);
      throw new Error(`Failed to fetch Meta Ads data: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async getAccountInfo(accessToken: string, adAccountId: string): Promise<{ name: string; id: string }> {
    if (!this.api) {
      throw new Error('Meta Ads API not configured.');
    }

    try {
      this.api.setAccessToken(accessToken);
      const adAccount = new AdAccount(adAccountId);
      
      const accountData = await adAccount.read([
        'id',
        'name',
        'account_status'
      ]);

      return {
        name: accountData.name || `Account ${adAccountId}`,
        id: accountData.id,
      };
    } catch (error) {
      console.error('Error fetching account info:', error);
      throw new Error(`Failed to fetch account info: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  // Método para testar a conexão
  async testConnection(accessToken: string, adAccountId: string): Promise<boolean> {
    try {
      await this.getAccountInfo(accessToken, adAccountId);
      return true;
    } catch (error) {
      console.error('Connection test failed:', error);
      return false;
    }
  }

  private aggregateMetrics(insights: any[]): {
    impressions: number;
    clicks: number;
    spend: number;
    conversions: number;
    ctr: number;
    cpc: number;
    cpm: number;
    roas: number;
  } {
    return insights.reduce((acc, insight) => {
      acc.impressions += parseInt(insight.impressions) || 0;
      acc.clicks += parseInt(insight.clicks) || 0;
      acc.spend += parseFloat(insight.spend) || 0;
      acc.conversions += parseFloat(insight.conversions) || 0;
      acc.ctr += parseFloat(insight.ctr) || 0;
      acc.cpc += parseFloat(insight.cpc) || 0;
      acc.cpm += parseFloat(insight.cpm) || 0;
      acc.roas += parseFloat(insight.purchase_roas) || 0;
      return acc;
    }, {
      impressions: 0,
      clicks: 0,
      spend: 0,
      conversions: 0,
      ctr: 0,
      cpc: 0,
      cpm: 0,
      roas: 0
    });
  }

  private getDate30DaysAgo(): string {
    const date = new Date();
    date.setDate(date.getDate() - 30);
    return date.toISOString().split('T')[0];
  }

  private getToday(): string {
    return new Date().toISOString().split('T')[0];
  }
}

export const metaAdsService = new MetaAdsService();
export default MetaAdsService;
