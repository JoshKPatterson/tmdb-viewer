import React from 'react';

const Movie = (props) => {
  return (
    <div
    >
      {props.title} ({props.releaseDate})
    </div>
  )
}

export default Movie
