import moviedb from '../apis/moviedb';
import { 
  MOVIE_SEARCH, 
  ITEM_SELECT,
  TV_SEARCH,
  PERSON_SEARCH,
  GENRES_GET
} from './types'

export const movieSearch = (query, pageNum) => async dispatch => {
  const response = await moviedb.get('/search/movie', {
    params: {
      query: query,
      page: pageNum
    }
  });
  dispatch({ type: MOVIE_SEARCH, payload: {
    data: response.data,
    query: query
  } })
}

export const tvShowSearch = (query, pageNum) => async dispatch => {
  const response = await moviedb.get('/search/tv', {
    params: {
      query: query,
      page: pageNum
    }
  });
  dispatch({ type: TV_SEARCH, payload: {
    data: response.data,
    query: query
  } })
}

export const personSearch = (query) => async dispatch => {
  const response = await moviedb.get('/search/person', {
    params: {
      query: query
    }
  });
  dispatch({ type: PERSON_SEARCH, payload: response.data.results })
}

export const itemSelect = item => {
  return {
    type: ITEM_SELECT,
    payload: item
  }
}

export const genresGet = () => async dispatch => {
  const responseObj = {
    movieGenres: await moviedb.get('/genre/movie/list'),
    showGenres: await moviedb.get('/genre/tv/list')
  };
  dispatch({ type: GENRES_GET, payload: responseObj })
}