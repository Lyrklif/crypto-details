import axios from "axios";
import type { AxiosInstance } from "axios";
import type { ArticleItem } from "./types";
import type { Article } from "../gnews/types";

const newsInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_NEWS_API,
  headers: {
    Authorization: import.meta.env.VITE_NEWS_API_KEY,
  },
});

newsInstance.interceptors.response.use(
  function (response) {
    response.data.articles.forEach((item: ArticleItem & Article) => {
      item.image = item.urlToImage;
    });

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default newsInstance;
