import React from 'react';

const TvShow = (props) => {
  return (
    <div className='listItem'
    >
      {props.name} {props.firstAirDate ? `(${props.firstAirDate})` : null}
    </div>
  )
}

export default TvShow
