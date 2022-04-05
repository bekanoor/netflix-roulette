import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SearchOption } from './SearchOption'

describe('test search option component', () => {
  test('should render search option correctly', () => {
    const {container} = render(<SearchOption typeSwitcher={()=>{}}/>)

    expect(container).toMatchSnapshot()
  })

  test('dom elements really exist', () => {
    render(<SearchOption typeSwitcher={()=>{}}/>)

    expect(screen.getByTestId('search-option-test')).toBeInTheDocument
  }) 
})