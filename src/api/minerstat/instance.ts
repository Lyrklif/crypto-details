import axios from "axios";
import type { AxiosInstance } from "axios";

const minerStatInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_MINERSTAT_API,
});

export default minerStatInstance;
