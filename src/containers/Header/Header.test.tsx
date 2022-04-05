import { render } from '@testing-library/react'
import { Header } from './Header'
import '@testing-library/jest-dom'

describe('test header', () => {
  const mockF = (value: string): void => {}

  test('should render header correctly', () => {
    const { container } = render(
      <Header inputOnChange={mockF} typeSwitcher={mockF} setSearch={mockF} />
    )
    expect(container).toMatchSnapshot()
  })

  test('dom elements really exist', () => {
    const { getByTestId } = render(
      <Header inputOnChange={mockF} typeSwitcher={mockF} setSearch={mockF} />
    )

    expect(getByTestId('header-test')).toBeInTheDocument()
  })
})
