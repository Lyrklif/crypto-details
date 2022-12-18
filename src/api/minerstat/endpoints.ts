import type { AxiosPromise } from "axios";
import instance from "./instance";
import type { Pool } from "./types";

export interface ApiInterface {
  pools: (coin: string) => AxiosPromise<Array<Pool>>;
}

const API: ApiInterface = {
  pools(coin) {
    return instance.get(`pools`, { params: { coin } });
  },
};

export default API;
