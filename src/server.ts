import { Server } from "miragejs";
import searchTrending from "./mock/searchTrending";
import search from "./mock/search";
import type { TrendingResponse, SearchResponse } from "./api/coingecko/types";

export function makeServer() {
  const server = new Server();

  server.get("/search/trending", (): TrendingResponse => {
    return searchTrending;
  });

  server.get("/search", (): SearchResponse => {
    return search;
  });

  return server;
}
