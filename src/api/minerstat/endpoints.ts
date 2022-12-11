import type { AxiosPromise } from "axios";
import instance from "./instance";
import type { Pool } from "./types";

export interface ApiInterface {
  pools: (params: {
    coin?: string;
    type?: string;
  }) => AxiosPromise<Array<Pool>>;
}

const API: ApiInterface = {
  pools({ coin, type }) {
    return instance.get(`pools`, {
      params: { coin, type },
    });
  },
};

export default API;
