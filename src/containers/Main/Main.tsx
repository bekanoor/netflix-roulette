import { FilmCard } from '../'
import { getGenreOutput } from '../../utils'
import { moviesType } from '../../models'

interface IProps {
  movies: Array<moviesType>
}

const Main = (props: IProps) => {
  return (
    <main className='movies-wrapper' data-testid='main-test'>
      {props.movies.map((item) => {
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
