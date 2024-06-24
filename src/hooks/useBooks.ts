import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { searchQuery } from "../App";

export interface Book {
  author_key: string[];
  author_name: string[];
  cover_edition_key: string;
  first_publish_year: number;
  title: string;
  key: string;
}

const useBooks = (query: searchQuery) => {
  const apiClient = new APIClient<Book>(query.baseString);

  return useQuery({
    queryKey: ["books", query],
    queryFn: () =>
      apiClient.getAll({
        params: {
          q: query.q,
          subject: query.subject,
        },
      }),
    staleTime: 1000 * 60 * 60,
  });
};

export default useBooks;
