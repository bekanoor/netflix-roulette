import App from './App'
import { store } from './store'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import './style.scss'

const rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
