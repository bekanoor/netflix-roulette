import { actionType, stateTypes } from 'src/models'

const defaultState: stateTypes = {
  searchType: 'title',
  filterType: 'rating',
  searchInput: '',
  searchButton: 'disable',
  data: {
    data: [],
  },
  movieID: []
}

const reducer = (state: stateTypes = defaultState, action: actionType) => {
  switch (action.type) {
    case 'SET_SEARCH_TYPE':
      return { ...state, searchType: action.payload }
    case 'SET_FILTER_TYPE':
      return { ...state, filterType: action.payload }
    case 'SET_SEARCH_INPUT':
      return { ...state, searchInput: action.payload }
    case 'SET_SEARCH_BUTTON':
      return { ...state, searchButton: action.payload }
    case 'GET_DATA':
      return { ...state, data: action.payload }
    case 'SET_MOVIE_ID':
      return { ...state, movieID: [...state.movieID, action.payload] }
    case 'GET_PREV_STATE':
      return { ...state, movieID: state.movieID.slice(0, -1) }
    default:
      return state
  }
}

export { reducer }
