import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import BooksGrid from "./components/BooksGrid";
import Genres from "./components/Genres";
import Header from "./components/Header";
import "./scss/main.scss";
import { useEffect, useState } from "react";
import FiltersPanel from "./components/FiltersPanel";
import { getYears } from "./helpers/helpers";
import Footer from "./components/Footer";
import YearFilter from "./components/YearFilter";
import TextFilter from "./components/TextFilter";
import { NavBar } from "./components/NavBar";

const queryClient = new QueryClient();

export interface searchQuery {
  baseString: string;
  q?: string;
  subject?: string;
  title?: string;
  author?: string;
}

export const App: React.FC = () => {
  const [bookQuery, setBookQuery] = useState<searchQuery>({
    baseString: "/trending/daily.json",
  });
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [searchCriteria, setSearchCriteria] = useState<string>("Title");
  const [searchText, setSearchText] = useState<string>("");
  const [title, setTitle] = useState<string>("Trending Books");

  useEffect(() => {
    if (selectedGenre) setTitle(`${selectedGenre} Books`);
  }, [selectedGenre]);

  const selectGenre = (genre: string, key: string) => {
    setBookQuery({
      baseString: "/search.json",
      subject: key,
    });
    setSelectedGenre(genre);
    setSearchText("");
  };

  const selectYear = (year: number) => {
    setBookQuery({
      ...bookQuery,
      baseString: "/search.json",
      q: `first_publish_year:[${year} TO ${year + 1}]`,
    });
    setSearchText("");
  };

  const searchBooks = (searchText: string) => {
    let newSearchQuery;
    switch (searchCriteria) {
      case "Title":
        newSearchQuery = {
          title: searchText,
        };
        break;
      case "Author":
        newSearchQuery = {
          author: searchText,
        };
        break;
      case "Subject":
        newSearchQuery = {
          subject: searchText,
        };
        break;
    }
    setBookQuery({
      subject: bookQuery.subject,
      ...newSearchQuery,
      baseString: "/search.json",
    });
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    searchBooks(searchText);
    setTitle("Search results");
    if (selectedGenre) setSelectedGenre(null);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="largeContainer">
        <Header />

        <main>
          <NavBar />
          <Genres selected={selectedGenre} onSelectGenre={selectGenre} />
          <div className="container">
            <h2>
              {title}
              {/* {selectedGenre ? `${selectedGenre} Books` : "Trending books"} */}
            </h2>
            <FiltersPanel>
              <YearFilter
                selectedYear={selectedYear}
                years={getYears()}
                onSelectYear={selectYear}
              />
              <TextFilter
                searchCriteria={searchCriteria}
                setSearchCriteria={setSearchCriteria}
                searchText={searchText}
                setSearchText={setSearchText}
                handleSearch={handleSearch}
              />
            </FiltersPanel>
            <BooksGrid query={bookQuery} onSelectYear={selectYear} />
          </div>
        </main>
        <Footer />
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  );
};
