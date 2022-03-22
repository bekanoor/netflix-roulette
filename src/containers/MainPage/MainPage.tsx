import { useEffect, useState } from 'react'
import { Header, Main, Footer } from '../'
import Data from '../../Data/data'

const MainPage = () => {
  const [data, setData] = useState<Array<object>>([])
  const [input, setInput] = useState('')
  const [searchType, setSearchType] = useState('title')

  console.log(searchType)
  
  const handleInputChange = (value: string) => {
    setInput(value)
  }

  const handleSearchType = (value: string) => {
    setSearchType(value)
  }

  useEffect(() => {
    setTimeout(() => {
      const requestData: object[] = Data
      setData(requestData)
    }, 42)
  }, [data])

  return (
    <div className='wrapper'>
      <Header inputOnChange={handleInputChange} searchTypeOnChange={handleSearchType}></Header>
      {data.length > 1 && <Main movies={data}></Main>}
      <Footer></Footer>
    </div>
  )
}

export { MainPage }
