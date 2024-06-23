import useBooks from "../hooks/useBooks";
import BookCard from "./BookCard";

const BooksGrid = () => {
  const { data, isLoading, error } = useBooks();
  // if (isLoading) return <p>Loading...</p>;

  // if (error) return <p>{error.message}</p>;

  console.log(data);
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
