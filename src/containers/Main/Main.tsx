import { Props } from 'react'
import { FilmCard } from '../'
import { getGenreOutput } from '../functions'

type stateType = {
  page: string
  movieId: string
}

interface IProps {
  movies: Array<object>
  onChangePage: (value: stateType) => void
}

const Main = (props: IProps) => {
  return (
    <main className='movies-wrapper'>
      {props.movies.map((item: any) => {
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
