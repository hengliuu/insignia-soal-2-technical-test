import axios, { AxiosInstance } from "axios";

export const BACKEND_URL = "https://dummyjson.com";

let instance: null | (() => AxiosInstance) = null;

export function getApiInstance(): AxiosInstance {
  if (!instance) {
    return axios.create({
      baseURL: `${BACKEND_URL}`,
    });
  }
  return instance && instance();
}
