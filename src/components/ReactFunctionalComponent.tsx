interface IProps {
  template: string
}

function FunctionalComponent(props: IProps) {
  return (
    <h1 className='functional-component'>
      Hello react {props.template} and react functional component!
    </h1>
  )
}

export default FunctionalComponent
