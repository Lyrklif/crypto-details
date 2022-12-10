import type { AxiosPromise } from "axios";
import instance from "./instance";
import type { TimePeriod, CoinHistoryResponse } from "./types";

export interface ApiInterface {
  coinHistory: (
    uuid: string,
    timePeriod?: TimePeriod
  ) => AxiosPromise<CoinHistoryResponse>;
}

const API: ApiInterface = {
  coinHistory(uuid, timePeriod) {
    return instance.get(`coin/${uuid}/history`, { params: { timePeriod } });
  },
};

export default API;
