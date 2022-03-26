import { useState } from 'react'
import { MainPage, ViewPage } from './containers/'

type stateType = {
  page: string;
  movieId: string;
}

export default function App() {
  const [page, setPage] = useState({
    page: 'main',
    movieId: "0",
  })
  
  console.log(page.movieId)

  const handleChangePage = (obj: stateType) => {
    setPage(obj)
  }

  return (
    <>
      {page.page === 'main' ? (
        <MainPage onChangePage={handleChangePage}></MainPage>
      ) : (
        <ViewPage
          movieId={page.movieId}
          onChangePage={handleChangePage}
        ></ViewPage>
      )}
    </>
  )
}
