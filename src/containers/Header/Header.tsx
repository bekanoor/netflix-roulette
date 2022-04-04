import React from 'react'
import { Button } from '../../components'
import { SearchOption } from '../SearchOption'

interface IProps {
  inputOnChange: (value: string) => void
  typeSwitcher: (value: string) => void
  setSearch: (input: string) => void;
  searchType: string;
  input: string;
}

class Header extends React.Component<IProps>{
  constructor(props: IProps) {
    super(props)
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.inputOnChange(event.target.value.toLocaleLowerCase())
  }

  buttonHandler = () => {
    this.props.setSearch('active');
  }

  render() {
    return (
      <header className='header'>
      <p className='header__logo'>
        netflix
        <span className='header__logo header__logo-regular'>roulette</span>
      </p>
      <h1 className='main-title'>FIND YOUR MOVIE</h1>
      <div>
        <input
          onChange={this.handleInputChange}
          className='input-search header__input'
          placeholder='What do you want to watch?'
        ></input>
        <Button
          className='header__search-btn'
          theme='danger'
          size='standard'
          color='white'
          onClick={this.buttonHandler}
        >
          SEARCH
        </Button>
      </div>
      <div className='header__search-option'>
        <SearchOption
          typeSwitcher={this.props.typeSwitcher}
        ></SearchOption>
      </div>
    </header>
      )
  }
}

export { Header }
