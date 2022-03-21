import { FilmCard } from '../FilmCard'

interface IProps {
  movies: Array<object>
}

const Main = (props: IProps) => {
  return (
    <main className='movies-wrapper'>
      {props.movies.map((item: any) => {
        const { cover, filmTitle, releaseDate, genre} = item
        const genreResult =
          genre.length > 2 ? genre.join(', ') : genre.join(' & ')

        return (
          <FilmCard
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
