import { reducer } from './reducer'

import { createStore } from 'redux'


const store = createStore(reducer)

export { store }

export type RootState = ReturnType<typeof store.getState >
export type AppDispatch = typeof store.dispatch  
