import React, { useEffect, useMemo } from 'react'
import { Header, Main, Footer, NoMatches, SortResult } from '../'
import { matchedMovies } from '../../utils'
import { Movie, stateTypes } from '../../models/'
import { useDispatch, useSelector } from 'react-redux'
import { setData, setLoading, setSearchButton } from '../../store'

const MainPage = () => {
  const dispatch = useDispatch()

  const {
    data: { data },
    isLoading,
  } = useSelector((state: stateTypes) => state)

  const movies = data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'http://react-cdp-api.herokuapp.com/movies?searchBy=genres'
        const data = await fetch(url)
        const json = await data.json()

        dispatch(setData(json))
        dispatch(setLoading(false))
      } catch (error) {
        console.log(error)
      } finally {
        dispatch(setLoading(false))
      }
    }

    fetchData()
  }, [])

  const searchType = useSelector((state: stateTypes) => state.searchType)
  const filterType = useSelector((state: stateTypes) => state.filterType)
  const searchInput = useSelector((state: stateTypes) => state.searchInput)
  const searchButton = useSelector((state: stateTypes) => state.searchButton)

  const computedData = useMemo(
    () => matchedMovies(searchType, searchInput, movies, filterType),
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
    dispatch(setSearchButton('disable'))
  }

  if (isLoading) return <h1 style={{ color: 'white' }}>Loading...</h1>

  return (
    <div className='wrapper'>
      <Header dispatch={dispatch} />
      <Main movies={movies}></Main>
      <Footer></Footer>
    </div>
  )
}

export default React.memo(MainPage)
