import { useState, useReducer } from 'react';

import { Search } from './component/Search';
import { Movie } from './component/Movie';
import { Skeleton } from './component/Skeleton';
import { NotFound } from './component/NotFound';
import { Pagination } from './component/Pagination';
import { MovieInfo } from './component/MovieInfo';

import { fetchMovies, fetchMovie } from './api';
import { formReducer } from './reducer';
import "./App.css";


function App() {
  const [formData, setFormData] = useReducer(formReducer, {})

  const [movieResults, setMovieResults] = useState('')
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState()
  const [showPop, setShowPop] = useState(false);
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null)
  const [notFound, setNotFound] = useState('')
  const [loading, setLoading] = useState(false);

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }


  const handleSearch = async (page = 1) => {
    const { title, year, genre } = formData;

    if (!formData.title) return
    setLoading(true)
    setNotFound('')

    const { data, error } = await fetchMovies(title, year, genre, page);

    if (data) {
      if(data.Error) {
         setNotFound(data.Error);
         setLoading(false)
         return
      }
      setMovieResults(data?.Search)
      setTotalPage(Math.ceil(data?.totalResults / 10))
    }

    if (error) {
      setError(error)
    }

    setLoading(false)
  }

  const getMovie = async (movieId) => {
    setLoading(true)
    setNotFound('')
    const { data, error } = await fetchMovie(movieId);

    if (data) {
      if(data.Error) {
        setNotFound(data.Error);
        setLoading(false)
        return
     }
      setMovie(data)
      setShowPop(true);
    }

    if (error) {
      setError(error)
    }

    setLoading(false)
  }

  const handlePageClick = (e, page) => {
    e.preventDefault()
    setPage(page)
    handleSearch(page)
  }


  if (error) return 'error';

  return (
    <div className="App">
      <header className="main__header">
        <h1>React Movies </h1>
      </header>
      <Search
        formData={formData}
        handleChange={handleChange}
        handldeSubmit={handleSearch}

      />
      {loading && (<Skeleton />)}
      {!notFound && !loading && movieResults.length ?
        <>
          <div className='movies__header'>
            <h3>Movies</h3>
           {movieResults.length > 1 && <Pagination
              page={page}
              handlePageClick={handlePageClick}
              totalPage={totalPage}
            />}
          </div>
          <div className='movies'>

            {movieResults.map((movie, index) => (
              <Movie
                key={`${index}-${movie.Title}`}
                movieResults={movie}
                onclick={() => getMovie(movie.imdbID)}
              />))}

          </div></>
        : (<NotFound notFound={notFound} />)}
      {showPop ? (
        <MovieInfo
          {...movie}
          closePop={() => setShowPop(false)}
        />) : null}
    </div>
  );
}

export default App;
