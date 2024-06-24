import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  query: string;
  docs?: T[];
  works?: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://openlibrary.org/",
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
}

export default APIClient;
