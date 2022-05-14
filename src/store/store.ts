import { rootSaga } from './sagas'
import { searchParamReducer, moviesReducer, errorReducer } from './reducers/'

import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {} from '@redux-devtools/extension'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const rootReducer = combineReducers({ 
  searchParam: searchParamReducer,
  movies: moviesReducer,
  errors: errorReducer
})

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export { store }
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
