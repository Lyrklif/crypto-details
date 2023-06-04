import type { AxiosPromise } from "axios";
import instance from "./instance";
import type {
  AssetMetricResponse,
  AssetNewsResponse,
  AssetProfileResponse,
} from "./types";

export interface ApiInterface {
  assetProfile: (params: {
    assetKey: string;
    fields?: string;
  }) => AxiosPromise<AssetProfileResponse>;
  assetMetrics: (params: {
    assetKey: string;
    fields?: string;
  }) => AxiosPromise<AssetMetricResponse>;
  newsForAsset: (params: {
    assetKey: string;
    fields?: string;
  }) => AxiosPromise<AssetNewsResponse>;
  lastNews: (page: number, fields?: string) => AxiosPromise<AssetNewsResponse>;
}

const API: ApiInterface = {
  assetProfile({ assetKey, fields }) {
    return instance.get(`assets/${assetKey}/profile`, { params: { fields } });
  },
  assetMetrics({ assetKey, fields }) {
    return instance.get(`assets/${assetKey}/metrics`, { params: { fields } });
  },
  newsForAsset({ assetKey, fields }) {
    return instance.get(`news/${assetKey}`, { params: { fields } });
  },
  lastNews(page, fields) {
    return instance.get(`news`, { params: { page, fields } });
  },
};

export default API;
