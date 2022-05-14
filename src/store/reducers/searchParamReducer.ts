import { actionType } from '../../models'

type InitialState = {
  searchBy: string
  filterBy: string
  searchQuery: string
  searchStatus: boolean
}

const initialState: InitialState = {
  searchBy: 'title',
  filterBy: 'vote_average',
  searchQuery: '',
  searchStatus: false,
}

const searchParamReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case 'SET_SEARCH_BY':
      return { ...state, searchBy: action.payload }
    case 'SET_FILTER_BY':
      return { ...state, filterBy: action.payload }
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload }
    case 'SET_BUTTON_STATE':
      return { ...state, searchStatus: action.payload }
    default:
      return state
  }
}

export { searchParamReducer }
