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

interface SearchCoinItem {
  id: string;
  name: string;
  api_symbol: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  large: string;
}

interface SearchCategoryItem {
  id: number;
  name: string;
}

interface SearchResponse {
  coins: Array<SearchCoinItem>;
  exchanges: Array<any>;
  icos: Array<any>;
  categories: Array<SearchCategoryItem>;
  nfts: Array<any>;
}

export type {
  TrendingCoinItem,
  TrendingResponse,
  SearchCoinItem,
  SearchCategoryItem,
  SearchResponse,
};
