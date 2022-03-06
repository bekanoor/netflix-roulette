import React from 'react'

class ReactComponent extends React.Component {
  state = { template: 'World' }

  render() {
    return (
      <h1 className='react-component'>
        Hello react {this.state.template} and react component!
      </h1>
    )
  }
}

export default ReactComponent
