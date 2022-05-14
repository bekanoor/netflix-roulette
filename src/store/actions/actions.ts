import {
  FinishSetMovies,
  FinishSetSameGenreMovies,
  ResetMainPageError,
  SetFilterType,
  SetLoading,
  SetMainPageError,
  SetNewTabMovie,
  SetSearchQuery,
  SetSearchStatus,
  SetSearchType,
  SetSelectedMovie,
  SetViewPageHeadError,
  StartSetMovies,
  StartSetMoviesWithParams,
  StartSetSameGenreMovies,
} from './types'

import {
  FINISH_SET_MOVIES,
  MAIN_PAGE_ERROR,
  SET_FILTER_BY,
  SET_LOADING,
  SET_NEW_TAB_MOVIE,
  SET_SAME_GENRE_MOVIES,
  SET_SEARCH_BY,
  SET_SEARCH_QUERY,
  SET_SEARCH_STATUS,
  SET_SELECTED_MOVIE_ID,
  START_SET_MOVIES,
  START_SET_SAME_GENRE_MOVIES,
  VIEW_PAGE_HEAD_ERROR,
} from '../constants'

import { Action, Movie } from 'src/models'

export const setSearchType = (value: 'title' | 'genres'): SetSearchType => {
  return { type: SET_SEARCH_BY, payload: value }
}

export const setFilterType = (value: string): SetFilterType => {
  return { type: SET_FILTER_BY, payload: value }
}

export const setSearchQuery = (value: string): SetSearchQuery => {
  return { type: SET_SEARCH_QUERY, payload: value }
}

export const setSearchStatus = (value: boolean): SetSearchStatus => {
  return { type: SET_SEARCH_STATUS, payload: value }
}

export const startSetMovies = (): StartSetMovies => {
  return { type: START_SET_MOVIES, payload: undefined }
}

export const startSetMoviesWithParams = (
  action: string[]
): StartSetMoviesWithParams => {
  return { type: START_SET_MOVIES, payload: action }
}
export const finishSetMovies = (data: object): FinishSetMovies => {
  return { type: FINISH_SET_MOVIES, payload: data }
}
export const setLoading = (status: boolean): SetLoading => {
  return { type: SET_LOADING, payload: status }
}

export const setSelectedMovie = (value: Array<Movie>): SetSelectedMovie => {
  return { type: SET_SELECTED_MOVIE_ID, payload: value }
}

export const startSetSameGenreMovies = (
  genre: string
): StartSetSameGenreMovies => {
  return { type: START_SET_SAME_GENRE_MOVIES, payload: genre }
}

export const finishSetSameGenreMovies = (
  value: Array<Movie>
): FinishSetSameGenreMovies => {
  return { type: SET_SAME_GENRE_MOVIES, payload: value }
}

export const setNewTabMovie = (id: string): SetNewTabMovie => {
  return { type: SET_NEW_TAB_MOVIE, payload: id }
}

export const setMainPageError = (): SetMainPageError => {
  return {
    type: MAIN_PAGE_ERROR,
    payload: 'Error fetching movies by params',
  }
}
export const resetMainPageError = (): ResetMainPageError => {
  return { type: MAIN_PAGE_ERROR, payload: '' }
}

export const setViewPageHeadError = (): SetViewPageHeadError => {
  return {
    type: VIEW_PAGE_HEAD_ERROR,
    payload: 'Error fetching movie information',
  }
}
