"use client";
import { useState } from "react";
import { Card, Title, Text, Button } from "@mantine/core";
import { CheckCircle, ArrowLeft, RefreshCw, Shield, Clock, Database, Lock } from "lucide-react";
import { useNav } from "@/lib/navigation";
import { AccountConnection } from "@/components/molecules/accountConnection";
import { PageTemplate } from "@/components/templates/pageTemplate";
import { UserAccount } from "@/services/secureAuthService";

export function ConnectTemplate() {
  const nav = useNav();
  const [connectedAccounts, setConnectedAccounts] = useState<UserAccount[]>([]);

  const handleConnectionChange = (accounts: UserAccount[]) => {
    setConnectedAccounts(accounts);
  };

  const hasConnectedAccounts = connectedAccounts.some(acc => acc.connected);

  return (
    <PageTemplate className="bg-gradient-subtle">

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <Title order={1} className="text-3xl font-bold text-foreground mb-4">
            Conectar Contas
          </Title>
          <Text size="lg" c="dimmed">
            Conecte suas contas de publicidade para gerar relatórios automáticos
          </Text>
        </div>

        {/* Componente de Conexão de Contas */}
        <AccountConnection onConnectionChange={handleConnectionChange} />

        {/* Informações sobre Segurança */}
        <Card className="p-6 mt-8 bg-muted/20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-5 h-5 text-secondary mr-2" />
              <Title order={4} className="text-lg font-semibold">
                Segurança e Privacidade
              </Title>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <Text fw={600} className="mb-1">OAuth2 Seguro</Text>
                <Text c="dimmed" size="xs">
                  Usamos OAuth2 para autenticação segura
                </Text>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <Text fw={600} className="mb-1">Temporário</Text>
                <Text c="dimmed" size="xs">
                  Tokens expiram automaticamente
                </Text>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Database className="w-6 h-6 text-purple-600" />
                </div>
                <Text fw={600} className="mb-1">Sem Banco</Text>
                <Text c="dimmed" size="xs">
                  Dados não são salvos permanentemente
                </Text>
              </div>
            </div>
          </div>
        </Card>

        {/* Próximos Passos */}
        {hasConnectedAccounts && (
          <Card className="p-6 mt-6 bg-green-50 border-green-200">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <Title order={4} className="text-lg font-semibold mb-2 text-green-700">
                Contas Conectadas!
              </Title>
              <Text c="dimmed" className="mb-4">
                Agora você pode gerar relatórios com dados reais das suas campanhas
              </Text>
              <Button
                variant="hero"
                onClick={() => nav.push('/report')}
                leftSection={<RefreshCw size={16} />}
              >
                Gerar Relatório
              </Button>
            </div>
          </Card>
        )}
    </PageTemplate>
  );
}