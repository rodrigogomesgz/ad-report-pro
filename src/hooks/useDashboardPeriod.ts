import { useState } from "react";
import { addDays, subDays, startOfWeek, endOfWeek } from "date-fns";

export type PeriodType = "7d" | "30d" | "90d" | "custom";

export function useDashboardPeriod() {
  const [periodType, setPeriodType] = useState<PeriodType>("7d");
  const [customStartDate, setCustomStartDate] = useState<Date>();
  const [customEndDate, setCustomEndDate] = useState<Date>();

  const getPeriodDates = () => {
    const now = new Date();
    
    switch (periodType) {
      case "7d":
        return {
          startDate: subDays(now, 7),
          endDate: now,
        };
      case "30d":
        return {
          startDate: subDays(now, 30),
          endDate: now,
        };
      case "90d":
        return {
          startDate: subDays(now, 90),
          endDate: now,
        };
      case "custom":
        return {
          startDate: customStartDate || subDays(now, 7),
          endDate: customEndDate || now,
        };
      default:
        return {
          startDate: subDays(now, 7),
          endDate: now,
        };
    }
  };

  const getCurrentWeek = () => {
    const now = new Date();
    return {
      startDate: startOfWeek(now, { weekStartsOn: 1 }), // Monday
      endDate: endOfWeek(now, { weekStartsOn: 1 }), // Sunday
    };
  };

  const { startDate, endDate } = getPeriodDates();

  return {
    periodType,
    setPeriodType,
    customStartDate,
    setCustomStartDate,
    customEndDate,
    setCustomEndDate,
    startDate,
    endDate,
    getCurrentWeek,
  };
}