interface IProps {
  cover: string
  filmTitle: string
  releaseDate: string
  genre: string
}

const FilmCard = (props: IProps) => {
  return (
    <div className='film-card'>
      <div className='film-card__image-container'>
        <img className='film-card__image' src={props.cover} alt='image'></img>
      </div>
      <div className='film-card__title-container'>
        <p className='film-card__title'>{props.filmTitle}</p>
        <button className='film-card__release-date'>{props.releaseDate}</button>
      </div>
      <p className="film-card__genre">
        {props.genre}
      </p>
    </div>
  )
}

export { FilmCard }
