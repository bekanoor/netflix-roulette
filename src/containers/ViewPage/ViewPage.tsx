import { FilmCard, Footer } from '..'
import { NoPageFound } from '../NoPageFound'
import { fetchDataById, getGenreOutput, fetchDataByGenre } from '../../utils'
import { useAppDispatch, useAppSelector } from '../../hook'

import { Movie } from '../../models/interfaces'
import { setNewTabMovie, setSelectedMovie, startSetSameGenreMovies } from '../../store'

import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const ViewPage = () => {
  const sameGenreMovies: Array<Movie> = useAppSelector(
    (state) => state.movies.sameGenreMovies
  )
  const selectedMovie: Array<Movie> = useAppSelector(
    (state) => state.movies.selectedMovie
  )
  const data: Array<Movie> = useAppSelector((state) => state.movies.data)
  const dispatch = useAppDispatch()
    
  const { id = 'no-page-found'} = useParams()

  const [chosenMovie] = selectedMovie
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cachedID = [data.find((item: Movie) => item.id === +id)] as Array<Movie>
  const [movie] = cachedID

  useEffect(() => {
    if (movie) {
      const [first] = cachedID
      const [genre] = first.genres

      dispatch(setSelectedMovie(cachedID))
      dispatch(startSetSameGenreMovies(genre))
    } else {
      dispatch(setNewTabMovie(id))
    }
  }, [id])

  if (!selectedMovie.length && !sameGenreMovies.length)
    return <h1 style={{ color: 'white' }}>Loading...</h1>

  return (
    <div className='wrapper'>
      <header className='header-view'>
        <div className='header-view__nav'>
          <p className='header__logo'>
            netflix
            <span className='header__logo header__logo-regular'>roulette</span>
          </p>
          <div>
            <Link to='/'>
              <button className='search-button'>SEARCH</button>
            </Link>
          </div>
        </div>
        <div className='header-view__wrapper'>
          <div className='header-view__image-container'>
            <img
              className='header-view__image'
              src={chosenMovie.poster_path}
              alt='movie-poster-has-been-here'
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
        {sameGenreMovies.map(
          ({ poster_path, genres, title, release_date, id }) => {
            return (
              <FilmCard
                key={id}
                cover={poster_path}
                genre={getGenreOutput(genres)}
                filmTitle={title}
                releaseDate={release_date.substring(0, 4)}
                id={id}
              />
            )
          }
        )}
      </main>
      <Footer />
    </div>
  )
}

export default React.memo(ViewPage)
