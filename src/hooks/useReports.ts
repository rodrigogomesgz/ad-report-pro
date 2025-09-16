"use client";
import { useState, useCallback } from 'react';
import { 
  generateTrafficReport, 
  collectCampaignData, 
  syncData, 
  getReportHistory 
} from '@/api/reports';
import { TrafficReport, ReportGenerationRequest, ReportPeriod } from '@/types/reports';

export function useReports() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reports, setReports] = useState<TrafficReport[]>([]);

  // Gerar relatório de tráfego
  const generateReport = useCallback(async (request: ReportGenerationRequest): Promise<TrafficReport | null> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await generateTrafficReport(request);
      if (response.success && response.data) {
        setReports(prev => [response.data!, ...prev]);
        return response.data;
      } else {
        setError(response.message);
        return null;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Coletar dados de campanhas
  const collectData = useCallback(async (
    platform: 'google' | 'meta',
    period: ReportPeriod,
    accountId: string
  ): Promise<TrafficReport | null> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await collectCampaignData(platform, period, accountId);
      if (response.success && response.data) {
        setReports(prev => [response.data!, ...prev]);
        return response.data;
      } else {
        setError(response.message);
        return null;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Sincronizar dados
  const sync = useCallback(async (): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await syncData();
      if (response.success) {
        return true;
      } else {
        setError(response.message);
        return false;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Carregar histórico de relatórios
  const loadHistory = useCallback(async (): Promise<TrafficReport[]> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await getReportHistory();
      if (response.success && response.data) {
        setReports(response.data as TrafficReport[]);
        return response.data as TrafficReport[];
      } else {
        setError(response.message);
        return [];
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      return [];
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Limpar erro
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    isLoading,
    error,
    reports,
    generateReport,
    collectData,
    sync,
    loadHistory,
    clearError
  };
}
