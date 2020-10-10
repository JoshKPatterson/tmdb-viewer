import React from 'react';
import MovieList from './ItemList';
import MovieSearchbar from './ItemSearchbar';
import SelectedMovie from './SelectedItem';

function App() {
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

export default App;
