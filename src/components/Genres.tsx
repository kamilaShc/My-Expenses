import genres from "../data/genres";

interface Props {
  selected: null | string;
  onSelectGenre: (genre: string, key: string) => void;
}

const Genres = ({ selected, onSelectGenre }: Props) => {
  return (
    <div className="genres">
      <h2>Genres</h2>
      <div className="list-group">
        {genres.map((genre) => (
          <a
            className={`list-group-item list-group-item-action ${
              genre.name === selected ? "active" : ""
            }`}
            key={genre.key}
            onClick={() => onSelectGenre(genre.name, genre.key)}
          >
            {genre.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Genres;
