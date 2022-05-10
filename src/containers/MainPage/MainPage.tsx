import { Header, Main, Footer, NoMatches, SortResult } from '../'
import { fetchMovies, fetchMoviesBySearchType } from '../../utils'
import { setData, setFilterType, setSearchButton } from '../../store'
import { useAppDispatch, useAppSelector } from '../../hook'

import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const MainPage = () => {
  const dispatch = useAppDispatch()
  const movies = useAppSelector((state) => state.movies.data)

  const isButton: boolean  = useAppSelector((state) => state.searchParam.isButton)
  const searchQuery: string = useAppSelector((state) => state.searchParam.searchQuery)
  const [searchParams, setSearchParams] = useSearchParams()

  const query = searchParams.get('query')
  const searchType = searchParams.get('searchBy') || 'title'
  const filterBy = searchParams.get('filterBy') || 'vote_average'

  useEffect(() => {
    fetchMovies().then((response) => dispatch(setData(response)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (query === null) {
      fetchMovies().then((response) => dispatch(setData(response)))
    } else {
      fetchMoviesBySearchType(query, searchType, filterBy).then((response) =>
        dispatch(setData(response))
      )
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterBy, searchParams])

  if (isButton && searchQuery.length) {
    return (
      <div className='wrapper'>
        <Header />
        <SortResult movieLength={movies?.length}></SortResult>
        {movies!.length > 0 ? (
          <Main movies={movies}></Main>
        ) : (
          <NoMatches></NoMatches>
        )}
        {<Footer />}
      </div>
    )
  }

  if (isButton) {
    dispatch(setSearchButton(false))
    dispatch(setFilterType('vote_average'))
    setSearchParams({})
  }

  if (!movies.length) return <h1 style={{ color: 'white' }}>Loading...</h1>

  return (
    <div className='wrapper'>
      <Header />
      <Main movies={movies}></Main>
      <Footer></Footer>
    </div>
  )
}

export default React.memo(MainPage)
