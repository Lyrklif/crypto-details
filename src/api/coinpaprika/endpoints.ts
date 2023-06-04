import type { AxiosPromise } from "axios";
import instance from "./instance";
import type {
  CoinExchangesItem,
  GetCoinByIDResponse,
  GetTwitterItem,
  MarketsItemResponse,
  SearchResponse,
} from "./types";

export interface ApiInterface {
  search: (params: {
    q: string;
    c?: string;
    modifier?: "symbol_search";
    limit?: number;
  }) => AxiosPromise<SearchResponse>;
  getCoinByID: (coin_id: string) => AxiosPromise<GetCoinByIDResponse>;
  coinTwitter: (params: {
    coin_id: string;
  }) => AxiosPromise<Array<GetTwitterItem>>;
  coinExchanges: (params: {
    coin_id: string;
  }) => AxiosPromise<Array<CoinExchangesItem>>;
  getMarketsByCoin: (params: {
    coin_id: string;
    quotes?: string;
  }) => AxiosPromise<Array<MarketsItemResponse>>;
}

const API: ApiInterface = {
  search({ q, c, modifier, limit }) {
    return instance.get("search", { params: { q, c, modifier, limit } });
  },
  getCoinByID(coin_id) {
    return instance.get(`coins/${coin_id}`);
  },
  coinTwitter({ coin_id }) {
    return instance.get(`coins/${coin_id}/twitter`);
  },
  coinExchanges({ coin_id }) {
    return instance.get(`coins/${coin_id}/exchanges`);
  },
  getMarketsByCoin({ coin_id, quotes }) {
    return instance.get(`coins/${coin_id}/markets`, { params: { quotes } });
  },
};

export default API;
