import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import BooksGrid from "./components/BooksGrid";
import Genres from "./components/Genres";
import Header from "./components/Header";
import "./scss/main.scss";
import { useState } from "react";
import FiltersPanel from "./components/FiltersPanel";
import { getYears } from "./helpers/helpers";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

export interface searchQuery {
  baseString: string;
  q?: string;
  subject?: string;
}

export const App: React.FC = () => {
  const [bookQuery, setBookQuery] = useState<searchQuery>({
    baseString: "/trending/daily.json",
  });
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const selectGenre = (genre: string, key: string) => {
    setBookQuery({
      baseString: "/search.json",
      subject: key,
    });
    setSelectedGenre(genre);
  };

  const selectYear = (year: number) => {
    setBookQuery({
      ...bookQuery,
      baseString: "/search.json",
      q: `first_publish_year:[${year} TO ${year + 1}]`,
    });
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="largeContainer">
        <Header />
        <main>
          <Genres selected={selectedGenre} onSelectGenre={selectGenre} />
          <div className="container">
            <h2>
              {selectedGenre ? `${selectedGenre} Books` : "Trending books"}
            </h2>
            <FiltersPanel years={getYears()} onSelectYear={selectYear} />
            <BooksGrid query={bookQuery} onSelectYear={selectYear} />
          </div>
        </main>
        <Footer />
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  );
};
