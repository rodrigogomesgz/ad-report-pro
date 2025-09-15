import { Card, Text } from "@mantine/core";

type Props = { 
  label: string; 
  value: string; 
  hint?: string; 
};

export function KpiCard({ label, value, hint }: Props) {
  return (
    <Card padding="md" radius="lg" withBorder className="shadow-subtle">
      <Text size="sm" c="dimmed">{label}</Text>
      <Text fw={700} fz={28} mt={4}>{value}</Text>
      {hint && <Text size="xs" c="dimmed" mt={4}>{hint}</Text>}
    </Card>
  );
}