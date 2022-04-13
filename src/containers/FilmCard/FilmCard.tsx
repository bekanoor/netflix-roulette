import React from 'react'
import { useDispatch } from 'react-redux'
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
  const dispatch = useDispatch()

  const handelChangePage = (event: React.MouseEvent<HTMLDivElement>) => {
    const movieID = +event.currentTarget.id

    dispatch({ type: 'SET_MOVIE_PAGE', payload: movieID })
  }

  return (
    <Link to={`/view-page/${id}-${filmTitle}`}>
      <div
        className='film-card'
        onClick={handelChangePage}
        id={id.toString()}
        data-testid='film-card-test'
      >
        <div className='film-card__image-container'>
          <img className='film-card__image' src={cover} alt='image'></img>
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
