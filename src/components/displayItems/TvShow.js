import React from 'react';

const TvShow = (props) => {
  return (
    <div className='listItem'
    >
      {props.name} ({props.firstAirDate})
    </div>
  )
}

export default TvShow
