import React from 'react';
import MovieList from './MovieList';
import MovieSearchbar from './MovieSearchbar';
import SelectedMovie from './SelectedMovie';

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
