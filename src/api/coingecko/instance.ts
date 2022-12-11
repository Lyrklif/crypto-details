import axios from "axios";
import type { AxiosInstance } from "axios";

const coinGeckoInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_COINGECKO_API,
});

export default coinGeckoInstance;
