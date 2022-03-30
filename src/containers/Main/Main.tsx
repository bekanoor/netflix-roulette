import { FilmCard } from '../'
import { getGenreOutput } from '../utils/functions'
import { stateType, moviesType } from '../../models/interfaces'

interface IProps {
  movies: Array<moviesType>
  onChangePage: (value: stateType) => void
}

const Main = (props: IProps) => {
  return (
    <main className='movies-wrapper'>
      {props.movies.map((item) => {
        const { cover, filmTitle, releaseDate, id, genre } = item
        const genreResult = getGenreOutput(genre)

        return (
          <FilmCard
            id={id.toString()}
            key={id}
            onChangePage={props.onChangePage}
            cover={cover}
            filmTitle={filmTitle}
            releaseDate={releaseDate}
            genre={genreResult}
          ></FilmCard>
        )
      })}
    </main>
  )
}

export default Main
