import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SortResult } from '../'
import { Provider } from 'react-redux'
import { store } from '../../../store'

describe('test search result component', () => {
  test('should render search result correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <SortResult />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })

  test('dom elements really exist', () => {
    render(
      <Provider store={store}>
        <SortResult />
      </Provider>
    )

    expect(screen.getByTestId('sort-result-test')).toBeInTheDocument
  })
})
