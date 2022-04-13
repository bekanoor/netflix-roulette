import { FilmCard } from '../'
import { getGenreOutput } from '../../utils'
import { Movie } from '../../models'

interface IProps {
  movies: Array<Movie>
}

const Main = (props: IProps) => {
  const { movies } = props
  return (
    <main className='movies-wrapper' data-testid='main-test'>
      {movies.map((item) => {
        const { poster_path, title, release_date, id, genres } = item
        const genreResult = getGenreOutput(genres)

        return (
          <FilmCard
            id={id}
            key={id}
            cover={poster_path}
            filmTitle={title}
            releaseDate={release_date.substring(0, 4)}
            genre={genreResult}
          ></FilmCard>
        )
      })}
    </main>
  )
}

export default Main
