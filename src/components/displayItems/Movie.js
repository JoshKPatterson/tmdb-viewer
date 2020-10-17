import React from 'react';

const Movie = (props) => {
  return (
    <div className='listItem'
    >
      {props.title} {props.releaseDate ? `(${props.releaseDate})` : null}
    </div>
  )
}

export default Movie
