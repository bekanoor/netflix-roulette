import { FilmCard } from '../FilmCard'

interface IProps {
  movies: Array<object>;
}

const getGenreLength = (item: string[]) =>
  item.length > 2 ? item.join(', ') : item.join(' & ')

const Main = (props: IProps) => {
  return (
    <main className='movies-wrapper'>
      {props.movies.map((item: any) => {
        const { cover, filmTitle, releaseDate } = item
        const genreResult = getGenreLength(item.genre)

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
