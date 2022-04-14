import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { FilmCard } from '../'
import { Provider } from 'react-redux'
import { store } from '../../../store'
import { BrowserRouter } from 'react-router-dom'

describe('test film card', () => {
  test('should render film card correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <FilmCard cover='' filmTitle='' releaseDate='2018' genre='' id={0} />
        </Provider>
      </BrowserRouter>
    )

    expect(container).toMatchSnapshot()
  })

  test('dom elements really exist', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <FilmCard cover='' filmTitle='' releaseDate='2018' genre='' id={0} />
        </Provider>
      </BrowserRouter>
    )

    const card = screen.getByTestId('film-card-test')
    expect(card).toBeInTheDocument
  })
})
