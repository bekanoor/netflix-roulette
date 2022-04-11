import { render } from 'react-dom'
import './style.scss'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'

const rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
