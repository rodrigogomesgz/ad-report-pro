import { useState, useEffect } from "react";
import type { ConnectionStatus, AdsPlatform } from "@/types";

type Connection = {
  platform: AdsPlatform;
  status: ConnectionStatus;
  accountName?: string;
  lastSync?: Date;
};

export function useAdsConnections() {
  const [connections, setConnections] = useState<Connection[]>([
    {
      platform: "google_ads",
      status: "disconnected",
    },
    {
      platform: "meta_ads", 
      status: "disconnected",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const connectPlatform = async (platform: AdsPlatform) => {
    setLoading(true);
    try {
      // TODO: Implement OAuth flow with Supabase
      // This would call Supabase function to initiate OAuth
      console.log(`Connecting to ${platform}`);
      
      // Mock success for now
      setTimeout(() => {
        setConnections(prev => 
          prev.map(conn => 
            conn.platform === platform 
              ? { ...conn, status: "connected", accountName: "Conta Teste", lastSync: new Date() }
              : conn
          )
        );
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Connection failed:", error);
      setLoading(false);
    }
  };

  const disconnectPlatform = async (platform: AdsPlatform) => {
    setLoading(true);
    try {
      // TODO: Implement disconnect with Supabase
      console.log(`Disconnecting from ${platform}`);
      
      setTimeout(() => {
        setConnections(prev => 
          prev.map(conn => 
            conn.platform === platform 
              ? { ...conn, status: "disconnected", accountName: undefined, lastSync: undefined }
              : conn
          )
        );
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Disconnection failed:", error);
      setLoading(false);
    }
  };

  return {
    connections,
    loading,
    connectPlatform,
    disconnectPlatform,
  };
}