import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
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

  return useInfiniteQuery({
    queryKey: ["books", query],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          q: query.q,
          subject: query.subject,
          title: query.title,
          author: query.author,
          limit: 20,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, pageParams) => {
      return lastPage.start <= lastPage.numFound
        ? pageParams.length + 1
        : undefined;
    },
    staleTime: 1000 * 60 * 60,
    initialPageParam: 1,
  });
};

export default useBooks;
