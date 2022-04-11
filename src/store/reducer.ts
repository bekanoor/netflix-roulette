import { actionType, stateTypes } from 'src/models'

const defaultState: stateTypes = {
  searchType: 'title',
  filterType: 'rating',
  searchInput: '',
  searchButton: 'disable',
  data: {
    data: [],
  },
  page: {
    page: 'main',
    movieId: 0,
  },
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
    case 'SET_MOVIE_PAGE':
      return { ...state, page: action.payload }
    default:
      return state
  }
}

export { reducer }
