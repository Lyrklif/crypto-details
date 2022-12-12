import { Server } from "miragejs";

export function makeServer() {
  const server = new Server();

  server.get("/search/trending", () => {
    return {
      coins: [
        {
          id: "string",
          coin_id: 1,
          name: "string",
          symbol: "string",
          market_cap_rank: 1,
          thumb: "string",
          small: "string",
          large: "string",
          slug: "string",
          price_btc: 1,
          score: 1,
        },
      ],
      exchanges: [],
    };
  });

  return server;
}
