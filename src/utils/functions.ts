const getGenreOutput = (item: string[]) => {
  return item.length > 2 ? item.join(', ') : item.join(' & ')
}

const matchedMovies = (
  searchType: string,
  searchInput: string,
  data: Array<object>,
  filterOption: string = 'rating'
) => {
  let matched: Array<object> = []

  if (searchType === 'title') {
    matched = data.filter((item: any) =>
      item.filmTitle.toLowerCase().startsWith(searchInput)
    )
  }

  if (searchType === 'genre') {
    matched = data.filter((item: any) =>
      item.genre.join(' ').toLowerCase().includes(searchInput)
    )
  }

  const compareByDate = (a: any, b: any) => {
    if (b.releaseDate < a.releaseDate) {
      return -1
    }
    if (b.releaseDate > a.releaseDate) {
      return 1
    }
    return 0
  }

  const compareByRating = (a: any, b: any) => {
    if (b.rating < a.rating) {
      return -1
    }
    if (b.rating > a.rating) {
      return 1
    }
    return 0
  }

  return matched?.sort(
    filterOption === 'rating' ? compareByRating : compareByDate
  )
}

export { getGenreOutput, matchedMovies }
