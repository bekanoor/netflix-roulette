import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SortResult } from './SortResult'

describe('test search result component', () => {
  test('should render search result correctly', () => {
    const {container} = render(<SortResult onClick={()=>{}}/>)

    expect(container).toMatchSnapshot()
  })

  test('dom elements really exist', () => {
    render(<SortResult onClick={()=>{}}/>)

    expect(screen.getByTestId('sort-result-test')).toBeInTheDocument
  }) 
})