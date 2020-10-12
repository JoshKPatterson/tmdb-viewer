import React, { useEffect } from 'react';
import MovieList from './ItemList';
import MovieSearchbar from './ItemSearchbar';
import SelectedMovie from './SelectedItem';
import { genresGet } from '../actions'
import { connect } from 'react-redux'

function App(props) {
  useEffect(() => {
    props.genresGet();
  }, [])
  return (
    <div className='app'>
        <MovieSearchbar />
      <div className='movieArea'>
        <div className='movieListArea'>
          <MovieList />
        </div>
        <div className='selectedMovieArea'>
          <SelectedMovie />
        </div>
      </div>
    </div>
  );
}

export default connect(null, { genresGet })(App);
