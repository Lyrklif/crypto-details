import axios from "axios";
import type { AxiosInstance } from "axios";

const coinRankingInstance: AxiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? ""
      : import.meta.env.VITE_COIN_RANKING_API,
  headers: {
    "x-access-token": import.meta.env.VITE_COIN_RANKING_API_KEY,
  },
});

export default coinRankingInstance;
