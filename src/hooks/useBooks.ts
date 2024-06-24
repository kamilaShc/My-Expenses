import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Book {
  author_key: string[];
  author_name: string[];
  cover_edition_key: string;
  first_publish_year: number;
  title: string;
}

const useBooks = (query: string) => {
  const apiClient = new APIClient<Book>(query);

  return useQuery({
    queryKey: ["books", query],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60,
  });
};

export default useBooks;
