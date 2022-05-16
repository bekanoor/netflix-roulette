import {
  setFilterType,
  setSearchStatus,
  setSearchQuery,
  setSearchType,
  setMainPageError,
  resetMainPageError,
} from '../../store'
import { Button } from '../../components'
import { useAppDispatch, useAppSelector } from '../../hook'

import { useSearchParams } from 'react-router-dom'

const Header = () => {
  const dispatch = useAppDispatch()
  const searchQuery = useAppSelector(
    (state) => state.searchParam.searchQuery
  )
  const searchBy = useAppSelector((state) => state.searchParam.searchBy)
  const filterBy = useAppSelector((state) => state.searchParam.filterBy)

  const [searchParams, setSearchParams] = useSearchParams()

  const handlerForm = (event: any) => {
    event.preventDefault()

    if(searchQuery.length > 1) {
      dispatch(setSearchStatus(true))

      setSearchParams({
        query: searchQuery,
        searchBy: searchBy,
        filterBy: filterBy,
      })
    }
  }

  const handlerInput = (event: any) => {
    dispatch(setSearchQuery(event.target.value))

    if (searchQuery.length === 1) {
      dispatch(setSearchStatus(false))
      dispatch(setFilterType('vote_average'))
      dispatch(resetMainPageError())
      setSearchParams({})
    }
  }

  return (
    <header className='header' data-testid='header-test'>
      <p className='header__logo'>
        netflix
        <span className='header__logo header__logo-regular'>roulette</span>
      </p>
      <h1 className='main-title'>FIND YOUR MOVIE</h1>
      <form onSubmit={handlerForm}>
        <input
          className='input-search header__input'
          placeholder='What do you want to watch?'
          name='query'
          onChange={handlerInput}
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
