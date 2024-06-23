import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  query: string;
  works: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://openlibrary.org/",
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () =>
    axiosInstance.get<FetchResponse<T>>(this.endpoint).then((res) => res.data);
}

export default APIClient;
