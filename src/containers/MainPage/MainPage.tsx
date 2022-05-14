import { Header, Main, Footer, NoPageFound, SortResult, NoMatches } from '../'
import {
  startSetMovies,
  setFilterType,
  setSearchStatus,
  startSetMoviesWithParams,
} from '../../store/actions'
import { useAppDispatch, useAppSelector } from '../../hook'
import { MAIN_PAGE_ERROR } from '../../store/constants'

import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const MainPage = () => {
  const dispatch = useAppDispatch()
  const movies = useAppSelector((state) => state.movies.data)
  const mainPageError: string = useAppSelector(
    (state) => state.errors.mainPageError
  )
  
  const searchStatus: boolean = useAppSelector(
    (state) => state.searchParam.searchStatus
  )
  const searchQuery: string = useAppSelector(
    (state) => state.searchParam.searchQuery
  )
  const [searchParams, setSearchParams] = useSearchParams()

  const query = searchParams.get('query')
  const searchType = searchParams.get('searchBy') || 'title'
  const filterBy = searchParams.get('filterBy') || 'vote_average'

  useEffect(() => {
    if (query === null) {
      dispatch(startSetMovies())
    } else {
      dispatch(startSetMoviesWithParams([query, searchType, filterBy]))
    }
  }, [filterBy, searchParams, dispatch, query, searchType])
  
  if (searchStatus && searchQuery.length) {
    return (
      <div className='wrapper'>
        <Header />
        <SortResult movieLength={movies?.length} />
        {movies!.length > 0 ? <Main movies={movies} /> : <NoMatches />}
        {<Footer />}
      </div>
    )
  }
  
  // if (isButton) {
  //   dispatch(setSearchButton(false))
  //   dispatch(setFilterType('vote_average'))
  //   setSearchParams({})
  // }

  // if (mainPageError) {
  //   return <NoPageFound text='404 not movie found' />
  // }
  
  if (!movies.length)
    return <h1 style={{ color: 'white' }}>Loading...</h1>
  
  return (
    <div className='wrapper'>
      <Header />
      <Main movies={movies} />
      <Footer />
    </div>
  )
}

export default React.memo(MainPage)
