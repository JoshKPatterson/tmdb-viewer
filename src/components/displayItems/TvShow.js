import React from 'react';

const TvShow = (props) => {
  return (
    <div className='movieItem'
    >
      {props.name} ({props.firstAirDate})
    </div>
  )
}

export default TvShow
