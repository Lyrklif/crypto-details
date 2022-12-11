import type { AxiosPromise } from "axios";
import instance from "./instance";
import type { SortBy, ArticleResponse } from "./types";

export interface ApiInterface {
  everything: (params: {
    q: string;
    sources?: string;
    language?: string;
    sortBy?: SortBy;
    pageSize?: number;
  }) => AxiosPromise<ArticleResponse>;
}

const API: ApiInterface = {
  everything({ q, sources, language, pageSize }) {
    return instance.get(`everything`, {
      params: { sources, language, pageSize },
    });
  },
};

export default API;
