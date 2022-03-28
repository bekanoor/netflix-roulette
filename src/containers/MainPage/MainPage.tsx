import { useEffect, useState } from 'react'
import { Header, Main, Footer, NoMatches } from '../'
import Data from '../../Data/data'

type stateType = {
  page: string
  movieId: string
}

interface IProps {
  onChangePage: (value: stateType) => void
}

const MainPage = (props: IProps) => {
  const [data, setData] = useState<Array<object>>([])
  const [searchInput, setSearchInput] = useState('')
  const [searchType, setSearchType] = useState('title')
  const [searchButton, setSearchButton] = useState('disable')

  useEffect(() => {
    setTimeout(() => {
      const requestData: object[] = Data
      setData(requestData)
    }, 42)
  }, [data])

  const matchedMovies = () => {
    let matched

    if (searchType === 'title') {
      matched = data.filter((item: any) =>
        item.filmTitle.toLowerCase().startsWith(searchInput)
      )
    }

    if (searchType === 'genre') {
      matched = data.filter((item: any) =>
        item.genre.join(' ').toLowerCase().includes(searchInput)
      )
    }

    return matched
  }

  const handleSetSearch = (value: string) => {
    setSearchButton(value)
  }

  const handleInputChange = (value: string) => {
    setSearchInput(value)
  }

  const handleSearchType = (value: string) => {
    setSearchType(value)
  }

  const computedData = matchedMovies()

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
        {computedData!.length > 0 ? (
          <Main
            movies={computedData as Array<object>}
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

export { MainPage }
