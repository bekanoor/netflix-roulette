type stateType = {
  page: string
  movieId: number
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

export type { stateType, moviesType }
