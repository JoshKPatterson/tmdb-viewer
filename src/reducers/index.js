import { 
  MOVIE_SEARCH,
  TV_SEARCH,
  PERSON_SEARCH,
  ITEM_SELECT,
  GENRES_GET
 } from '../actions/types'
import { combineReducers } from 'redux'


const itemSearchReducer = (state = null, action) => {
  switch(action.type){
    case MOVIE_SEARCH:
    case PERSON_SEARCH:
    case TV_SEARCH:
      return state = action.payload
    default:
      return state;
  }
}

const itemIdentifierReducer = (state = null, action) => {
  switch(action.type){
    case MOVIE_SEARCH:
    case PERSON_SEARCH:
    case TV_SEARCH:
      return state = action.type
    default:
      return state;
  }
}

const itemSelectReducer = (selectedItem = null, action) => {
  switch(action.type){
    case MOVIE_SEARCH:
    case PERSON_SEARCH:
    case TV_SEARCH:
      return selectedItem = null;
    case ITEM_SELECT: 
      return (
        selectedItem = action.payload
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