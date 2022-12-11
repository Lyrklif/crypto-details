import type { AxiosPromise } from "axios";
import instance from "./instance";
import type { TrendingResponse, SearchResponse } from "./types";

export interface ApiInterface {
  trending: () => AxiosPromise<TrendingResponse>;
  search: (query: string) => AxiosPromise<SearchResponse>;
}

const API: ApiInterface = {
  trending() {
    return instance.get("search/trending");
  },
  search(query) {
    return instance.get("search", { params: { query } });
  },
};

export default API;
