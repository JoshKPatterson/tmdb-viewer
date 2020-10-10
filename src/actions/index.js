import moviedb from '../apis/moviedb';
import { 
  MOVIE_SEARCH, 
  ITEM_SELECT,
  TV_SEARCH,
  PERSON_SEARCH
} from './types'

export const movieSearch = (query) => async dispatch => {
  const response = await moviedb.get('/search/movie', {
    params: {
      query: query
    }
  });
  dispatch({ type: MOVIE_SEARCH, payload: response.data.results })
}

export const tvShowSearch = (query) => async dispatch => {
  const response = await moviedb.get('/search/tv', {
    params: {
      query: query
    }
  });
  dispatch({ type: TV_SEARCH, payload: response.data.results })
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