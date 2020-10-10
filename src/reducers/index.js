import { 
  MOVIE_SEARCH,
  TV_SEARCH,
  PERSON_SEARCH,
  ITEM_SELECT
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
    case ITEM_SELECT: 
      return (
        selectedItem = action.payload
      )
    default:
      return selectedItem;
  }
}

export default combineReducers({
  itemSearch: itemSearchReducer,
  itemSelect: itemSelectReducer,
  itemIdentifier: itemIdentifierReducer
})