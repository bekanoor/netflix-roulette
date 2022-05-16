import { Action } from '../../models'
import {
  SetSearchType,
  SetFilterType,
  SetSearchQuery,
  SetSearchStatus,
} from '../actions/types'

import {
  SET_FILTER_BY,
  SET_SEARCH_BY,
  SET_SEARCH_QUERY,
  SET_SEARCH_STATUS,
} from '../constants'

type InitialState = {
  searchBy: string
  filterBy: string
  searchQuery: string
  searchStatus: boolean
}

const initialState = {
  searchBy: 'title',
  filterBy: 'vote_average',
  searchQuery: '',
  searchStatus: false,
} as InitialState

type SearchParamRootAction =
  | SetSearchType
  | SetFilterType
  | SetSearchQuery
  | SetSearchStatus

const searchParamReducer = (
  state: InitialState = initialState,
  action: SearchParamRootAction
): InitialState => {
  switch (action.type) {
    case SET_SEARCH_BY:
      return { ...state, searchBy: action.payload }
    case SET_FILTER_BY:
      return { ...state, filterBy: action.payload }
    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload }
    case SET_SEARCH_STATUS:
      return { ...state, searchStatus: action.payload }
    default:
      return state
  }
}

export { searchParamReducer }
