import { Movie } from 'src/models'
const BASE = 'http://react-cdp-api.herokuapp.com/'

export const getGenreOutput = (item: string[] | undefined) => {
  if (item === undefined) return
  return item.length > 2 ? item.join(', ') : item.join(' & ')
}

export const matchedMovies = (
  searchType: string,
  searchInput: string,
  data: Array<Movie>,
  filterOption: string = 'rating'
) => {
  let matched: Array<object> = []

  if (searchType === 'title') {
    matched = data.filter((item) =>
      item.title.toLowerCase().startsWith(searchInput)
    )
  }

  if (searchType === 'genre') {
    matched = data.filter((item) => {
      return item.genres
        .join(' ')
        .toLowerCase()
        .split(' ')
        .includes(searchInput)
    })
  }

  const compareByDate = (a: any, b: any) => {
    if (+b.release_date.slice(0, 4) < +a.release_date.slice(0, 4)) {
      return -1
    }
    if (+b.release_date.slice(0, 4) > +a.release_date.slice(0, 4)) {
      return 1
    }
    return 0
  }

  const compareByRating = (a: any, b: any) => {
    if (b.vote_average < a.vote_average) {
      return -1
    }
    if (b.vote_average > a.vote_average) {
      return 1
    }
    return 0
  }

  return matched?.sort(
    filterOption === 'rating' ? compareByRating : compareByDate
  )
}

export const findMovie = (movieID: number, movies: Array<Movie>) => {
  const result = movies.find(({ id }) => id === movieID)

  return result ? [result] : []
}

export const fetchDataById = async (id: string) => {
  try {
    const url = `${BASE}movies/${id}`
    const data = await fetch(url)
    const json = await data.json()

    return json
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
}

export const fetchDataByGenre = async (genre: string) => {
  try {
    const url = `
      ${BASE}movies?search=${genre}&searchBy=genres&limit=20
    `
    const data = await fetch(url)
    const json = await data.json()

    return json.data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
}

export const fetchMovies = async () => {
  try {
    const url = `${BASE}movies`
    const data = await fetch(url)
    const json = await data.json()

    return json.data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
}

export const fetchMoviesBySearchType = async (
  query: string,
  searchBy: string,
  sortBy: string = 'vote_average'
) => {
  try {
    const url = `${BASE}movies?sortBy=${sortBy}&sortOrder=desc&search=${query}&searchBy=${searchBy}&limit=15`
    const data = await fetch(url)
    const json = await data.json()

    return json.data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
}
