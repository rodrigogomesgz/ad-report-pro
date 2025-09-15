import { Card, Text, Badge, Button } from "@mantine/core";
import { Shield, AlertCircle, CheckCircle } from "lucide-react";

type ConnectionStatus = "connected" | "error" | "disconnected";

type Props = {
  platform: "google_ads" | "meta_ads";
  status: ConnectionStatus;
  accountName?: string;
  lastSync?: Date;
  onConnect?: () => void;
  onDisconnect?: () => void;
};

const platformLabels = {
  google_ads: "Google Ads",
  meta_ads: "Meta Ads",
};

const statusConfig = {
  connected: {
    color: "green",
    icon: CheckCircle,
    label: "Conectado",
  },
  error: {
    color: "red", 
    icon: AlertCircle,
    label: "Erro",
  },
  disconnected: {
    color: "gray",
    icon: Shield,
    label: "Desconectado",
  },
};

export function ConnectionCard({ 
  platform, 
  status, 
  accountName, 
  lastSync, 
  onConnect, 
  onDisconnect 
}: Props) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <Card padding="md" radius="lg" withBorder className="shadow-subtle">
      <div className="flex items-start justify-between mb-4">
        <div>
          <Text fw={600} size="lg">{platformLabels[platform]}</Text>
          {accountName && (
            <Text size="sm" c="dimmed">{accountName}</Text>
          )}
        </div>
        <Badge color={config.color} variant="light">
          <Icon size={12} className="mr-1" />
          {config.label}
        </Badge>
      </div>
      
      {lastSync && status === "connected" && (
        <Text size="xs" c="dimmed" mb="md">
          Última sincronização: {lastSync.toLocaleDateString()}
        </Text>
      )}
      
      <div className="flex gap-2">
        {status === "disconnected" && onConnect && (
          <Button size="sm" onClick={onConnect}>
            Conectar
          </Button>
        )}
        {status === "connected" && onDisconnect && (
          <Button variant="outline" size="sm" onClick={onDisconnect}>
            Desconectar
          </Button>
        )}
        {status === "error" && onConnect && (
          <Button color="red" size="sm" onClick={onConnect}>
            Reconectar
          </Button>
        )}
      </div>
    </Card>
  );
}