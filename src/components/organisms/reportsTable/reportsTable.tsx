"use client";
import { Table, Anchor } from "@mantine/core";
import { formatDateRange } from "@/lib/format";

type ReportRow = {
  id: string; 
  dateRange: string; 
  source: "google_ads" | "meta_ads" | "combined"; 
  url: string;
  status: "ready" | "processing" | "error";
};

const sourceLabels = {
  google_ads: "Google Ads",
  meta_ads: "Meta Ads", 
  combined: "Combinado",
};

const statusLabels = {
  ready: "Pronto",
  processing: "Processando",
  error: "Erro",
};

type Props = {
  rows: ReportRow[];
};

export function ReportsTable({ rows }: Props) {
  if (rows.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p>Você ainda não possui relatórios gerados.</p>
      </div>
    );
  }

  return (
    <Table withTableBorder highlightOnHover>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Período</Table.Th>
          <Table.Th>Fonte</Table.Th>
          <Table.Th>Status</Table.Th>
          <Table.Th>Relatório</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {rows.map((row) => (
          <Table.Tr key={row.id}>
            <Table.Td>{row.dateRange}</Table.Td>
            <Table.Td>{sourceLabels[row.source]}</Table.Td>
            <Table.Td>{statusLabels[row.status]}</Table.Td>
            <Table.Td>
              {row.status === "ready" ? (
                <Anchor href={row.url} target="_blank">
                  Abrir PDF
                </Anchor>
              ) : (
                <span className="text-muted-foreground">-</span>
              )}
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}