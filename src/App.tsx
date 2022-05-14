import { ErrorBoundary, MainPage, ViewPage } from './containers/'
import { NoPageFound } from './containers/NoPageFound'

import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

// const MainPage = React.lazy(() => import('./containers/MainPage/MainPage'))
// const ViewPage = React.lazy(() => import('./containers/ViewPage/ViewPage'))

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <React.Suspense
                fallback={() => <h1 style={{ color: 'white' }}>Loading...</h1>}
              >
                <MainPage />
              </React.Suspense>
            }
          />
          <Route
            path='/view-page/:id'
            element={
              <React.Suspense
                fallback={() => <h1 style={{ color: 'white' }}>Loading...</h1>}
              >
                <ViewPage />
              </React.Suspense>
            }
          />
          <Route path='*' element={<NoPageFound text='404 page not found'/>} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
