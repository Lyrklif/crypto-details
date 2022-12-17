import { Server } from "miragejs";
import searchTrending from "./mock/searchTrending";
import search2 from "./mock/search2";
import coinById from "./mock/coinById";
import twitter from "./mock/twitter";
import exchanges from "./mock/exchanges";
import type { TrendingResponse } from "./api/coingecko/types";
import type { SearchResponse } from "./api/coinpaprika/types";
import type { GetCoinByIDResponse } from "./api/coinpaprika/types";
import type { GetTwitterItem } from "./api/coinpaprika/types";
import type { CoinExchangesItem } from "./api/coinpaprika/types";

export function makeServer() {
  const server = new Server();

  server.get("/search/trending", (): TrendingResponse => {
    return searchTrending;
  });
  server.get("/search", (): SearchResponse => {
    return search2;
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

  return server;
}
