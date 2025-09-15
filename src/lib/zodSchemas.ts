import { z } from "zod";

export const ReportFiltersSchema = z.object({
  startDate: z.date(),
  endDate: z.date(),
  source: z.enum(["google_ads", "meta_ads", "combined"]).optional(),
  status: z.enum(["ready", "processing", "error"]).optional(),
});

export const ConnectionSettingsSchema = z.object({
  platform: z.enum(["google_ads", "meta_ads"]),
  accountId: z.string().min(1, "ID da conta é obrigatório"),
  accountName: z.string().min(1, "Nome da conta é obrigatório"),
});

export const ReportScheduleSchema = z.object({
  frequency: z.enum(["weekly", "daily"]),
  deliveryChannels: z.array(z.enum(["email", "whatsapp"])).min(1, "Selecione pelo menos um canal"),
  emailAddress: z.string().email("E-mail inválido").optional(),
  whatsappNumber: z.string().min(10, "Número de WhatsApp inválido").optional(),
});

export const UserPreferencesSchema = z.object({
  timezone: z.string().default("America/Sao_Paulo"),
  currency: z.string().default("BRL"),
  language: z.string().default("pt-BR"),
  reportTemplate: z.enum(["standard", "detailed", "summary"]).default("standard"),
});

export type ReportFilters = z.infer<typeof ReportFiltersSchema>;
export type ConnectionSettings = z.infer<typeof ConnectionSettingsSchema>;
export type ReportSchedule = z.infer<typeof ReportScheduleSchema>;
export type UserPreferences = z.infer<typeof UserPreferencesSchema>;