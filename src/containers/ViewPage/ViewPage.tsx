import { Footer, FilmCard } from '..'
import { getGenreOutput } from '../../utils/functions'
import React from 'react'
import { moviesType, stateTypes } from '../../models/interfaces'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

interface IProps {
  data: Array<moviesType>
}

const ViewPage = (props: IProps) => {
  const movieID = useSelector((state: stateTypes) => state.movieID)
  const chosenMovie: moviesType = props.data.find(
    (item) => item.id === movieID
  )!

  const sameGenreMovie = (): moviesType[] =>
    props.data.filter(item =>
      item.genres.every(element => chosenMovie.genres.includes(element))
    )

  return (
    <div className='wrapper'>
      <header className='header-view'>
        <div className='header-view__nav'>
          <p className='header__logo'>
            netflix
            <span className='header__logo header__logo-regular'>roulette</span>
          </p>
          <Link to='/'>
            <button className='search-button'>SEARCH</button>
          </Link>
        </div>
        <div className='header-view__wrapper'>
          <div className='header-view__image-container'>
            <img
              className='header-view__image'
              src={chosenMovie.poster_path}
              alt='image-movie'
            />
          </div>
          <div className='header-view__info'>
            <h1 className='main-title'>
              {chosenMovie.title}{' '}
              <button className='header-view__score'>
                {chosenMovie.vote_average}
              </button>
            </h1>
            <p className='header-view__genres primary-text'>
              {chosenMovie.genres.join(', ')}
            </p>
            <div className='header-view__movie-details'>
              <p className='header-view__movie-details-text'>
                {getGenreOutput(chosenMovie.genres)}
              </p>
              <p className='header-view__movie-details-text'>
                {chosenMovie.runtime} min
              </p>
            </div>
            <p className='primary-text header-view__description'>
              {chosenMovie.overview}
            </p>
          </div>
        </div>
        <div className='header-view__movie-with-same-genre'>
          Films by {chosenMovie.genres.join(', ')} genre
        </div>
      </header>
      <main className='movies-wrapper'>
        {sameGenreMovie().map((item) => {
          const { poster_path, genres, title, release_date } = item
          return (
            <FilmCard
              key={item.id}
              cover={poster_path}
              genre={getGenreOutput(genres)}
              filmTitle={title}
              releaseDate={release_date.substring(0, 4)}
              id={item.id}
            />
          )
        })}
      </main>
      <Footer />
    </div>
  )
}

export default React.memo(ViewPage)
