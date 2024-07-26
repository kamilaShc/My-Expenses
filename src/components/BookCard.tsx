import { validateAuthor, validateTitle } from "../helpers/helpers";
import { Book } from "../hooks/useBooks";
import coverNotFound from "../images/cover-not-found.jpg";

interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {
  return (
    <div className="card" key={book.key}>
      <div className="card-body">
        <div className="cover">
          <img
            src={
              book.cover_edition_key
                ? `http://covers.openlibrary.org/b/olid/${book.cover_edition_key}.jpg`
                : coverNotFound
            }
            className="cover-img"
          />
        </div>
        <h5 className="card-title" title={book.title}>
          {validateTitle(book.title)}
        </h5>
        <p
          className="card-text"
          title={book.author_name ? book.author_name.toString() : ""}
        >
          {book.author_name && validateAuthor(book.author_name.toString())}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
