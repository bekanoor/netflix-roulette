import { actionType, Movie, stateTypes } from 'src/models'

const defaultState: stateTypes = {
  searchBy: 'title',
  filterBy: 'vote_average',
  searchQuery: '',
  isButton: false,
  data: [],
  isLoading: true,
  selectedMovie: [],
  sameGenreMovies: [], 
}

export const reducer = (
  state: stateTypes = defaultState,
  action: actionType
) => {
  switch (action.type) {
    case 'SET_SEARCH_BY':
      return { ...state, searchBy: action.payload }
    case 'SET_FILTER_BY':
      return { ...state, filterBy: action.payload }
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload }
    case 'SET_BUTTON_STATE':
      return { ...state, isButton: action.payload }
    case 'SET_DATA':
      return { ...state, data: action.payload }
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload }
    case 'SET_SELECTED_MOVIE_ID':
      return {...state, selectedMovie: action.payload}
    case 'SET_SAME_GENRE_MOVIES':
      return {...state, sameGenreMovies: action.payload}
    default:
      return state
  }
}

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
  return { type: 'SET_SELECTED_MOVIE_ID', payload: value}
}

export const setSameGenreMovies = (value: Array<Movie>) => {
  return { type: 'SET_SAME_GENRE_MOVIES', payload: value}
}
