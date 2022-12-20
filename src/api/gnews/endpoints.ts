import type { AxiosPromise } from "axios";
import instance from "./instance";
import type { ArticleResponse } from "./types";
import type { NrRange } from "ts-number-range";

export interface ApiInterface {
  search: (params: {
    q: string;
    lang?: string;
    max?: NrRange<1, 100>;
  }) => AxiosPromise<ArticleResponse>;
}

const API: ApiInterface = {
  search({ q, lang, max }) {
    return instance.get(`search`, {
      params: { q, lang, max },
    });
  },
};

export default API;
