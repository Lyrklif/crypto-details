import type { AxiosInstance } from "axios";
import axios from "axios";
import { ERROR_TYPES } from "../errorTypes";

const coinPaprikaInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_COIN_PAPRIKA_API,
});

coinPaprikaInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    error.response = {
      status: error.status,
      text: error.response.data.error,
      notFound: error.status === ERROR_TYPES.NOT_FOUND,
    };
    return Promise.reject(error);
  }
);

export default coinPaprikaInstance;
