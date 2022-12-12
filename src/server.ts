import { Server } from "miragejs";
import searchTrending from "./mock/searchTrending";
import search2 from "./mock/search2";
import type { TrendingResponse, SearchResponse } from "./api/coingecko/types";
import type { SearchResponse as SearchResponse2 } from "./api/coinpaprika/types";

export function makeServer() {
  const server = new Server();

  server.get("/search/trending", (): TrendingResponse => {
    return searchTrending;
  });

  server.get("/search", (): SearchResponse2 => {
    return search2;
  });

  return server;
}
