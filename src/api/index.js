const baseUrl = 'http://www.omdbapi.com/'
const apikey = process.env.REACT_APP_OMDB_API_KEY

export const fetchMovie = async (title, year = "", type = "") => {
    try {
        const result = await fetch(`${baseUrl}?t=${title}&y=${year}&type=${type}&apikey=${apikey}`);

        if (!result.ok) return { data: null, error: result.error }

        const data = await result.json()
        return { data, error: null }
    } catch (err) {
        return { data: null, error: err.error }
    }
}