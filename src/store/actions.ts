import { MAIN_PAGE_ERROR } from './constants'

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

export const setSearchStatus = (value: boolean) => {
  return { type: 'SET_BUTTON_STATE', payload: value }
}

export const startSetMovies = () => {
  return { type: 'START_SET_MOVIES', payload: undefined}
}

export const startSetMoviesWithParams = (action: string[] ) => {
  return { type: 'START_SET_MOVIES', payload: action}
}
export const finishSetMovies = (data: object) => {
  return { type: 'FINISH_SET_MOVIES', payload: data }
}
export const setLoading = (status: boolean) => {
  return { type: 'SET_LOADING', payload: status }
}

export const setSelectedMovie = (value: Array<Movie>) => {
  return { type: 'SET_SELECTED_MOVIE_ID', payload: value }
}

export const startSetSameGenreMovies = (genre: string) => {
  return { type: 'START_SET_SAME_GENRE_MOVIES', payload: genre }
}

export const finishSetSameGenreMovies = (value: Array<Movie>) => {
  return { type: 'SET_SAME_GENRE_MOVIES', payload: value }
}

export const setNewTabMovie = (id: string) => {
  return { type: 'SET_NEW_TAB_MOVIE', payload: id }
}

export const resetMainPageError = () => {
  return {type: MAIN_PAGE_ERROR, payload: ''}
}
