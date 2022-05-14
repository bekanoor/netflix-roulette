import { actionType, Movie, stateTypes } from '../../models'

type defaultStateType = {
  data: Array<Movie> | [],
  isLoading: boolean,
  selectedMovie: Array<Movie> | [],
  sameGenreMovies: Array<Movie> | []
}

const defaultState: defaultStateType = {
  data: [],
  isLoading: true,
  selectedMovie: [],
  sameGenreMovies: [],
}

const moviesReducer = (state = defaultState, action: actionType) => {
  switch (action.type) {
    case 'FINISH_SET_MOVIES':
      return { ...state, data: action.payload }
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload }
    case 'SET_SELECTED_MOVIE_ID':
      return { ...state, selectedMovie: action.payload }
    case 'SET_SAME_GENRE_MOVIES':
      return { ...state, sameGenreMovies: action.payload }
    default:
      return state
  }
}

export { moviesReducer }
