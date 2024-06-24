import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import BooksGrid from "./components/BooksGrid";
import Genres from "./components/Genres";
import Header from "./components/Header";
import "./scss/main.scss";
import { useState } from "react";

const queryClient = new QueryClient();

export const App: React.FC = () => {
  const [query, setQuery] = useState<string>("/trending/daily.json");
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const selectGenre = (genre: string, key: string) => {
    setQuery(`/subjects/${key}.json`);
    setSelectedGenre(genre);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <section className="main">
        <Genres selected={selectedGenre} onSelectGenre={selectGenre} />
        <BooksGrid query={query} />
      </section>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
