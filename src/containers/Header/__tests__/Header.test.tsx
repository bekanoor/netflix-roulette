import { render } from '@testing-library/react'
import { Header } from '../Header'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { store } from '../../../store'

describe('test header', () => {
  const mockF = (value: object): void => {}

  test('should render header correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Header dispatch={mockF} />
      </Provider>
    )
    expect(container).toMatchSnapshot()
  })

  test('dom elements really exist', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Header dispatch={mockF} />
      </Provider>
    )

    expect(getByTestId('header-test')).toBeInTheDocument()
  })
})
