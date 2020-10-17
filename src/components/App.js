import React, { useEffect } from 'react';
import ItemList from './ItemList';
import ItemSearchbar from './ItemSearchbar';
import SelectedItem from './SelectedItem';
import Header from './Header'
import Attribution from './Attribution'
import { genresGet } from '../actions'
import { connect } from 'react-redux'

function App({ genresGet }) {
  useEffect(() => {
    genresGet();
  }, [])
  return (
    <div className='app'>
      <Header />
        <ItemSearchbar />
      <div className='itemArea'>
        <div className='itemListArea'>
          <ItemList />
        </div>
        <div className='selectedItemArea'>
          <SelectedItem />
        </div>
      </div>
      <Attribution />
    </div>
  );
}

export default connect(null, { genresGet })(App);
