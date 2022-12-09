import axios from "axios";
import type { AxiosInstance } from "axios";

const coinGecko: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_COINGECKO_API,
});

const simpleswap: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SIMPLESWAP_API,
  params: { api_key: import.meta.env.VITE_SIMPLESWAP_API_KEY },
});

const coincap: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_COINCAP_API,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_COINCAP_API_KEY}`,
  },
});

export { coinGecko, simpleswap, coincap };
