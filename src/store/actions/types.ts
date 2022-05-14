import { Movie, Action } from 'src/models'

export type SetMovies = Action<'FINISH_SET_MOVIES', Array<Movie>>
export type SetLoading = Action<'SET_LOADING', boolean>
export type SetSelectedMovie = Action<'SET_SELECTED_MOVIE_ID', Array<Movie>>
export type SetSameGenreMovies = Action<'SET_SAME_GENRE_MOVIES', Array<Movie>>
export type SetMoviesDefault = Action<'@@INIT', never>
export type SetNewTabMovie = Action<'SET_NEW_TAB_MOVIE', string>
export type SetSearchType = Action<'SET_SEARCH_BY', string>
export type SetFilterType = Action<'SET_FILTER_BY', string>
export type SetSearchQuery = Action<'SET_SEARCH_QUERY', string>
export type SetSearchStatus = Action<'SET_SEARCH_STATUS', boolean>
export type SetViewPageHeadError = Action<'VIEW_PAGE_HEAD_ERROR', string>
export type SetMainPageError = Action<'MAIN_PAGE_ERROR', string>
export type SetViewPageMainError = Action<'VIEW_PAGE_MAIN_ERROR', string>
export type StartSetMovies = Action<'START_SET_MOVIES', undefined>
export type StartSetMoviesWithParams = Action<'START_SET_MOVIES', string[]>
export type FinishSetMovies = Action<'FINISH_SET_MOVIES', object>
export type StartSetSameGenreMovies = Action<'START_SET_SAME_GENRE_MOVIES', string>
export type FinishSetSameGenreMovies = Action<'SET_SAME_GENRE_MOVIES', Array<Movie>>
export type ResetMainPageError = Action<'MAIN_PAGE_ERROR', string>