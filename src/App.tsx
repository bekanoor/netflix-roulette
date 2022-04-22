import { ErrorBoundary } from './containers/'
import { NoPageFound } from './containers/NoPageFound'

import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

const MainPage = React.lazy(() => import('./containers/MainPage/MainPage'))
const ViewPage = React.lazy(() => import('./containers/ViewPage/ViewPage'))

export default function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={() => <h1 style={{color: 'white'}}>Loading...</h1>}>
        <ErrorBoundary>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/view-page/:id' element={<ViewPage />} />
            <Route path='*' element={<NoPageFound />} />
          </Routes>
        </ErrorBoundary>
      </React.Suspense>
    </BrowserRouter>

  )
}
