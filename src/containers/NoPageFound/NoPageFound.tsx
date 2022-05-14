import { useAppDispatch } from '../../hook'
import { resetMainPageError } from '../../store/actions/actions'

import { Link } from 'react-router-dom'
type Props = {
  text: string
}
const NoPageFound: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();

  const handler = () => {
    dispatch(resetMainPageError())
  }

  return (
    <div className='empty-result' data-testid='no-matches-test'>
      <Link to='/' onClick={handler}>
        <h1 className='main-title' style={{ textAlign: 'center', marginTop: '50px' }}>
          {props.text.toUpperCase()}
        </h1>
      </Link>
    </div>
  )
}

export { NoPageFound }
