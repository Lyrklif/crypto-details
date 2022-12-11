import type { AxiosPromise } from "axios";
import instance from "./instance";
import type { AssetProfileResponse, AssetMetricResponse } from "./types";

export interface ApiInterface {
  assetProfile: (
    assetKey: string,
    fields?: string
  ) => AxiosPromise<AssetProfileResponse>;
  assetMetrics: (
    assetKey: string,
    fields?: string
  ) => AxiosPromise<AssetMetricResponse>;
}

const API: ApiInterface = {
  assetProfile(assetKey, fields) {
    return instance.get(`assets/${assetKey}/profile`, { params: { fields } });
  },
  assetMetrics(assetKey, fields) {
    return instance.get(`assets/${assetKey}/metrics`, { params: { fields } });
  },
};

export default API;
