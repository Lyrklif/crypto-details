import axios from "axios";
import type { AxiosInstance } from "axios";

const messariInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_MESSARI_API,
});

export default messariInstance;
