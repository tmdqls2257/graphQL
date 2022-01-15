import { getMovies } from './db.js'
// Query를 resolve하는 파일
const resolvers = {
  Query: {
    movies: () => getMovies(),
  },
}

export default resolvers
