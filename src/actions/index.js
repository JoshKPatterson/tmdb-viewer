import moviedb from '../apis/moviedb';
import { MOVIE_SEARCH, MOVIE_SELECT } from './types'

export const movieSearch = (query) => async dispatch => {
  const response = await moviedb.get('/search/movie', {
    params: {
      query: query
    }
  });
  dispatch({ type: MOVIE_SEARCH, payload: response.data.results })
}

export const movieSelect = movie => {
  return {
    type: MOVIE_SELECT,
    payload: movie
  }
}