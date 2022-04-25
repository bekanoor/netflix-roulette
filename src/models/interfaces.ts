type actionType = {
  type: string
  payload: any
}
type viewPageType = {
  selectedMovie: Array<Movie>
  sameGenreMovies: Array<Movie>
}

type stateTypes = {
  searchType: string
  filterType: string
  searchInput: string
  searchButton: string
  data: {
    data: Array<Movie>
  }
  isLoading: boolean
  selectedMovie: Array<any>
  sameGenreMovies: Array<any>
  // viewPageContent: viewPageType
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

export type { Movie, stateTypes, actionType }
