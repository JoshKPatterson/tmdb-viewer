import React from 'react';
import image_not_available from '../../images/image_not_available.jpg'

// props list:
// name, firstAirDate, image, overview

const TvShow = (props) => {
  return (
    <>
      <div className='listItemPicture'>
        <img
          src={props.image ? `https://image.tmdb.org/t/p/w300${props.image}` : image_not_available}
          alt={props.name}
        ></img>
      </div>
      <div className='listItemDetails'>
        <h3>{props.name}</h3>
          <p className='listItemDetailsDate'>{props.firstAirDate ? `(${props.firstAirDate})` : null}</p>
          <p>{props.overview ? `${props.overview}` : `No Summary Available`}</p>
      </div>
    </>
  )
}

export default TvShow
