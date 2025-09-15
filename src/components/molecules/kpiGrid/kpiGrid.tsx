import { SimpleGrid } from "@mantine/core";
import { KpiCard } from "@/components/atoms/kpiCard";

type Props = {
  items: { label: string; value: string; hint?: string }[];
};

export function KpiGrid({ items }: Props) {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md">
      {items.map((item) => (
        <KpiCard key={item.label} {...item} />
      ))}
    </SimpleGrid>
  );
}