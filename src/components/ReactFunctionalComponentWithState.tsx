import React, { useCallback, useState } from 'react'

const FunctionalComponentWithState: React.FC = () => {
  const [greeting, setGreeting] = useState('World')
  const memoizedSwitcher = useCallback(() => {
    if (greeting === 'World') {
      setGreeting('State')
    } else {
      setGreeting('World')
    }
  }, [greeting])

  return (
    <>
      <h1 className='functional-component-state'>
        Hello react {greeting} and react functional component!
      </h1>
      <button onClick={memoizedSwitcher}>Click-ck</button>
    </>
  )
}

export default FunctionalComponentWithState
