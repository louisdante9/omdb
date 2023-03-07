const baseUrl = "http://www.omdbapi.com/";
const apikey = process.env.REACT_APP_OMDB_API_KEY;

export const fetchMovies = async (title, year = "", type = "", page = 1) => {
  try {
    const result = await fetch(`${baseUrl}?s=${title}&y=${year}&type=${type}&page=${page}&apikey=${apikey}`);

    if (!result.ok) return { data: null, error: result.error };

    const data = await result.json();

    if (data.Error) return { data: null, error: { Error: data.Error } };

    return { data, error: null };
  } catch (err) {
    return { data: null, error: err.error };
  }
};

export const fetchMovie = async (movieId) => {
  try {
    const result = await fetch(`${baseUrl}?i=${movieId}&plot=full&apikey=${apikey}`);

    if (!result.ok) return { data: null, error: result.error };

    const data = await result.json();

    if (data.Error) return { data: null, error: { Error: data.Error } };

    return { data, error: null };
  } catch (err) {
    return { data: null, error: err.error };
  }
};
