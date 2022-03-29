import React from 'react'
import { stateType } from '../../models/interfaces'

interface IProps {
  cover: string
  filmTitle: string
  releaseDate: number
  genre: string
  id: string
  onChangePage: (value: stateType) => void
}

const FilmCard = (props: IProps) => {
  const { onChangePage, cover, filmTitle, genre, releaseDate, id } = props

  const handelChangePage = (event: React.MouseEvent<HTMLDivElement>) => {
    const id = event.currentTarget.id
    if (onChangePage) onChangePage({ page: 'view', movieId: id })
  }

  return (
    <div className='film-card' onClick={handelChangePage} id={id}>
      <div className='film-card__image-container'>
        <img className='film-card__image' src={cover} alt='image'></img>
      </div>
      <div className='film-card__title-container'>
        <p className='film-card__title'>{filmTitle}</p>
        <button className='film-card__release-date'>{releaseDate}</button>
      </div>
      <p className='film-card__genre'>{genre}</p>
    </div>
  )
}

export { FilmCard }
