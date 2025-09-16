import { GoogleAdsApi, Customer } from 'google-ads-api';

interface GoogleAdsConfig {
  client_id: string;
  client_secret: string;
  developer_token: string;
  login_customer_id?: string;
}

interface GoogleAdsMetrics {
  campaign_id: string;
  campaign_name: string;
  impressions: number;
  clicks: number;
  cost_micros: number;
  conversions: number;
  ctr: number;
  cpc: number;
  cpm: number;
  roas: number;
  date: string;
}

class GoogleAdsService {
  private client: GoogleAdsApi | null = null;
  private config: GoogleAdsConfig | null = null;

  constructor() {
    this.initializeConfig();
  }

  private initializeConfig() {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID;
    const clientSecret = process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_SECRET;
    const developerToken = process.env.NEXT_PUBLIC_GOOGLE_ADS_DEVELOPER_TOKEN;
    const loginCustomerId = process.env.NEXT_PUBLIC_GOOGLE_ADS_LOGIN_CUSTOMER_ID;

    if (clientId && clientSecret && developerToken) {
      this.config = {
        client_id: clientId,
        client_secret: clientSecret,
        developer_token: developerToken,
        login_customer_id: loginCustomerId,
      };

      this.client = new GoogleAdsApi({
        client_id: clientId,
        client_secret: clientSecret,
        developer_token: developerToken,
      });
    }
  }

  async getCustomerData(accessToken: string, customerId: string, refreshToken?: string): Promise<GoogleAdsMetrics[]> {
    if (!this.client || !this.config) {
      throw new Error('Google Ads API not configured. Please check your environment variables.');
    }

    try {
      const customer: Customer = this.client.Customer({
        customer_id: customerId,
        refresh_token: refreshToken,
        access_token: accessToken,
        login_customer_id: this.config.login_customer_id,
      });

      // Query para buscar métricas de campanhas dos últimos 30 dias
      const query = `
        SELECT 
          campaign.id,
          campaign.name,
          metrics.impressions,
          metrics.clicks,
          metrics.cost_micros,
          metrics.conversions,
          metrics.ctr,
          metrics.average_cpc,
          metrics.average_cpm,
          metrics.value_per_conversion,
          segments.date
        FROM campaign 
        WHERE segments.date DURING LAST_30_DAYS
        AND campaign.status = 'ENABLED'
        ORDER BY metrics.cost_micros DESC
      `;

      const response = await customer.query(query);
      
      return response.map((row: any) => ({
        campaign_id: row.campaign.id.toString(),
        campaign_name: row.campaign.name,
        impressions: parseInt(row.metrics.impressions) || 0,
        clicks: parseInt(row.metrics.clicks) || 0,
        cost_micros: parseInt(row.metrics.cost_micros) || 0,
        conversions: parseFloat(row.metrics.conversions) || 0,
        ctr: parseFloat(row.metrics.ctr) || 0,
        cpc: parseFloat(row.metrics.average_cpc) || 0,
        cpm: parseFloat(row.metrics.average_cpm) || 0,
        roas: parseFloat(row.metrics.value_per_conversion) || 0,
        date: row.segments.date,
      }));

    } catch (error) {
      console.error('Error fetching Google Ads data:', error);
      throw new Error(`Failed to fetch Google Ads data: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async getAccountInfo(accessToken: string, customerId: string): Promise<{ name: string; id: string }> {
    if (!this.client || !this.config) {
      throw new Error('Google Ads API not configured.');
    }

    try {
      const customer: Customer = this.client.Customer({
        customer_id: customerId,
        access_token: accessToken,
        login_customer_id: this.config.login_customer_id,
      });

      const query = `
        SELECT 
          customer.id,
          customer.descriptive_name
        FROM customer
        WHERE customer.id = ${customerId}
      `;

      const response = await customer.query(query);
      
      if (response.length > 0) {
        return {
          name: response[0].customer.descriptive_name || `Account ${customerId}`,
          id: response[0].customer.id.toString(),
        };
      }

      throw new Error('Account not found');
    } catch (error) {
      console.error('Error fetching account info:', error);
      throw new Error(`Failed to fetch account info: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  // Método para testar a conexão
  async testConnection(accessToken: string, customerId: string): Promise<boolean> {
    try {
      await this.getAccountInfo(accessToken, customerId);
      return true;
    } catch (error) {
      console.error('Connection test failed:', error);
      return false;
    }
  }
}

export const googleAdsService = new GoogleAdsService();
export default GoogleAdsService;
