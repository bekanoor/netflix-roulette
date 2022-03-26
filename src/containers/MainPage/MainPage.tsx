import { useEffect, useState } from 'react'
import { Header, Main, Footer } from '../'
import Data from '../../Data/data'

interface IProps {
  onChangePage: (value: any) => void
}

const MainPage = (props: IProps) => {
  const [data, setData] = useState<Array<object>>([])
  const [input, setInput] = useState('')
  const [searchType, setSearchType] = useState('title')

  console.log(input);
  console.log(searchType);

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
      <Header
        inputOnChange={handleInputChange}
        searchTypeOnChange={handleSearchType}
      ></Header>
      {data.length > 1 && (
        <Main movies={data} onChangePage={props.onChangePage}></Main>
      )}
      <Footer></Footer>
    </div>
  )
}

export { MainPage }
