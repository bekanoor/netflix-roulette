import { Footer, FilmCard } from '..'
import { findMovie, getGenreOutput } from '../../utils'
import React, { useEffect, useMemo } from 'react'
import { Movie, stateTypes } from '../../models/interfaces'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setData, setLoading, setSearchInput } from '../../store'

const ViewPage = () => {
  const {
    data: { data },
    isLoading,
  } = useSelector((state: stateTypes) => state)
  const movies = data
  const dispatch = useDispatch()
  const { id } = useParams()

  const selectedMovie: Array<Movie> = findMovie(Number(id), movies)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'http://react-cdp-api.herokuapp.com/movies?searchBy=genres'
        const data = await fetch(url)
        const json = await data.json()

        dispatch(setData(json))
        dispatch(setLoading(false))
      } catch (error) {
        console.log(error)
      } finally {
        dispatch(setLoading(false))
      }
    }

    fetchData()
  }, [])

  const handleClick = () => dispatch(setSearchInput(''))
  const hasGenre = (item: string) => selectedMovie[0].genres.includes(item)
  const getMovies = (): Movie[] =>
    movies.filter(({ genres }) => genres.every(hasGenre))

  const memoizedMovies = useMemo(() => getMovies(), [movies])

  if (isLoading) return <h1 style={{ color: 'white' }}>Loading...</h1>

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
              <button onClick={handleClick} className='search-button'>
                SEARCH
              </button>
            </Link>
          </div>
        </div>
        <div className='header-view__wrapper'>
          <div className='header-view__image-container'>
            <img
              className='header-view__image'
              src={selectedMovie[0].poster_path}
              alt='image-movie'
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
        {memoizedMovies.map((item) => {
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
