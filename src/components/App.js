import React, { useEffect } from 'react';
import ItemList from './ItemList';
import ItemSearchbar from './ItemSearchbar';
import SelectedItem from './SelectedItem';
import { genresGet } from '../actions'
import { connect } from 'react-redux'

function App({ genresGet }) {
  useEffect(() => {
    genresGet();
  }, [])
  return (
    <div className='app'>
        <ItemSearchbar />
      <div className='movieArea'>
        <div className='movieListArea'>
          <ItemList />
        </div>
        <div className='selectedMovieArea'>
          <SelectedItem />
        </div>
      </div>
    </div>
  );
}

export default connect(null, { genresGet })(App);
