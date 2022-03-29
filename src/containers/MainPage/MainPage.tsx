import React from 'react'
import { useEffect, useState } from 'react'
import { Header, Main, Footer, NoMatches, SortResult } from '../'
import Data from '../../Data/data'
import { matchedMovies } from '../../models/functions'
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

  const handleSetSearch = (value: string) => {
    setSearchButton(value)
  }

  const handleFilterType = (value: string) => {
    setFilterType(value)
  }

  const handleInputChange = (value: string) => {
    setSearchInput(value)
  }

  const handleSearchType = (value: string) => {
    setSearchType(value)
  }

  const computedData = matchedMovies(searchType, searchInput, Data, filterType)

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
        <Footer></Footer>
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
