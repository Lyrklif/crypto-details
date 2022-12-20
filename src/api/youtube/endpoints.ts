import type { AxiosPromise } from "axios";
import instance from "./instance";
import type { YoutubeSearchResponse } from "./types";
import type { NrRange } from "ts-number-range";

export interface ApiInterface {
  search: (params: {
    q: string;
    lang?: string;
    maxResults?: NrRange<1, 51>;
  }) => AxiosPromise<YoutubeSearchResponse>;
}

const API: ApiInterface = {
  search({ q, lang, maxResults }) {
    return instance.get(`search`, {
      params: {
        q,
        type: "video",
        key: import.meta.env.VITE_YOUTUBE_API_KEY,
        maxResults,
        part: "snippet",
        relevanceLanguage: lang,
      },
    });
  },
};

export default API;
