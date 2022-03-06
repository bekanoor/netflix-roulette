import React, { Props } from 'react'

interface IProse {
  message: string
}

interface IState {
  template: string
}

class PureComponent extends React.PureComponent<IProse, IState> {
  constructor(props: IProse) {
    super(props)
    this.state = { template: 'Hello' }
  }

  render() {
    return (
      <h1 className='pure-component'>
        {this.state.template} react {this.props.message} and react pure
        component!
      </h1>
    )
  }
}

export default PureComponent
