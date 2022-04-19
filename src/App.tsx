import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainPage, ViewPage, ErrorBoundary } from './containers/'
import { stateTypes } from './models/interfaces'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { NoPageFound } from './containers/NoPageFound'

export default function App() {
  const dispatch = useDispatch()

  const data = useSelector((state: stateTypes) => state.data)

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

  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage data={data.data} />} />
            <Route path='/view-page/:id' element={<ViewPage />} />
            <Route path='*' element={<NoPageFound />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  )
}
