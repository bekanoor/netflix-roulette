import { Link } from 'react-router-dom'

const NoPageFound = () => {
  return (
    <div className='empty-result' data-testid='no-matches-test'>
      <Link to='/'>
        <h1 className='main-title' style={{textAlign: 'center'}}>404</h1>
        <h1 className='main-title'>PAGE NOT FOUND</h1>
      </Link>
    </div>
  )
}

export { NoPageFound }
