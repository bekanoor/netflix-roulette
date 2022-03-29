type stateType = {
  page: string
  movieId: string
}

type moviesType = {
  cover: string
  filmTitle: string
  releaseDate: number
  id: number
  genre: string[]
}

export type { stateType, moviesType }
