import data from '../../Data/data'
import { Footer, FilmCard } from '..'
import { getGenreOutput } from '../../utils/functions'
import React from 'react'
import { stateType, moviesType } from '../../models/interfaces'

interface IProps {
  onChangePage: (value: stateType) => void
  movieId: string
}

class ViewPage extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  private movieId: string = this.props.movieId
  private parsedId: number = parseInt(this.movieId)
  private movieGenres: string[] = data[this.parsedId].genre

  sameGenreMovie = (): moviesType[] => {
    return data.filter((item) => {
      return item.genre.includes(this.movieGenres[0])
    })
  }

  handleChangeMainPage = () => {
    this.props.onChangePage({ page: 'main', movieId: '0' })
  }

  render() {
    return (
      <div className='wrapper'>
        <header className='header-view'>
          <div className='header-view__nav'>
            <p className='header__logo'>
              netflix
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
                src={data[this.parsedId].cover}
                alt='image-movie'
              />
            </div>
            <div className='header-view__info'>
              <h1 className='main-title'>
                {data[this.parsedId].filmTitle}{' '}
                <button className='header-view__score'>
                  {data[this.parsedId].rating}
                </button>
              </h1>
              <p className='header-view__genres primary-text'>
                {data[this.parsedId].genre.join(', ')}
              </p>
              <div className='header-view__movie-details'>
                <p className='header-view__movie-details-text'>
                  {getGenreOutput(data[this.parsedId].genre)}
                </p>
                <p className='header-view__movie-details-text'>
                  {data[this.parsedId].duration}
                </p>
              </div>
              <p className='primary-text header-view__description'>
                {data[this.parsedId].description}
              </p>
            </div>
          </div>
          <div className='header-view__movie-with-same-genre'>
            Films by {this.movieGenres.join(', ')} genre
          </div>
        </header>
        <main className='movies-wrapper'>
          {this.sameGenreMovie().map((item) => {
            const { cover, genre, filmTitle, releaseDate } = item
            return (
              <FilmCard
                key={item.id.toString()}
                cover={cover}
                genre={getGenreOutput(genre)}
                filmTitle={filmTitle}
                releaseDate={releaseDate}
                id={item.id.toString()}
                onChangePage={this.props.onChangePage}
              />
            )
          })}
        </main>
        <Footer />
      </div>
    )
  }
}

export { ViewPage }
