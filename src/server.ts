import { Server } from "miragejs";
import searchTrending from "./mock/searchTrending";
import type { TrendingResponse, SearchResponse } from "./api/coingecko/types";

export function makeServer() {
  const server = new Server();

  server.get("/search/trending", (): TrendingResponse => {
    return searchTrending;
  });

  return server;
}
