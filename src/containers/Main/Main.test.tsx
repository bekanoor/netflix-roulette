import { render } from '@testing-library/react'
import { moviesType, stateType } from 'src/models';
import Main from './Main'
import '@testing-library/jest-dom'

const data:Array<moviesType> = 
  [
    { 
      "vote_average": 4.7,
      "title": "Kill Bill: Vol 2",
      "genres": ["Oscar winning Movie"],
      "release_date": "2004-12-12",
      "poster_path": '../assets/images/Kill-Bill-Vol-2.jpg',
      "runtime": 132,
      "id": 2,
      "overview": "The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle."
    }
  ]

const mockF = (value: stateType) => {};

describe('test main', () => {
  test('should render main correctly', () => {
    const {container} = render(<Main movies={data} onChangePage={mockF}/>)
    expect(container).toMatchSnapshot()
  })

  test('dom elements really exist', () => {
    const {rerender, getByTestId} = render(<Main movies={data} onChangePage={mockF}/>)
    expect(getByTestId('main-test')).toBeInTheDocument()
  })

})