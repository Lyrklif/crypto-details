import type { AxiosPromise } from "axios";
import instance from "./instance";
import type { TrendingResponse } from "./types";

export interface ApiInterface {
  trending: () => AxiosPromise<TrendingResponse>;
}

const API: ApiInterface = {
  trending() {
    return instance.get("search/trending");
  },
};

export default API;
