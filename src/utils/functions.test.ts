import { getGenreOutput, matchedMovies } from './'

const data = [
  {
    rating: 4.3,
    filmTitle: 'pu Bohemian Rhapsody',
    genre: ['Drama', 'Biography', 'Music'],
    releaseDate: 2018,
  },
  {
    rating: 4.5,
    filmTitle: 'Pulp Fiction',
    genre: ['Action', 'Adventure'],
    releaseDate: 1994,
  },
]

describe('test util', () => {
  test('test genre behave', () => {
    const case1 = ['Action']
    const case2 = ['Action', 'Music']
    const case3 = ['Action', 'Music', 'Adventure']

    expect(getGenreOutput(case1)).toBe('Action')
    expect(getGenreOutput(case2)).toBe('Action & Music')
    expect(getGenreOutput(case3)).toBe('Action, Music, Adventure')
  })

  test('test matched movie func by title', () => {
    const rightResult: any = [
      {
        rating: 4.5,
        filmTitle: 'Pulp Fiction',
        genre: ['Action', 'Adventure'],
        releaseDate: 1994,
      },
      {
        rating: 4.3,
        filmTitle: 'pu Bohemian Rhapsody',
        genre: ['Drama', 'Biography', 'Music'],
        releaseDate: 2018,
      }
    ]

    const wrongResult = [
      {
        rating: 4.3,
        filmTitle: 'pu Bohemian Rhapsody',
        genre: ['Drama', 'Biography', 'Music'],
        releaseDate: 2018,
      },
      {
        rating: 4.5,
        filmTitle: 'Pulp Fiction',
        genre: ['Action', 'Adventure'],
        releaseDate: 1994,
      }
    ]

    expect(matchedMovies('title', 'pu', data, 'rating')).toEqual(rightResult)
    expect(matchedMovies('title', 'pu', data, 'rating')).not.toEqual(wrongResult)
  })

  // test('test matched movie func by genre', () => {
  //   const searchTypeG = 'genre'

  //   expect(matchedMovies(searchTypeG,)).toBe()
  // })
})
