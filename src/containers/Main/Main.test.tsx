import { render } from '@testing-library/react'
import { stateType } from 'src/models';
import Main from './Main'
import '@testing-library/jest-dom'

const data = [
  {
    "rating": 4.7,
    "filmTitle": "Kill Bill: Vol 2",
    "genre": ["Oscar winning Movie"],
    "releaseDate": 2004,
    "cover": '../assets/images/Kill-Bill-Vol-2.jpg',
    "duration": "134 min",
    "id": 2,
    "description": "The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle."
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