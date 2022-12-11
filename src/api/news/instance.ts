import axios from "axios";
import type { AxiosInstance } from "axios";

const newsInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_NEWS_API,
  headers: {
    "X-Api-Key": import.meta.env.VITE_NEWS_API_KEY,
  },
});

export default newsInstance;
