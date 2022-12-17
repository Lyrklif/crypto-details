interface TrendingCoinItem {
  item: {
    id: string;
    coin_id: number;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    small: string;
    large: string;
    slug: string;
    price_btc: number;
    score: number;
  };
}

interface TrendingResponse {
  coins: Array<TrendingCoinItem>;
  exchanges: Array<any>;
}

interface SearchCategoryItem {
  id: number;
  name: string;
}

export type { TrendingCoinItem, TrendingResponse, SearchCategoryItem };
