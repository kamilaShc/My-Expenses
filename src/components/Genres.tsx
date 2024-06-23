import genres from "../data/genres";

// interface Genre {
//   name: string;
//   key: string;
// }

const Genres = () => {
  return (
    <div className="genres">
      <h2>Genres</h2>
      <div className="list-group">
        {genres.map((genre) => (
          <a className="list-group-item list-group-item-action" key={genre.key}>
            {genre.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Genres;
