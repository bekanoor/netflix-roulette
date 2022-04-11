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
    data: Array<moviesType>
  }
  page: {
    page: string
    movieId: number
  }
}

type moviesType = {
  poster_path: string
  title: string
  release_date: string
  id: number
  genres: string[]
  vote_average: number
  runtime: number
  overview: string
}

export type { moviesType, stateTypes, actionType }
