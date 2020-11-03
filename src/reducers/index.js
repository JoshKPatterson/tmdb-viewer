import { 
  MOVIE_SEARCH,
  TV_SEARCH,
  ITEM_SELECT,
  GENRES_GET,
  CLEAR_SELECTED
 } from '../actions/types'
import { combineReducers } from 'redux'


const itemSearchReducer = (state = {
  list: null, 
  query: null,
  pages: {
    currentPage: null,
    totalResults: null,
    totalPages: null
  }
}, action) => {
  switch(action.type){
    case MOVIE_SEARCH:
    case TV_SEARCH:
      return state = { 
        list: action.payload.data.results,
        query: action.payload.query, 
        pages: {
          currentPage: action.payload.data.page,
          totalResults: action.payload.data.total_results,
          totalPages: action.payload.data.total_pages
        } 
      }
    default:
      return state;
  }
}

const itemIdentifierReducer = (state = null, action) => {
  switch(action.type){
    case MOVIE_SEARCH:
    case TV_SEARCH:
      return state = action.type
    default:
      return state;
  }
}

const itemSelectReducer = (selectedItem = null, action) => {
  switch(action.type){
    case MOVIE_SEARCH:
    case TV_SEARCH:
      return selectedItem = null;
    case ITEM_SELECT: 
      return (
        selectedItem = action.payload
      )
    case CLEAR_SELECTED:
      return (
        selectedItem = null
      )
    default:
      return selectedItem;
  }
}

const movieGenresListReducer = (state = null, action) => {
  switch(action.type){
    case GENRES_GET:
      return state = action.payload.movieGenres.data.genres
    default:
      return state;
  }
}

const showGenresListReducer = (state = null, action) => {
  switch(action.type){
    case GENRES_GET:
      return state = action.payload.showGenres.data.genres
    default:
      return state;
  }
}

export default combineReducers({
  itemSearch: itemSearchReducer,
  itemSelect: itemSelectReducer,
  itemIdentifier: itemIdentifierReducer,
  movieGenresList: movieGenresListReducer,
  showGenresList: showGenresListReducer
})