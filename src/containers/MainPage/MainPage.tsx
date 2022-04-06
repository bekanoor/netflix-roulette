import React, { useCallback, useMemo } from 'react'
import { useState } from 'react'
import { Header, Main, Footer, NoMatches, SortResult } from '../'
import { matchedMovies } from '../../utils'
import { stateType, moviesType } from '../../models/'

interface IProps {
  data: Array<moviesType>
  onChangePage: (value: stateType) => void
}

const MainPage = (props: IProps) => {
  const [searchInput, setSearchInput] = useState('')
  const [searchType, setSearchType] = useState('title')
  const [searchButton, setSearchButton] = useState('disable')
  const [filterType, setFilterType] = useState('rating')

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
    () => matchedMovies(searchType, searchInput, props.data, filterType),
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
        />
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
      />
      {props.data.length > 1 && (
        <Main movies={props.data} onChangePage={props.onChangePage}></Main>
      )}
      <Footer></Footer>
    </div>
  )
}

export default React.memo(MainPage)
