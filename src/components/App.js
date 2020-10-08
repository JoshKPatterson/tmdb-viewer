import React from 'react';
import MovieList from './MovieList';
import MovieSearchbar from './MovieSearchbar';
import SelectedMovie from './SelectedMovie';

function App() {
  return (
    <div>
      <MovieSearchbar />
      <MovieList />
      <SelectedMovie />
    </div>
  );
}

export default App;
