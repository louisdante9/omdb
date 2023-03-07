import PropTypes from "prop-types";

import "./MovieInfo.css";

export function MovieInfo({
  closePop,
  Poster,
  Title,
  Country,
  Plot,
  Production,
  Year,
  Rated,
  Genre,
  Runtime,
  imdbRating,
  Director,
  Actors,
  BoxOffice,
}) {
  return (
    <div className="show-expand">
      <div className="show-content">
        <i className="show-close" onClick={closePop}>
          X
        </i>

        <div className="show-poster">
          <span className="show-poster-bg">
            <img
              src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/163x240/111217/FFFFFF/?text=No%20Image"}
              alt={Title}
            />
          </span>
          <span className="show-poster-main">
            <img
              src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/163x240/111217/FFFFFF/?text=No%20Image"}
              alt={Title}
            />
          </span>
        </div>

        <div className="show-detail">
          <h2>{Title}</h2>
          <ul className="show-tags">
            <li className="show-rated">{Country}</li>
            <li className="show-rated">{Year}</li>
            <li className="show-year">{Rated}</li>
            <li className="show-year">{Genre}</li>
          </ul>
          <div className="show-plot">
            <p>{Plot}</p>
          </div>

          <div className="show-credits">
            <p>
              <strong>Production:</strong> {Production}
            </p>
            <p>
              <strong>Runtime:</strong> {Runtime || "N/A "}
            </p>
            <p>
              <strong>Rating:</strong> {imdbRating}
            </p>
            <p>
              <strong>Director:</strong> {Director}
            </p>
            <p>
              <strong>Actors:</strong> {Actors}
            </p>
            <p>
              <strong>BoxOffice:</strong> {BoxOffice || "N/A "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

MovieInfo.propTypes = {
  closePop: PropTypes.func,
  Poster: PropTypes.string,
  Title: PropTypes.string,
  Country: PropTypes.string,
  Year: PropTypes.string,
  Rated: PropTypes.string,
  Genre: PropTypes.string,
  Plot: PropTypes.string,
  Production: PropTypes.string,
  Runtime: PropTypes.string,
  imdbRating: PropTypes.string,
  Director: PropTypes.string,
  Actors: PropTypes.string,
  BoxOffice: PropTypes.string,
};
