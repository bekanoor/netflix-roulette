import { Action, Movie } from '../../models'
import {
  SetMovies,
  SetLoading,
  SetSelectedMovie,
  SetSameGenreMovies,
  SetNewTabMovie,
  StartSetSameGenreMovies,
  StartSetMovies,
  StartSetMoviesWithParams,
} from '../actions/types'
import {
  FINISH_SET_MOVIES,
  SET_LOADING,
  SET_SAME_GENRE_MOVIES,
  SET_SELECTED_MOVIE_ID,
} from '../constants'

type InitialState = {
  data: Array<Movie> | []
  isLoading: boolean
  selectedMovie: Array<Movie> | []
  sameGenreMovies: Array<Movie> | []
}

const initialState: InitialState = {
  data: [],
  isLoading: true,
  selectedMovie: [],
  sameGenreMovies: [],
}

type MoviesRootAction =
  | SetMovies
  | SetLoading
  | SetSelectedMovie
  | SetSameGenreMovies
  | SetNewTabMovie
  | StartSetSameGenreMovies
  | StartSetMovies
  | StartSetMoviesWithParams

const moviesReducer = (
  state = initialState,
  action: MoviesRootAction
): InitialState => {
  switch (action.type) {
    case FINISH_SET_MOVIES:
      return { ...state, data: action.payload }
    case SET_LOADING:
      return { ...state, isLoading: action.payload }
    case SET_SELECTED_MOVIE_ID:
      return { ...state, selectedMovie: action.payload }
    case SET_SAME_GENRE_MOVIES:
      return { ...state, sameGenreMovies: action.payload }
    default:
      return state
  }
}

export { moviesReducer }
