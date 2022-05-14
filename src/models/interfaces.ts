type stateTypes = {
  searchBy: string
  filterBy: string
  searchQuery: string
  isButton: boolean
  data: Array<Movie>
  isLoading: boolean
  selectedMovie: Array<any>
  sameGenreMovies: Array<any>
}

type Movie = {
  poster_path: string
  title: string
  release_date: string
  id: number
  genres: string[]
  vote_average: number
  runtime: number
  overview: string
  budget?: number
  revenue?: number
  tagline?: string
  vote_count?: number
}

type Action <P extends string, T> = {
  type: P
  payload: T
}

export type { Movie, stateTypes, Action}
