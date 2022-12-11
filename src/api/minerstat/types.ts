interface Pool {
  id: string;
  name: string;
  url: string;
  description: string;
  website: string;
  founded: number;
  type: string;
  coins: {
    "ETH+ZIL": {
      algorithm: string;
      payoutThreshold: string;
      rewardMethod: string;
      fee: string;
      anonymous: boolean;
      registration: boolean;
    };
  };
}

export type { Pool };
