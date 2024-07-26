import genres from "../data/genres";

export const NavBar = () => {
  return (
    <div className="pos-f-t">
      <nav className="navbar">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="list-group mb-3">
          {genres.map((genre) => (
            <a
              className={`list-group-item list-group-item-action`}
              key={genre.key}
              //   onClick={() => onSelectGenre(genre.name, genre.key)}
            >
              {genre.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
