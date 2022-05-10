import { setFilterType } from '../../store'

import { useAppDispatch, useAppSelector } from '../../hook'

interface IProps {
  movieLength?: number
}

const SortResult: React.FC<IProps> = ({movieLength}) => {
  const { filterBy } = useAppSelector(state => state)
  const dispatch = useAppDispatch()
  
  return (
    <div className='sort-result' data-testid='sort-result-test'>
      <p className='sort-result__text'>{movieLength} movies found</p>
      <div>
        <ul className='sort-result__list'>
          <li className='sort-result__text'>Sort by</li>
          <li>
            <button 
            onClick={() => dispatch(setFilterType('release_date'))} 
            className={filterBy === 'release_date' ? 'sort-result__item sort-result--active' : 'sort-result__item'}
            >
              release data
            </button>
          </li>
          <li>
            <button
              onClick={() => dispatch(setFilterType('vote_average'))}
              // className='sort-result__item sort-result--active'
              className={filterBy === 'vote_average' ? 'sort-result__item sort-result--active' : 'sort-result__item'}
            >
              rating
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export { SortResult }
