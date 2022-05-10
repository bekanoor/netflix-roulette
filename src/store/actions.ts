import { Movie } from 'src/models'

export const setSearchType = (value: 'title' | 'genres') => {
  return { type: 'SET_SEARCH_BY', payload: value }
}

export const setFilterType = (value: string) => {
  return { type: 'SET_FILTER_BY', payload: value }
}

export const setSearchQuery = (value: string) => {
  return { type: 'SET_SEARCH_QUERY', payload: value }
}

export const setSearchButton = (value: boolean) => {
  return { type: 'SET_BUTTON_STATE', payload: value }
}

export const setData = (data: any) => {
  return { type: 'SET_DATA', payload: data }
}

export const setLoading = (status: boolean) => {
  return { type: 'SET_LOADING', payload: status }
}

export const setSelectedMovie = (value: Array<Movie>) => {
  return { type: 'SET_SELECTED_MOVIE_ID', payload: value }
}

export const setSameGenreMovies = (value: Array<Movie>) => {
  return { type: 'SET_SAME_GENRE_MOVIES', payload: value }
}
