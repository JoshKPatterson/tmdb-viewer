import React from 'react'
import { connect } from 'react-redux';
import {
  MOVIE_SEARCH,
  TV_SEARCH
} from '../../actions/types';
import {
  movieSearch,
  tvShowSearch
} from '../../actions';

const PreviousPageButton = ({ type, movieSearch, tvShowSearch, query, page }) => {

  const onSubmit = () => {
    switch(type){
      case MOVIE_SEARCH:
        movieSearch(query, (page - 1));
        break;
      case TV_SEARCH:
        tvShowSearch(query, (page - 1));
        break;
      default:
        return;
    }
  }

  return <button onClick={onSubmit} className='prevButton btn btn-primary'>Previous Page</button>
}

const mapStatetoProps = state => {
  return { type: state.itemIdentifier, query: state.itemSearch.query, page: state.itemSearch.pages.currentPage }
}

export default connect(mapStatetoProps, {
  movieSearch,
  tvShowSearch
})(PreviousPageButton)
