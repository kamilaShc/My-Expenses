import useBooks from "../hooks/useBooks";
import useYears from "../hooks/useYears";
import BookCard from "./BookCard";
import FiltersPanel from "./FiltersPanel";

interface Props {
  query: string;
}

const BooksGrid = ({ query }: Props) => {
  const { data, isLoading, error } = useBooks(query);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;
  console.log(data);

  return (
    <>
      <div className="container">
        <h2>Trending books</h2>
        {data && <FiltersPanel years={useYears(data.works)} />}
        <div className="row" style={{ margin: "auto" }}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            data?.works.map((book) => <BookCard book={book} />)
          )}
        </div>
      </div>
    </>
  );
};

export default BooksGrid;
