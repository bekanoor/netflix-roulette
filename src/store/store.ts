import { searchParamReducer } from './searchParamReducer'
import { moviesReducer } from './moviesReducer'

import { createStore, compose, combineReducers } from 'redux'
import {} from '@redux-devtools/extension'


const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const rootReducer = combineReducers({
  searchParam: searchParamReducer,
  movies: moviesReducer
})

const store = createStore(rootReducer, composeEnhancers())


export { store }
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
