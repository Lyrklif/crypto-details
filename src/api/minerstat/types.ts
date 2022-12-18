interface PoolCoin {
  algorithm: string;
  payoutThreshold: string;
  rewardMethod: string;
  fee: string;
  anonymous: boolean;
  registration: boolean;
}

interface Pool {
  id: string;
  name: string;
  url: string;
  description: string;
  website: string;
  founded: number;
  type: string;
  coins: {
    [someStrKeyWhichIsDynamic: string]: PoolCoin;
  };
}

export type { Pool };
