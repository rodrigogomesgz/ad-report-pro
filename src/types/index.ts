export type ReportRow = {
  id: string;
  dateRange: string;
  source: "google_ads" | "meta_ads" | "combined";
  url: string;
  status: "ready" | "processing" | "error";
};

export type KpiItem = {
  label: string;
  value: string;
  hint?: string;
};

export type ConnectionStatus = "connected" | "error" | "disconnected";

export type AdsPlatform = "google_ads" | "meta_ads";

export type UserPlan = "trial" | "professional" | "premium";

export type ReportFrequency = "weekly" | "daily";

export type DeliveryChannel = "email" | "whatsapp" | "both";