import axios, { AxiosInstance } from "axios";

const BASE_URL = "https://api.punkapi.com/v2/";

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
