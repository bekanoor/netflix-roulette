import { FilmCard, Footer } from '..'
import { getGenreOutput } from '../../utils'

import {  stateTypes } from '../../models/interfaces'
import { setSearchInput, setSelectedMovie,setSameGenreMovies } from '../../store'

import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const ViewPage = () => {
  const {
    selectedMovie, 
    sameGenreMovies,
  } = useSelector((state: stateTypes) => state)

  const dispatch = useDispatch()
  const { id } = useParams()

  const fetchData = async () => {
    try {
      const urlID = `http://react-cdp-api.herokuapp.com/movies/${id}`
      const dataID = await fetch(urlID)
      const jsonID = await dataID.json()

      const genre = jsonID.genres[0];
      const urlGenres = `http://react-cdp-api.herokuapp.com/movies?search=${genre}&searchBy=genres&limit=20` 
      
      const dataGenres = await fetch(urlGenres)
      console.log(id);
      
      const jsonGenres = await dataGenres.json()

      dispatch(setSelectedMovie([jsonID]))
      dispatch(setSameGenreMovies(jsonGenres.data))
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    } 
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    return () => {
      dispatch(setSelectedMovie([]))
      dispatch(setSameGenreMovies([]))
    }
  }, [])

  if (!selectedMovie.length && !sameGenreMovies.length) return <h1 style={{ color: 'white' }}>Loading...</h1>

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
              <button className='search-button'>
                SEARCH
              </button>
            </Link>
          </div>
        </div>
        <div className='header-view__wrapper'>
          <div className='header-view__image-container'>
            <img
              className='header-view__image'
              // src={selectedMovie[0].poster_path}
              alt='movie-poster-has-been-here'
            />
          </div>
          <div className='header-view__info'>
            <h1 className='main-title'>
              {selectedMovie[0].title}{' '}
              <button className='header-view__score'>
                {selectedMovie[0].vote_average}
              </button>
            </h1>
            <p className='header-view__genres primary-text'>
              {selectedMovie[0].genres.join(', ')}
            </p>
            <div className='header-view__movie-details'>
              <p className='header-view__movie-details-text'>
                {getGenreOutput(selectedMovie[0].genres)}
              </p>
              <p className='header-view__movie-details-text'>
                {selectedMovie[0].runtime} min
              </p>
            </div>
            <p className='primary-text header-view__description'>
              {selectedMovie[0].overview}
            </p>
          </div>
        </div>
        <div className='header-view__movie-with-same-genre'>
          Films by {selectedMovie[0].genres.join(', ')} genre
        </div>
      </header>
      <main className='movies-wrapper'>
        {sameGenreMovies.map((item) => {
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
