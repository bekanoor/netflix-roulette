type actionType = {
  type: string
  payload: any
}

type stateTypes = {
  searchType: string
  filterType: string
  searchInput: string
  searchButton: string
  data: {
    data: Array<Movie>
  }
  movieID: number
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
