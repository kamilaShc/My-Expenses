import { Book } from "../hooks/useBooks";
import coverNotFound from "../images/cover-not-found.jpg";

interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {
  return (
    <div className="card">
      <div className="card-body">
        <a className="cover">
          <img
            src={
              book.cover_edition_key
                ? `http://covers.openlibrary.org/b/olid/${book.cover_edition_key}.jpg`
                : coverNotFound
            }
          ></img>
        </a>
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.author_name}</p>
      </div>
    </div>
  );
};

export default BookCard;
