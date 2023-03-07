import PropTypes from 'prop-types'

export function MovieInfo(props) {
      
    return (
      <div className='show-expand'>
        
        <div className='show-content'>
          <i className="show-close" onClick={props.closePop} >X</i>
          
          <div className='show-poster'>
            <span className='show-poster-bg'>
              <img src={props.Poster !== 'N/A' ? props.Poster : 'https://via.placeholder.com/163x240/111217/FFFFFF/?text=No%20Image'} alt={props.Title} />
            </span>
            <span className='show-poster-main'>
              <img src={props.Poster !== 'N/A' ? props.Poster : 'https://via.placeholder.com/163x240/111217/FFFFFF/?text=No%20Image'} alt={props.Title} />
            </span>
          </div>
          
          <div className='show-detail'>
            <h2>{props.Title}</h2>
            <ul className="show-tags">
              <li className="show-rated">{props.Country}</li>
              <li className="show-rated">{props.Year}</li>
              <li className="show-year">{props.Rated}</li>
              <li className="show-year">{props.Genre}</li>
            </ul>
            <div className="show-plot">
              <p>{props.Plot}</p>
            </div>
            
            <div className="show-credits">
              <p><strong>Production:</strong> {props.Production}</p>
              <p><strong>Runtime:</strong> {props.Runtime || 'N/A '}</p>
              <p><strong>Rating:</strong> {props.imdbRating}</p>
              <p><strong>Director:</strong> {props.Director}</p>
              <p><strong>Actors:</strong> {props.Actors}</p>
              <p><strong>BoxOffice:</strong> {props.BoxOffice || 'N/A '}</p>
            </div>
          </div>
          
        </div>
      </div>
    )
  }

  MovieInfo.propTypes = {
    props: PropTypes.shape({
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
    })
  }