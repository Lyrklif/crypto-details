import type { AxiosInstance } from "axios";
import axios from "axios";
import { ERROR_TYPES } from "../errorTypes";

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_YOUTUBE_API,
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    error.response = {
      status: error.status,
      text: error.response.data.error.message,
      notFound: error.status === ERROR_TYPES.NOT_FOUND,
    };

    return Promise.reject(error);
  }
);

export default instance;
