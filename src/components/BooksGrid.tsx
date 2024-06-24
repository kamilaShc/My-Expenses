import { searchQuery } from "../App";
import useBooks from "../hooks/useBooks";
import useYears from "../hooks/useYears";
import BookCard from "./BookCard";
import FiltersPanel from "./FiltersPanel";

interface Props {
  query: searchQuery;
  onSelectYear: (year: number) => void;
}

const BooksGrid = ({ query, onSelectYear }: Props) => {
  const { data, isLoading, error } = useBooks(query);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;
  console.log(data);

  const books = query.baseString === "/search.json" ? data?.docs : data?.works;

  return (
    <>
      <div className="container">
        <h2>Trending books</h2>
        {books && (
          <FiltersPanel years={useYears(books)} onSelectYear={onSelectYear} />
        )}
        <div className="row" style={{ margin: "auto" }}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            books?.map((book) => <BookCard book={book} />)
          )}
        </div>
      </div>
    </>
  );
};

export default BooksGrid;
