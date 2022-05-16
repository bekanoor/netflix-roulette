import {
  fetchDataByGenre,
  fetchDataById,
  fetchMovies,
  fetchMoviesBySearchType,
} from '../../utils/'
import {
  finishSetMovies,
  finishSetSameGenreMovies,
  setMainPageError,
  setSelectedMovie,
  setViewPageHeadError,
} from '../actions/actions'
import {
  SET_NEW_TAB_MOVIE,
  START_SET_MOVIES,
  START_SET_SAME_GENRE_MOVIES,
} from '../constants'

import { call, put, takeEvery } from 'redux-saga/effects'
import { Movie } from 'src/models'
import { useAppSelector } from 'src/hook'

type HandleMoviesType = {
  type: string
  payload: ['query', 'searchBy', 'filterBy']
}

export function* handleMovies(action: HandleMoviesType) {
  if (action?.payload === undefined) {
    const data: Array<Movie> = yield call(fetchMovies)

    yield put(finishSetMovies(data))
  } else {
    const [query, searchBy, filterBy] = action.payload
    const data: Array<Movie> = yield call(
      fetchMoviesBySearchType,
      query,
      searchBy,
      filterBy
    )

    if (!data.length) {
      yield put(setMainPageError())
      yield put(finishSetMovies([]))
      return
    }

    yield put(finishSetMovies(data))
  }
}

type HandleTransitionFromMainPage = {
  type: string
  payload: string
}

export function* handleTransitionFromMainPage(
  action: HandleTransitionFromMainPage
) {
  const data: Array<Movie> = yield call(fetchDataByGenre, action.payload)

  yield put(finishSetSameGenreMovies(data))
}

type ActionType = {
  type: string
  payload: [string, Array<Movie>]
}

export function* handleViewPageHeader(action: ActionType) {
  try {
    const [id, movies] = action.payload

    const [cachedMovie] = [
      movies.find((item) => item.id === +id),
    ] as Array<Movie>

    if (cachedMovie) {
      yield put(setSelectedMovie([cachedMovie]))
      return
    }

    const movie: Movie = yield call(fetchDataById, id)
    //here
    yield put(setSelectedMovie([movie]))
  } catch (err) {
    yield put(setViewPageHeadError())
  }
}

export function* handleViewPageMain(action: ActionType) {
  try {
    const [id] = action.payload
    const movie: Movie = yield call(fetchDataById, id)
    const { genres } = movie
    const [genre] = genres

    const sameGenreMovies: Array<Movie> = yield call(fetchDataByGenre, genre)

    yield put(finishSetSameGenreMovies(sameGenreMovies))
  } catch (err) {
    yield put(setViewPageHeadError())
  }
}

export function* watchSaga() {
  yield takeEvery(START_SET_MOVIES, handleMovies)
  yield takeEvery(START_SET_SAME_GENRE_MOVIES, handleTransitionFromMainPage)
  yield takeEvery(SET_NEW_TAB_MOVIE, handleViewPageHeader)
  yield takeEvery(SET_NEW_TAB_MOVIE, handleViewPageMain)
}

export function* rootSaga() {
  yield watchSaga()
}
