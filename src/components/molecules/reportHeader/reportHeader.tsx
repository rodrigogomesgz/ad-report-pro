"use client";
import { Title, Text, Group, Badge, Divider } from "@mantine/core";
import { Calendar, BarChart3, TrendingUp } from "lucide-react";
import { ReportPeriod } from "@/types/reports";

interface ReportHeaderProps {
  title: string;
  period: ReportPeriod;
  platform: 'google' | 'meta' | 'both';
  generatedAt: Date;
  className?: string;
}

export function ReportHeader({ 
  title, 
  period, 
  platform, 
  generatedAt, 
  className = "" 
}: ReportHeaderProps) {
  const getPlatformLabel = (platform: string) => {
    switch (platform) {
      case 'google':
        return 'Google Ads';
      case 'meta':
        return 'Meta Ads';
      case 'both':
        return 'Google Ads + Meta Ads';
      default:
        return platform;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'google':
        return 'blue';
      case 'meta':
        return 'purple';
      case 'both':
        return 'green';
      default:
        return 'gray';
    }
  };

  return (
    <div className={`mb-8 ${className}`}>
      {/* Logo e título */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <Title order={1} className="text-2xl font-bold text-foreground mb-2">
            {title}
          </Title>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{period.label}</span>
            </div>
            <div className="flex items-center space-x-1">
              <BarChart3 className="w-4 h-4" />
              <span>Gerado em {generatedAt.toLocaleDateString('pt-BR')}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-2">
          <img 
            src="/logo.png" 
            alt="TráfegoClaro" 
            className="w-12 h-12"
          />
          <Badge 
            color={getPlatformColor(platform)}
            variant="light"
            size="sm"
          >
            {getPlatformLabel(platform)}
          </Badge>
        </div>
      </div>

      <Divider className="my-6" />

      {/* Resumo executivo */}
      <div className="bg-muted/20 rounded-lg p-6">
        <div className="flex items-center space-x-2 mb-3">
          <TrendingUp className="w-5 h-5 text-secondary" />
          <Text fw={600} size="sm" className="text-foreground">
            Resumo Executivo
          </Text>
        </div>
        <Text size="sm" c="dimmed" className="leading-relaxed">
          Relatório gerado automaticamente pelo TráfegoClaro com dados de {getPlatformLabel(platform)} 
          para o período de {period.start.toLocaleDateString('pt-BR')} a {period.end.toLocaleDateString('pt-BR')}. 
          Os dados foram coletados em tempo real e processados com inteligência artificial para gerar insights acionáveis.
        </Text>
      </div>
    </div>
  );
}

export default ReportHeader;

