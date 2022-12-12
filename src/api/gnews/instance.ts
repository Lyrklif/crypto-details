import axios from "axios";
import type { AxiosInstance } from "axios";

const googleNewsInstance: AxiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? ""
      : import.meta.env.VITE_GOOGLE_NEWS_API,
  params: {
    token: import.meta.env.VITE_GOOGLE_NEWS_API_KEY,
  },
});

export default googleNewsInstance;
