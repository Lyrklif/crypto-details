import type { AxiosPromise, AxiosInstance } from "axios";
import { googleTrends } from "../services/axios";

export interface ApiInterface {
  search: (q: string) => AxiosPromise;
}

const API: ApiInterface = {
  async search(q): AxiosPromise {
    return googleTrends.get(`&q=${q}`);
  },
};

export default API;
