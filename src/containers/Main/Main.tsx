import { FilmCard } from '../'
import { getGenreOutput } from '../../utils'
import { Movie } from '../../models'

interface IProps {
  movies: Array<Movie>
}

const Main: React.FC<IProps> = ({ movies }) => {
  return (
    <main className='movies-wrapper' data-testid='main-test'>
      {movies.map(({ poster_path, title, release_date, id, genres }) => {
        return (
          <FilmCard
            id={id}
            key={id}
            cover={poster_path}
            filmTitle={title}
            releaseDate={release_date.substring(0, 4)}
            genre={getGenreOutput(genres)}
          ></FilmCard>
        )
      })}
    </main>
  )
}

export default Main
