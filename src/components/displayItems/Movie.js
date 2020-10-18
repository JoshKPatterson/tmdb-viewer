import React from 'react';

const Movie = (props) => {
  return (
    <>
      {props.title} {props.releaseDate ? `(${props.releaseDate})` : null}
    </>
  )
}

export default Movie
