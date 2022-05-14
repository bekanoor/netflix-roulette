import { Link } from 'react-router-dom'

interface IProps {
  cover: string
  filmTitle: string
  releaseDate: string
  genre: string | undefined
  id: number
}

const FilmCard = (props: IProps) => {
  const { cover, filmTitle, genre, releaseDate, id } = props

  return (
    <Link to={`/view-page/${id}`}>
      <div
        className='film-card'
        id={id.toString()}
        data-testid='film-card-test'
      >
        <div className='film-card__image-container'>
          {/* <img className='film-card__image' src={cover} alt={filmTitle}></img> */}
        </div>
        <div className='film-card__title-container'>
          <p className='film-card__title'>{filmTitle}</p>
          <button className='film-card__release-date'>{releaseDate}</button>
        </div>
        <p className='film-card__genre'>{genre}</p>
      </div>
    </Link>
  )
}

export { FilmCard }
