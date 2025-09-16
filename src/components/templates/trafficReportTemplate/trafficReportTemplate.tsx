"use client";
import { ReportHeader } from "@/components/molecules/reportHeader";
import { ReportSection } from "@/components/molecules/reportSection";
import { TrafficReport } from "@/types/reports";

interface TrafficReportTemplateProps {
  report: TrafficReport;
  className?: string;
}

export function TrafficReportTemplate({ report, className = "" }: TrafficReportTemplateProps) {
  return (
    <div id="report-root" className={`bg-white text-foreground ${className}`}>
      <div className="mx-auto p-8" style={{ width: 794 }}> {/* ~ 210mm @ 96dpi */}
        {/* Header */}
        <ReportHeader
          title={report.title}
          period={report.period}
          platform={report.platform}
          generatedAt={report.generatedAt}
        />

        {/* Seções do relatório */}
        {report.sections
          .sort((a, b) => a.order - b.order)
          .map((section) => (
            <ReportSection
              key={section.id}
              title={section.title}
              type={section.type}
              data={section.data}
            />
          ))}

        {/* Insights e recomendações */}
        {report.insights.length > 0 && (
          <ReportSection
            title="Insights e Recomendações"
            type="insights"
            data={report.insights}
            className="mt-8"
          />
        )}

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-border">
          <div className="text-center text-xs text-muted-foreground">
            <p>Relatório gerado pelo TráfegoClaro • {report.generatedAt.toLocaleString('pt-BR')}</p>
            <p className="mt-1">
              Investimento Total: R$ {report.metadata.totalSpend.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} • 
              Conversões: {report.metadata.totalConversions.toLocaleString('pt-BR')} • 
              ROAS Médio: {report.metadata.averageROAS.toFixed(2)}x
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrafficReportTemplate;

