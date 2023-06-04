import type { AxiosInstance } from "axios";
import axios from "axios";
import { ERROR_TYPES } from "../errorTypes";

const messariInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_MESSARI_API,
});

messariInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const notFound = error?.response?.status === ERROR_TYPES.NOT_FOUND;
    error.response = {
      status: error?.response?.status,
      text: error?.response?.statusText,
      notFound: notFound || error?.status === ERROR_TYPES.NOT_FOUND,
    };

    return Promise.reject(error);
  }
);

export default messariInstance;
