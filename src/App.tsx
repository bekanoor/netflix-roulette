import { useEffect, useState } from 'react'
import { MainPage, ViewPage, ErrorBoundary } from './containers/'
import { stateType } from './models/interfaces'

export default function App() {
  const [data, setData] = useState({data: []})

  const [page, setPage] = useState({
    page: 'main',
    movieId: 0,
  })

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://react-cdp-api.herokuapp.com/movies?searchBy=genres'
      const data = await fetch(url);
      const json = await data.json();

      setData(json)
    }

    fetchData().catch(console.error)
  }, [])

  const handleChangePage = (obj: stateType) => {
    setPage(obj)
  }
  console.log(page.movieId + ' app id')
  return (
    <ErrorBoundary>
      {page.page === 'main' ? (
        <MainPage onChangePage={handleChangePage} data={data.data}></MainPage>
      ) : (
        <ViewPage
          movieId={page.movieId}
          onChangePage={handleChangePage}
          data={data.data}
        ></ViewPage>
      )}
    </ErrorBoundary>
  )
}
