import { FilmCard } from '../'
import { getGenreOutput } from '../functions'

interface IProps {
  movies: Array<object>
  onChangePage: (value: object) => void
}

const Main = (props: IProps) => {
  return (
    <main className='movies-wrapper'>
      {props.movies.map((item: any, index: number) => {
        const { cover, filmTitle, releaseDate } = item
        const genreResult = getGenreOutput(item.genre)

        return (
          <FilmCard
            id={index.toString()}
            key={index.toString()}
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
