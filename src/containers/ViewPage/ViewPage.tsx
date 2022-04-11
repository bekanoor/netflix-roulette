import { Footer, FilmCard } from '..'
import { getGenreOutput } from '../../utils/functions'
import React from 'react'
import { moviesType } from '../../models/interfaces'

interface IProps {
  movieId: number
  data: Array<moviesType>
  onClick: (value: object) => void
}

class ViewPage extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  private movieId: number = this.props.movieId
  private movieGenres: any = this.props.data.find(
    (item) => item.id === this.movieId
  )
  private chosenMovie: any = this.props.data.find(
    (item) => item.id === this.movieId
  )

  sameGenreMovie = (): moviesType[] => {
    return this.props.data.filter((item) => {
      return item.genres.includes(this.movieGenres.genres[0])
    })
  }

  handleChangeMainPage = () => {
    this.props.onClick({
      type: 'SET_MOVIE_PAGE',
      payload: { page: 'main', movieId: 0 },
    })
  }

  render() {
    return (
      <div className='wrapper'>
        <header className='header-view'>
          <div className='header-view__nav'>
            <p className='header__logo'>
              netflix{console.log(this.movieId + ' view id ')}
              <span className='header__logo header__logo-regular'>
                roulette
              </span>
            </p>
            <button
              onClick={this.handleChangeMainPage}
              className='search-button'
            >
              SEARCH
            </button>
          </div>
          <div className='header-view__wrapper'>
            <div className='header-view__image-container'>
              <img
                className='header-view__image'
                src={this.chosenMovie.poster_path}
                alt='image-movie'
              />
            </div>
            <div className='header-view__info'>
              <h1 className='main-title'>
                {this.chosenMovie.title}{' '}
                <button className='header-view__score'>
                  {this.chosenMovie.vote_average}
                </button>
              </h1>
              <p className='header-view__genres primary-text'>
                {this.chosenMovie.genres.join(', ')}
              </p>
              <div className='header-view__movie-details'>
                <p className='header-view__movie-details-text'>
                  {getGenreOutput(this.chosenMovie.genres)}
                </p>
                <p className='header-view__movie-details-text'>
                  {this.chosenMovie.runtime} min
                </p>
              </div>
              <p className='primary-text header-view__description'>
                {this.chosenMovie.overview}
              </p>
            </div>
          </div>
          <div className='header-view__movie-with-same-genre'>
            Films by {this.movieGenres.genres.join(', ')} genre
          </div>
        </header>
        <main className='movies-wrapper'>
          {this.sameGenreMovie().map((item) => {
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
}

export default React.memo(ViewPage)
