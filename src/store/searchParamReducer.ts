import { actionType } from '../models'

type defaultStateType = {
  searchBy: string
  filterBy: string
  searchQuery: string
  isButton: boolean
}

const defaultState: defaultStateType = {
  searchBy: 'title',
  filterBy: 'vote_average',
  searchQuery: '',
  isButton: false,
}

const searchParamReducer = (state = defaultState, action: actionType) => {
  switch (action.type) {
    case 'SET_SEARCH_BY':
      return { ...state, searchBy: action.payload }
    case 'SET_FILTER_BY':
      return { ...state, filterBy: action.payload }
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload }
    case 'SET_BUTTON_STATE':
      return { ...state, isButton: action.payload }
    default:
      return state
  }
}

export { searchParamReducer }
