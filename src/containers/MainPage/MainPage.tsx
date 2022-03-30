import React, { useCallback, useMemo } from 'react'
import { useEffect, useState } from 'react'
import { Header, Main, Footer, NoMatches, SortResult } from '../'
import Data from '../../Data/data'
import { matchedMovies } from '../utils/functions'
import { stateType, moviesType } from '../../models/interfaces'

interface IProps {
  onChangePage: (value: stateType) => void
}

const MainPage = (props: IProps) => {
  const [data, setData] = useState<Array<moviesType>>([])
  const [searchInput, setSearchInput] = useState('')
  const [searchType, setSearchType] = useState('title')
  const [searchButton, setSearchButton] = useState('disable')
  const [filterType, setFilterType] = useState('rating')

  useEffect(() => {
    setTimeout(() => {
      const requestData: Array<moviesType> = Data
      setData(requestData)
    }, 42)
  }, [data])

  const handleSetSearch = useCallback(
    (value) => {
      setSearchButton(value)
    },
    [searchInput]
  )

  const handleFilterType = useCallback(
    (value) => {
      setFilterType(value)
    },
    [filterType]
  )

  const handleInputChange = useCallback(
    (value) => {
      setSearchInput(value)
    },
    [searchInput]
  )

  const handleSearchType = useCallback(
    (value) => {
      setSearchType(value)
    },
    [searchType]
  )

  const computedData = useMemo(
    () => matchedMovies(searchType, searchInput, Data, filterType),
    [searchType, searchInput, filterType]
  )

  const footer = useMemo(() => <Footer></Footer>, [])

  if (searchButton === 'active' && searchInput.length) {
    return (
      <div className='wrapper'>
        <Header
          inputOnChange={handleInputChange}
          typeSwitcher={handleSearchType}
          setSearch={handleSetSearch}
          input={searchInput}
          searchType={searchType}
        ></Header>
        <SortResult
          onClick={handleFilterType}
          movieLength={computedData?.length}
        ></SortResult>
        {computedData!.length > 0 ? (
          <Main
            movies={computedData as Array<moviesType>}
            onChangePage={props.onChangePage}
          ></Main>
        ) : (
          <NoMatches></NoMatches>
        )}
        {footer}
      </div>
    )
  }

  if (searchButton === 'active') {
    setSearchButton('disable')
  }

  return (
    <div className='wrapper'>
      <Header
        inputOnChange={handleInputChange}
        typeSwitcher={handleSearchType}
        setSearch={handleSetSearch}
        input={searchInput}
        searchType={searchType}
      ></Header>
      {data.length > 1 && (
        <Main movies={data} onChangePage={props.onChangePage}></Main>
      )}
      <Footer></Footer>
    </div>
  )
}

export default React.memo(MainPage)
