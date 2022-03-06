import ReactComponent from './components/ReactComponent'
import ReactPureComponent from './components/ReactPureComponent'
import FunctionalComponent from './components/ReactFunctionalComponent'
import FunctionalComponentWithState from './components/ReactFunctionalComponentWithState'

export default function App() {
  return (
    <div>
      <ReactComponent />
      <ReactPureComponent message='World' />
      <FunctionalComponent template='World' />
      <FunctionalComponentWithState />
    </div>
  )
}
