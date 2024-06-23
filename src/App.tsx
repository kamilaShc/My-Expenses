import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import "./scss/main.scss";
import axios from "axios";
import BooksGrid from "./components/BooksGrid";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "./components/Header";
import Genres from "./components/Genres";

const instance = axios.create({
  baseURL: "https://openlibrary.org/",
});

async function getBooks() {
  try {
    const response = await instance.get("trending/daily.json");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <section className="main">
        <Genres />
        <BooksGrid />
      </section>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
