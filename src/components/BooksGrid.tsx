import useBooks from "../hooks/useBooks";
import BookCard from "./BookCard";

interface Props {
  query: string;
}
const BooksGrid = ({ query }: Props) => {
  const { data, isLoading, error } = useBooks(query);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <div className="container">
        <h2>Trending books</h2>
        <div className="row">
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
