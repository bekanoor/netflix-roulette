import React, { useMemo } from 'react'
import { Header, Main, Footer, NoMatches, SortResult } from '../'
import { matchedMovies } from '../../utils'
import { Movie, stateTypes } from '../../models/'
import { useDispatch, useSelector } from 'react-redux'

interface IProps {
  data: Array<Movie>
}

const MainPage = (props: IProps) => {
  const searchType = useSelector((state: stateTypes) => state.searchType)
  const filterType = useSelector((state: stateTypes) => state.filterType)
  const searchInput = useSelector((state: stateTypes) => state.searchInput)
  const searchButton = useSelector((state: stateTypes) => state.searchButton)
  const dispatch = useDispatch()

  const computedData = useMemo(
    () => matchedMovies(searchType, searchInput, props.data, filterType),
    [searchType, searchInput, filterType]
  )

  const footer = useMemo(() => <Footer></Footer>, [])

  if (searchButton === 'active' && searchInput.length) {
    return (
      <div className='wrapper'>
        <Header dispatch={dispatch} />
        <SortResult movieLength={computedData?.length}></SortResult>
        {computedData!.length > 0 ? (
          <Main movies={computedData as Array<Movie>}></Main>
        ) : (
          <NoMatches></NoMatches>
        )}
        {footer}
      </div>
    )
  }

  if (searchButton === 'active') {
    dispatch({ type: 'SET_SEARCH_BUTTON', payload: 'disable' })
  }

  return (
    <div className='wrapper'>
      <Header dispatch={dispatch} />
      {props.data.length > 1 && <Main movies={props.data}></Main>}
      <Footer></Footer>
    </div>
  )
}

export default React.memo(MainPage)
