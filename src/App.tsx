import { useState } from 'react'
import { MainPage, ViewPage, ErrorBoundary } from './containers/'
import { stateType } from './models/interfaces'

export default function App() {
  const [page, setPage] = useState({
    page: 'main',
    movieId: "0",
  })

  const handleChangePage = (obj: stateType) => {
    setPage(obj)
  }

  return (
    <ErrorBoundary>
      {page.page === 'main' ? (
        <MainPage onChangePage={handleChangePage}></MainPage>
      ) : (
        <ViewPage
          movieId={page.movieId}
          onChangePage={handleChangePage}
        ></ViewPage>
      )}
    </ErrorBoundary>
  )
}
