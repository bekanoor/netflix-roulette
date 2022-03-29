import data from '../../Data/data'
import { Footer, FilmCard } from '../'
import { getGenreOutput } from '../../models/functions'
import React from 'react'
import { stateType } from '../../models/interfaces'

interface IProps {
  onChangePage: (value: stateType) => void
  movieId: string
}

const ViewPage = (props: IProps) => {
  const { movieId } = props
  const parsedId = parseInt(movieId)
  const movieGenres: string[] = data[parsedId].genre

  const sameGenreMovie = data.filter((item) => {
    return item.genre.includes(movieGenres[0])
  })

  const handleChangeMainPage = () => {
    props.onChangePage({ page: 'main', movieId: '0' })
  }

  return (
    <div className='wrapper'>
      <header className='header-view'>
        <div className='header-view__nav'>
          <p className='header__logo'>
            netflix
            <span className='header__logo header__logo-regular'>roulette</span>
          </p>
          <button onClick={handleChangeMainPage} className='search-button'>
            SEARCH
          </button>
        </div>
        <div className='header-view__wrapper'>
          <div className='header-view__image-container'>
            <img
              className='header-view__image'
              src={data[parsedId].cover}
              alt='image-movie'
            />
          </div>
          <div className='header-view__info'>
            <h1 className='main-title'>
              {data[parsedId].filmTitle}{' '}
              <button className='header-view__score'>
                {data[parsedId].rating}
              </button>
            </h1>
            <p className='header-view__genres primary-text'>
              {data[parsedId].genre.join(', ')}
            </p>
            <div className='header-view__movie-details'>
              <p className='header-view__movie-details-text'>
                {getGenreOutput(data[parsedId].genre)}
              </p>
              <p className='header-view__movie-details-text'>
                {data[parsedId].duration}
              </p>
            </div>
            <p className='primary-text header-view__description'>
              {data[parsedId].description}
            </p>
          </div>
        </div>
        <div className='header-view__movie-with-same-genre'>
          Films by {movieGenres.join(', ')} genre
        </div>
      </header>
      <main className='movies-wrapper'>
        {sameGenreMovie.map((item) => {
          const { cover, genre, filmTitle, releaseDate } = item
          return (
            <FilmCard
              key={item.id.toString()}
              cover={cover}
              genre={getGenreOutput(genre)}
              filmTitle={filmTitle}
              releaseDate={releaseDate}
              id={item.id.toString()}
              onChangePage={props.onChangePage}
            />
          )
        })}
      </main>
      <Footer />
    </div>
  )
}

export default React.memo(ViewPage)
