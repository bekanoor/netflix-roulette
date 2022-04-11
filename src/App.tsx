import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainPage, ViewPage, ErrorBoundary } from './containers/'
import { stateTypes } from './models/interfaces'

export default function App() {
  const dispatch = useDispatch()

  const data = useSelector((state: stateTypes) => state.data)
  const page = useSelector((state: stateTypes) => state.page)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'http://react-cdp-api.herokuapp.com/movies?searchBy=genres'
        const data = await fetch(url)
        const json = await data.json()

        dispatch({ type: 'GET_DATA', payload: json })
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  const handleChangePage = (obj: object) => {
    dispatch(obj)
  }
  
  if(page.page === 'view') {
    return (
      <ErrorBoundary>
        <ViewPage
          onClick={handleChangePage}
          movieId={page.movieId}
          data={data.data}
        ></ViewPage>
      </ErrorBoundary>
    )
  }

  return (
    <ErrorBoundary>
      <MainPage data={data.data}></MainPage>
    </ErrorBoundary>
  )
}
