import { Server } from "miragejs";
import searchTrending from "./mock/searchTrending";
import search from "./mock/search";
import coinById from "./mock/coinById";
import twitter from "./mock/twitter";
import exchanges from "./mock/exchanges";
import pools from "./mock/pools";
import profile from "./mock/profile";
import metrics from "./mock/metrics";
import markets from "./mock/markets";

import type { TrendingResponse } from "./api/coingecko/types";
import type { Pool } from "./api/minerstat/types";
import type {
  SearchResponse,
  MarketsItemResponse,
  GetCoinByIDResponse,
  GetTwitterItem,
  CoinExchangesItem,
} from "./api/coinpaprika/types";
import type {
  AssetProfileResponse,
  AssetMetricResponse,
} from "./api/messari/types";

export function makeServer() {
  const server = new Server();

  server.get("/search/trending", (): TrendingResponse => {
    return searchTrending;
  });
  server.get("/search", (): SearchResponse => {
    return search;
  });
  server.get("/coins/:coin_id", (): GetCoinByIDResponse => {
    return coinById;
  });
  server.get("coins/:coin_id/twitter", (): Array<GetTwitterItem> => {
    return twitter;
  });
  server.get("coins/:coin_id/exchanges", (): Array<CoinExchangesItem> => {
    return exchanges;
  });
  server.get("pools", (): Array<Pool> => {
    return pools;
  });
  server.get(`assets/:assetKey/profile`, (): AssetProfileResponse => {
    return profile;
  });
  server.get(`assets/:assetKey/metrics`, (): AssetMetricResponse => {
    return metrics;
  });
  server.get(`coins/:coin_id/markets`, (): Array<MarketsItemResponse> => {
    return markets;
  });

  return server;
}
