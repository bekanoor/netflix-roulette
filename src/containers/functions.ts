const getGenreOutput = (item: string[]) => {
  return item.length > 2 ? item.join(', ') : item.join(' & ')
}

export { getGenreOutput }
