import axios from 'axios'
const url = 'https://yts.mx/api/v2/list_movies.json'

export const getMovies = async (limit, rating) => {
  return await axios
    .get(`${url}`)
    .then(res => res.json())
    .then(json => json.data.movies)
}
