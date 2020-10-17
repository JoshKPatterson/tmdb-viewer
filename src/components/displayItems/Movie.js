import React from 'react';

const Movie = (props) => {
  return (
    <div className='listItem'
    >
      {props.title} ({props.releaseDate})
    </div>
  )
}

export default Movie
