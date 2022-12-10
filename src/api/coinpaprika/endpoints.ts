import type { AxiosPromise } from "axios";
import instance from "./instance";
import type {
  SearchResponse,
  GetCoinByIDResponse,
  GetTwitterItem,
  CoinExchangesItem,
} from "./types";

export interface ApiInterface {
  search: (params: {
    q: string;
    c?: string;
    modifier?: "symbol_search";
    limit?: number;
  }) => AxiosPromise<SearchResponse>;
  getCoinByID: (coin_id: string) => AxiosPromise<GetCoinByIDResponse>;
  coinTwitter: (coin_id: string) => AxiosPromise<Array<GetTwitterItem>>;
  coinExchanges: (coin_id: string) => AxiosPromise<Array<CoinExchangesItem>>;
}

const API: ApiInterface = {
  search({ q, c, modifier, limit }) {
    return instance.get("search", { params: { q, c, modifier, limit } });
  },
  getCoinByID(coin_id) {
    return instance.get("coins", { params: { coin_id } });
  },
  coinTwitter(coin_id) {
    return instance.get(`coins/${coin_id}/twitter`);
  },
  coinExchanges(coin_id) {
    return instance.get(`coins/${coin_id}/exchanges`);
  },
};

export default API;
