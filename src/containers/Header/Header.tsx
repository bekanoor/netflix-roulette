import {Button} from '../../components'

const Header = (props: any) => {
  return (
    <header className='header'>
      <p
        className='header__logo'
      >
        netflixroulette
      </p>
      <h1>FIND YOUR MOVIE</h1>
      <div>
        <input placeholder='What do you want to watch?'></input>
        <Button className='header__search-btn' theme='danger' size='standard' color='white'>SEARCH</Button>
      </div>
      <nav>
        <ul className='header__nav'>
          <li>
            <p>
              search by
            </p>
          </li>
          <li>
            <Button className='header__filter-btn' theme='danger' size='small' color='white'>TITLE</Button>
          </li>
          <li>
            <Button className='header__filter-btn' theme='danger' size='small' color='white'>GENRE</Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
