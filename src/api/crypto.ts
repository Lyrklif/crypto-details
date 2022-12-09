import type { AxiosPromise, AxiosInstance } from "axios";
import { coinGecko, simpleswap, coincap } from "../services/axios";

export interface ApiInterface {
  trending: () => AxiosPromise;
}

const API: ApiInterface = {
  async trending(): AxiosPromise {
    return coinGecko.get("search/trending");
  },
};

export default API;
