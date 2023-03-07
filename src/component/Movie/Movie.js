import PropTypes from 'prop-types'


const DefaultImage = ({ poster }) => <div className='fallback-img' data-testid="fallback-image">{poster}</div>
const LoadedImage = ({ poster }) => <img src={poster} alt="movie poster" data-testid="loaded-image"/>

export function Movie({ movieResults, onclick }) {
    const poster =
        movieResults.Poster === "N/A"
            ? <DefaultImage poster={movieResults.Poster} />
            : <LoadedImage poster={movieResults.Poster} />;

    return (
        <div className='card' onClick={onclick} data-testid="movie-card">
            {poster}
            <footer className="card__footer">
                <h3 className="card__title">{movieResults.Title}</h3>
                <div className="list list--info">
                    <div>{movieResults.Year}</div>
                    <div>{movieResults.Type}</div>
                </div>
            </footer>
        </div>

    )
}

Movie.propTypes = {
    movieResults: PropTypes.object,
    onclick: PropTypes.func
}
