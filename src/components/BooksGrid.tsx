import React from "react";
import { searchQuery } from "../App";
import useBooks, { Book } from "../hooks/useBooks";
import BookCard from "./BookCard";

interface Props {
  query: searchQuery;
  onSelectYear: (year: number) => void;
}

const renderBooks = (books: Book[]) => {
  return books.map((book) => <BookCard book={book} key={book.key} />);
};

const BooksGrid = ({ query, onSelectYear }: Props) => {
  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useBooks(query);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      {data && (data.pages[0].numFound > 0 || data.pages[0].works) ? (
        <>
          {data.pages[0].numFound && (
            <p>Results found: {data.pages[0].numFound.toLocaleString("lv")}</p>
          )}
          <div className="row" style={{ margin: "auto" }}>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              data.pages.map((page, index) => (
                <React.Fragment key={index}>
                  {query.baseString === "/search.json"
                    ? page.docs && renderBooks(page.docs)
                    : page.works && renderBooks(page.works)}
                </React.Fragment>
              ))
            )}
          </div>
          {hasNextPage && (
            <button
              className="btn btn-primary mt-3"
              onClick={() => fetchNextPage()}
            >
              {isFetchingNextPage ? "Loading..." : "Load More"}
            </button>
          )}
        </>
      ) : (
        <p>Books not found</p>
      )}
    </>
  );
};

export default BooksGrid;
