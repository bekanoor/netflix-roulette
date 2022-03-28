import { Button } from '../../components'
import { SearchOption } from '../SearchOption'

interface IProps {
  inputOnChange: (value: string) => void
  typeSwitcher: (value: string) => void
  setSearch: (input: string) => void;
  searchType: string;
  input: string;
}

const Header = (props: IProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.inputOnChange(event.target.value.toLocaleLowerCase())
  }

  const buttonHandler = () => {
    props.setSearch('active');
  }

  return (
    <header className='header'>
      <p className='header__logo'>
        netflix
        <span className='header__logo header__logo-regular'>roulette</span>
      </p>
      <h1 className='main-title'>FIND YOUR MOVIE</h1>
      <div>
        <input
          onChange={handleInputChange}
          className='input-search header__input'
          placeholder='What do you want to watch?'
        ></input>
        <Button
          className='header__search-btn'
          theme='danger'
          size='standard'
          color='white'
          onClick={buttonHandler}
        >
          SEARCH
        </Button>
      </div>
      <div className='header__search-option'>
        <SearchOption
          typeSwitcher={props.typeSwitcher}
        ></SearchOption>
      </div>
    </header>
  )
}

export default Header
