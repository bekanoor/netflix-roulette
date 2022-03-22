import { useState } from 'react'
import { MainPage, ViewPage } from './containers/'

export default function App() {
  const [page, setPage] = useState('main');
  
  const handleChangePage = (value: string) => {
    setPage(value);
  }

  return (
    <>
      {page === 'main' ? <MainPage onChangePage={handleChangePage}></MainPage> : <ViewPage></ViewPage>}
    </>
  )
}
