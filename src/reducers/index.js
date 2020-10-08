import { MOVIE_SEARCH, MOVIE_SELECT } from '../actions/types'
import { combineReducers } from 'redux'


const movieSearchReducer = (state = null, action) => {
  switch(action.type){
    case MOVIE_SEARCH:
      return state = action.payload
    default:
      return state;
  }
}

const movieSelectReducer = (selectedMovie = null, action) => {
  switch(action.type){
    case MOVIE_SELECT: 
      return (
        selectedMovie = action.payload
      )
    default:
      return selectedMovie;
  }
}

export default combineReducers({
  movieSearch: movieSearchReducer,
  movieSelect: movieSelectReducer
})