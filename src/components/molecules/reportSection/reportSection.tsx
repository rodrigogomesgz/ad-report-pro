"use client";
import { Card, Title, Text, Group, Badge, Divider } from "@mantine/core";
import { TrendingUp, TrendingDown, Minus, AlertCircle, CheckCircle, Info } from "lucide-react";
import { BaseKpi, ChartData, ReportInsight } from "@/types/reports";

interface ReportSectionProps {
  title: string;
  type: 'kpis' | 'chart' | 'table' | 'insights' | 'text';
  data: any;
  className?: string;
}

export function ReportSection({ title, type, data, className = "" }: ReportSectionProps) {
  const renderKpis = (kpis: BaseKpi[]) => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {kpis.map((kpi, index) => (
        <Card key={index} className="p-4 border-0 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <Text size="sm" c="dimmed" className="font-medium">
              {kpi.label}
            </Text>
            {kpi.trend && (
              <div className="flex items-center">
                {kpi.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-500" />}
                {kpi.trend === 'down' && <TrendingDown className="w-4 h-4 text-red-500" />}
                {kpi.trend === 'stable' && <Minus className="w-4 h-4 text-gray-500" />}
              </div>
            )}
          </div>
          <Text size="xl" fw={700} className="text-foreground">
            {kpi.value}
          </Text>
          {kpi.change && (
            <Text size="xs" c={kpi.trend === 'up' ? 'green' : kpi.trend === 'down' ? 'red' : 'dimmed'}>
              {kpi.change}
            </Text>
          )}
          {kpi.hint && (
            <Text size="xs" c="dimmed" className="mt-1">
              {kpi.hint}
            </Text>
          )}
        </Card>
      ))}
    </div>
  );

  const renderChart = (chartData: ChartData) => (
    <div className="bg-muted/20 rounded-lg p-6">
      <div className="h-64 flex items-center justify-center">
        <Text c="dimmed">Gráfico: {chartData.labels.length} pontos de dados</Text>
      </div>
    </div>
  );

  const renderTable = (tableData: any[]) => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-border">
            {Object.keys(tableData[0] || {}).map((key) => (
              <th key={key} className="text-left p-3 text-sm font-medium text-muted-foreground">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="border-b border-border/50">
              {Object.values(row).map((value: any, cellIndex) => (
                <td key={cellIndex} className="p-3 text-sm">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderInsights = (insights: ReportInsight[]) => (
    <div className="space-y-4">
      {insights.map((insight, index) => (
        <Card key={index} className={`p-4 border-l-4 ${
          insight.type === 'positive' ? 'border-l-green-500 bg-green-50' :
          insight.type === 'negative' ? 'border-l-red-500 bg-red-50' :
          insight.type === 'recommendation' ? 'border-l-blue-500 bg-blue-50' :
          'border-l-gray-500 bg-gray-50'
        }`}>
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              {insight.type === 'positive' && <CheckCircle className="w-5 h-5 text-green-500" />}
              {insight.type === 'negative' && <AlertCircle className="w-5 h-5 text-red-500" />}
              {insight.type === 'recommendation' && <Info className="w-5 h-5 text-blue-500" />}
              {insight.type === 'neutral' && <Info className="w-5 h-5 text-gray-500" />}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <Text fw={600} size="sm">
                  {insight.title}
                </Text>
                <Badge 
                  size="xs" 
                  color={
                    insight.priority === 'high' ? 'red' :
                    insight.priority === 'medium' ? 'yellow' : 'green'
                  }
                >
                  {insight.priority}
                </Badge>
              </div>
              <Text size="sm" c="dimmed">
                {insight.description}
              </Text>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderText = (content: string) => (
    <div className="prose prose-sm max-w-none">
      <Text size="sm" c="dimmed" className="whitespace-pre-line">
        {content}
      </Text>
    </div>
  );

  const renderContent = () => {
    switch (type) {
      case 'kpis':
        return renderKpis(data);
      case 'chart':
        return renderChart(data);
      case 'table':
        return renderTable(data);
      case 'insights':
        return renderInsights(data);
      case 'text':
        return renderText(data);
      default:
        return <Text c="dimmed">Tipo de seção não suportado</Text>;
    }
  };

  return (
    <div className={`mb-8 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <Title order={3} className="text-lg font-semibold">
          {title}
        </Title>
      </div>
      {renderContent()}
    </div>
  );
}

export default ReportSection;

