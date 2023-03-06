export default function MovieResult({ movieResults }) {
    return (
        <div className='movie-result'>
            {movieResults.Poster !== 'N/A' ? <img src={movieResults.Poster} alt="movie poster" /> : <div className='fallback-img'>{movieResults.Poster}</div>}
            <div className='movie-details'>
                <main>
                    <h3 className="card__title">{movieResults.Title}</h3>
                    <p className="card__slug">{movieResults.Plot}</p>
                    <div className="card__ratings__wrapper">
                    <div className="card__rated" value="Watch trailer">{movieResults.Rated}</div>
                    <div className="card__rating">
                        {movieResults.imdbRating} 
                    </div>
                    </div>
                </main>
                <footer className="card__footer">
                    <div className="list list--info">
                        <div>{movieResults.Year}</div>
                        <div>{movieResults.Runtime}</div>
                        <div>{movieResults.Genre.split(',').join(' |')}</div>
                    </div>
                </footer>
            </div>
        </div>

    )
}
