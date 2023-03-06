import { useState, useReducer } from 'react';

import Search from './component/Search';
import MovieResult from './component/MovieResult';
import Skeleton from './component/Skeleton';
import NotFound from './component/NotFound';

import { fetchMovie } from './api';
import { formReducer } from './reducer';
import "./App.css";


function App() {
  const [formData, setFormData] = useReducer(formReducer, {})

  const [movieResults, setMovieResults] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false);

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const handleSearch = async () => {
    const { title, year, genre } = formData;

    if (!formData.title) return
    setLoading(true)

    const { data, error } = await fetchMovie(title, year, genre);
    console.log(data, 'hello there')

    if (data) {
      setMovieResults(data)
    }

    if (error) {
      setError(error)
    }

    setLoading(false)
  }


  const notFound = movieResults.Error;

  if (error) return 'error';

  return (
    <div className="App">
      <Search
        formData={formData}
        handleChange={handleChange}
        handldeSubmit={handleSearch}
      />
      {loading && (<Skeleton />)}
      {!notFound && !loading && movieResults.Title ?
        <MovieResult movieResults={movieResults}/>
        : (<NotFound notFound={notFound} />)}
    </div>
  );
}

export default App;
