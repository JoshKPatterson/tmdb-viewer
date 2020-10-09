import React from 'react';

const Movie = (props) => {
  return (
    <div className='movieItem'
    >
      {props.title} ({props.releaseDate})
    </div>
  )
}

export default Movie
