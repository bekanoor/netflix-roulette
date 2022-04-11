import { moviesType } from 'src/models'
import { getGenreOutput, matchedMovies } from '..'

const data:Array<moviesType> = 
  [
    { 
      "vote_average": 3.7,
      "title": "Kill Bill: Vol 3",
      "genres": ["Oscar winning Movie"],
      "release_date": "2005-12-12",
      "poster_path": '../assets/images/Kill-Bill-Vol-2.jpg',
      "runtime": 132,
      "id": 3,
      "overview": "The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle."
    },
    { 
      "vote_average": 4.7,
      "title": "Kill Bill: Vol 2",
      "genres": ["Oscar winning Movie"],
      "release_date": "2004-12-12",
      "poster_path": '../assets/images/Kill-Bill-Vol-2.jpg',
      "runtime": 132,
      "id": 2,
      "overview": "The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle."
    }
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

  test('test matched movie func by title and rating', () => {
    const rightResult = [
      { 
        "vote_average": 4.7,
        "title": "Kill Bill: Vol 2",
        "genres": ["Oscar winning Movie"],
        "release_date": "2004-12-12",
        "poster_path": '../assets/images/Kill-Bill-Vol-2.jpg',
        "runtime": 132,
        "id": 2,
        "overview": "The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle."
      },
      { 
        "vote_average": 3.7,
        "title": "Kill Bill: Vol 3",
        "genres": ["Oscar winning Movie"],
        "release_date": "2005-12-12",
        "poster_path": '../assets/images/Kill-Bill-Vol-2.jpg',
        "runtime": 132,
        "id": 3,
        "overview": "The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle."
      }
    ]

    const wrongResult = [
      { 
        "vote_average": 3.7,
        "title": "Kill Bill: Vol 3",
        "genres": ["Oscar winning Movie"],
        "release_date": "2005-12-12",
        "poster_path": '../assets/images/Kill-Bill-Vol-2.jpg',
        "runtime": 132,
        "id": 3,
        "overview": "The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle."
      },
      { 
        "vote_average": 4.7,
        "title": "Kill Bill: Vol 2",
        "genres": ["Oscar winning Movie"],
        "release_date": "2004-12-12",
        "poster_path": '../assets/images/Kill-Bill-Vol-2.jpg',
        "runtime": 132,
        "id": 2,
        "overview": "The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle."
      }
    ]

    expect(matchedMovies('title', 'ki', data, 'rating')).toEqual(rightResult)
    expect(matchedMovies('title', 'ki', data, 'rating')).not.toEqual(wrongResult)
  })

  test('test matched movie func by genre and release date', () => {
    const rightResult = [
      { 
        "vote_average": 3.7,
        "title": "Kill Bill: Vol 3",
        "genres": ["Oscar winning Movie"],
        "release_date": "2005-12-12",
        "poster_path": '../assets/images/Kill-Bill-Vol-2.jpg',
        "runtime": 132,
        "id": 3,
        "overview": "The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle."
      },
      { 
        "vote_average": 4.7,
        "title": "Kill Bill: Vol 2",
        "genres": ["Oscar winning Movie"],
        "release_date": "2004-12-12",
        "poster_path": '../assets/images/Kill-Bill-Vol-2.jpg',
        "runtime": 132,
        "id": 2,
        "overview": "The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle."
      }
    ]

    expect(matchedMovies('title', 'ki', data, 'release date')).toEqual(rightResult)
  })
})
