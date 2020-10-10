import React from 'react';

const Movie = (props) => {
  return (
    <div className='movieItem'
    >
      {props.name} ({props.firstAirDate})
    </div>
  )
}

export default Movie
