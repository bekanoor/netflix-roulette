import { setSearchButton, setSearchInput } from '../../store'
import { Button } from '../../components'
import { SearchOption } from '../SearchOption'

import React from 'react'

interface IProps {
  dispatch: (value: object) => void
}

class Header extends React.Component<IProps> {
  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.dispatch(setSearchInput(event.target.value.toLocaleLowerCase()))
  }

  buttonHandler = () => {
    this.props.dispatch(setSearchButton('active'))
  }

  render() {
    return (
      <header className='header' data-testid='header-test'>
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
          <SearchOption></SearchOption>
        </div>
      </header>
    )
  }
}

export { Header }
