type TimePeriod =
  | "1h"
  | "3h"
  | "12h"
  | "24h"
  | "7d"
  | "30d"
  | "3m"
  | "1y"
  | "3y"
  | "5y";

interface CoinHistoryResponse {
  status: string;
  data: {
    change: string;
    history: Array<{
      price: string;
      timestamp: number;
    }>;
  };
}

export type { TimePeriod, CoinHistoryResponse };
