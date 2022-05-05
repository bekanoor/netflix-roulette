import { setSearchButton, setSearchQuery, setSearchType } from '../../store'
import { Button } from '../../components'
import { useAppDispatch, useAppSelector } from '../../hook'

import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Header = () => {
  const dispatch = useAppDispatch()
  const { searchQuery, searchBy, filterBy } = useAppSelector((state) => state)

  const [, setSearchParams] = useSearchParams()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase()
    dispatch(setSearchQuery(value))
  }

  const handleForm = (event: any) => {
    event.preventDefault()

    dispatch(setSearchButton(true))

    setSearchParams({
      query: searchQuery,
      searchBy: searchBy,
      filterBy: filterBy,
    })
  }

  return (
    <header className='header' data-testid='header-test'>
      <p className='header__logo'>
        netflix
        <span className='header__logo header__logo-regular'>roulette</span>
      </p>
      <h1 className='main-title'>FIND YOUR MOVIE</h1>
      <form onSubmit={handleForm}>
        <input
          className='input-search header__input'
          placeholder='What do you want to watch?'
          name='query'
          onChange={(event) => dispatch(setSearchQuery(event.target.value))}
        ></input>
        <Button
          className='header__search-btn'
          theme='danger'
          size='standard'
          color='white'
          type='submit'
          value='search'
        >
          SEARCH
        </Button>
      </form>
      <div className='header__search-option'>
        <nav data-testid='search-option-test'>
          <ul className='option-list'>
            <li className='option-list__item'>
              <p>search by</p>
            </li>
            <li className='option-list__item'>
              <button
                onClick={() => dispatch(setSearchType('title'))}
                className={
                  searchBy === 'title'
                    ? 'option-list__button option-list__button--active'
                    : 'option-list__button'
                }
              >
                title
              </button>
            </li>
            <li className='option-list__item'>
              <button
                onClick={() => dispatch(setSearchType('genres'))}
                className={
                  searchBy === 'genres'
                    ? 'option-list__button option-list__button--active'
                    : 'option-list__button'
                }
              >
                genre
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export { Header }
