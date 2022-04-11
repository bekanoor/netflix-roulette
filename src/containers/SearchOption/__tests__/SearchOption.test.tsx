import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SearchOption } from '../'
import { Provider } from 'react-redux'
import { store } from '../../../store'

describe('test search option component', () => {
  test('should render search option correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <SearchOption />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })

  test('dom elements really exist', () => {
    render(
      <Provider store={store}>
        <SearchOption />
      </Provider>
    )

    expect(screen.getByTestId('search-option-test')).toBeInTheDocument
  })
})
