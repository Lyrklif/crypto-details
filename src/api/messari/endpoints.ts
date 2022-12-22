import type { AxiosPromise } from "axios";
import instance from "./instance";
import type {
  AssetProfileResponse,
  AssetMetricResponse,
  AssetNewsResponse,
} from "./types";

export interface ApiInterface {
  assetProfile: (
    assetKey: string,
    fields?: string
  ) => AxiosPromise<AssetProfileResponse>;
  assetMetrics: (
    assetKey: string,
    fields?: string
  ) => AxiosPromise<AssetMetricResponse>;
  newsForAsset: (
    assetKey: string,
    fields?: string
  ) => AxiosPromise<AssetNewsResponse>;
}

const API: ApiInterface = {
  assetProfile(assetKey, fields) {
    return instance.get(`assets/${assetKey}/profile`, { params: { fields } });
  },
  assetMetrics(assetKey, fields) {
    return instance.get(`assets/${assetKey}/metrics`, { params: { fields } });
  },
  newsForAsset(assetKey, fields) {
    return instance.get(`news/${assetKey}`, { params: { fields } });
  },
};

export default API;
