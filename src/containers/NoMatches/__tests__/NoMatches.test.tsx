import { NoMatches } from '../NoMatches'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('test no matches component', () => {
  test('should render no matches correctly', () => {
    const { container } = render(<NoMatches />)

    expect(container).toMatchSnapshot()
  })

  test('dom elements really exist', () => {
    render(<NoMatches />)

    expect(screen.getByTestId('no-matches-test')).toBeInTheDocument()
  })
})