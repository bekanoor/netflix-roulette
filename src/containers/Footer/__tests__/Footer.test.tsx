import { render, screen } from '@testing-library/react'
import { Footer } from '../Footer'

describe('test footer', () => {
  test('should render footer correctly', () => {
    const { container } = render(<Footer />)

    expect(container).toMatchSnapshot()
  })

  test('dom elements really exist', () => {
    render(<Footer />)

    const text = screen.getByText(/netflix/i)
    const text2 = screen.getByText(/roulette/i)

    expect(text).toBeInTheDocument
    expect(text2).toBeInTheDocument
  })
})
