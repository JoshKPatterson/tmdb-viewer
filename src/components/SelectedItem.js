import React from 'react'
import { connect } from 'react-redux'
import MovieDetails from './detailItems/MovieDetails';
import TvShowDetails from './detailItems/TvShowDetails';
import PersonDetails from './detailItems/PersonDetails';
import { 
  MOVIE_SEARCH,
  TV_SEARCH,
  PERSON_SEARCH
 } from '../actions/types'

const SelectedItem = ({ type }) => {
  switch(type){
    case MOVIE_SEARCH:
      return <MovieDetails />
    case TV_SEARCH:
      return <TvShowDetails />
    case PERSON_SEARCH:
      return <PersonDetails />
    default:
      return null;
  }
}

const mapStateToProps = state => {
  return { type: state.itemIdentifier }
}

export default connect(mapStateToProps)(SelectedItem)
