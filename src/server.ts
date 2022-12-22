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
import news from "./mock/news";
import youtube from "./mock/youtube";

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
  AssetNewsResponse,
} from "./api/messari/types";
import type { YoutubeSearchResponse } from "./api/youtube/types";

export function makeServer() {
  const server = new Server();

  server.get(
    `${import.meta.env.VITE_COINGECKO_API}search/trending`,
    (): TrendingResponse => {
      return searchTrending;
    }
  );
  server.get(
    `${import.meta.env.VITE_COIN_PAPRIKA_API}search`,
    (): SearchResponse => {
      return search;
    }
  );
  server.get(
    `${import.meta.env.VITE_COIN_PAPRIKA_API}coins/:coin_id`,
    (): GetCoinByIDResponse => {
      return coinById;
    }
  );
  server.get(
    `${import.meta.env.VITE_COIN_PAPRIKA_API}coins/:coin_id/twitter`,
    (): Array<GetTwitterItem> => {
      return twitter;
    }
  );
  server.get(
    `${import.meta.env.VITE_COIN_PAPRIKA_API}coins/:coin_id/exchanges`,
    (): Array<CoinExchangesItem> => {
      return exchanges;
    }
  );
  server.get(`${import.meta.env.VITE_MINERSTAT_API}pools`, (): Array<Pool> => {
    return pools;
  });
  server.get(
    `${import.meta.env.VITE_MESSARI_API}assets/:assetKey/profile`,
    (): AssetProfileResponse => {
      return profile;
    }
  );
  server.get(
    `${import.meta.env.VITE_MESSARI_API}assets/:assetKey/metrics`,
    (): AssetMetricResponse => {
      return metrics;
    }
  );
  server.get(
    `${import.meta.env.VITE_COIN_PAPRIKA_API}coins/:coin_id/markets`,
    (): Array<MarketsItemResponse> => {
      return markets;
    }
  );
  server.get(
    `${import.meta.env.VITE_MESSARI_API}news/:assetKey`,
    (): AssetNewsResponse => {
      return news;
    }
  );
  server.get(
    `${import.meta.env.VITE_YOUTUBE_API}search`,
    (): YoutubeSearchResponse => {
      return youtube;
    }
  );

  return server;
}
