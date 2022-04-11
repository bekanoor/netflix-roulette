import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { FilmCard } from '../'
import { Provider } from 'react-redux'
import { store } from '../../../store'

describe('test film card', () => {
  test('should render film card correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <FilmCard cover='' filmTitle='' releaseDate='2018' genre='' id={0} />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })

  test('dom elements really exist', () => {
    render(
      <Provider store={store}>
        <FilmCard cover='' filmTitle='' releaseDate='2018' genre='' id={0} />
      </Provider>
    )

    const card = screen.getByTestId('film-card-test')
    expect(card).toBeInTheDocument
  })
})
