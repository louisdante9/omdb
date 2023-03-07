import PropTypes from "prop-types";

import "./Movie.css";

function DefaultImage({ poster }) {
  return (
    <div className="fallback-img" data-testid="fallback-image">
      {poster}
    </div>
  );
}

DefaultImage.propTypes = {
  poster: PropTypes.string,
};

function LoadedImage({ poster }) {
  return <img src={poster} alt="movie poster" data-testid="loaded-image" />;
}

LoadedImage.propTypes = {
  poster: PropTypes.string,
};

export function Movie({ movieResults, onclick }) {
  const poster =
    movieResults.Poster === "N/A" ? (
      <DefaultImage poster={movieResults.Poster} />
    ) : (
      <LoadedImage poster={movieResults.Poster} />
    );

  return (
    <div className="card" onClick={onclick} data-testid="movie-card">
      {poster}
      <footer className="card__footer">
        <h3 className="card__title">{movieResults.Title}</h3>
        <div className="list list--info">
          <div>{movieResults.Year}</div>
          <div>{movieResults.Type}</div>
        </div>
      </footer>
    </div>
  );
}

Movie.propTypes = {
  movieResults: PropTypes.shape({
    Poster: PropTypes.string,
    Title: PropTypes.string,
    Year: PropTypes.string,
    Type: PropTypes.string,
  }),
  onclick: PropTypes.func,
};
