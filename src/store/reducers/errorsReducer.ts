import {MAIN_PAGE_ERROR, VIEW_PAGE_HEAD_ERROR, VIEW_PAGE_MAIN_ERROR} from '../constants'

type InitialStateType = {
  viewPageHeadError: string
  viewPageMainError: string
  mainPageError: string
}

const initialState: InitialStateType = {
  viewPageHeadError: '',
  viewPageMainError: '',
  mainPageError: ''
}

const errorReducer = (state: InitialStateType = initialState, action: any) => {
  switch (action.type) {
    case VIEW_PAGE_HEAD_ERROR:
      return {...state, viewPageHeadError: action.payload}
    case VIEW_PAGE_MAIN_ERROR:
      return {...state, viewPageMainError: action.payload}
    case MAIN_PAGE_ERROR:
      return {...state, mainPageError: action.payload}
    default:
      return state;
  }
}

export { errorReducer } 