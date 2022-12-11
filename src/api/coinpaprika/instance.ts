import axios from "axios";
import type { AxiosInstance } from "axios";

const coinPaprikaInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_COIN_PAPRIKA_API,
});

export default coinPaprikaInstance;
