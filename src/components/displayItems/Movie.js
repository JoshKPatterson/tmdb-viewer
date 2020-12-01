import React from 'react';
import image_not_available from '../../images/image_not_available.jpg'


// props list:
// title, releaseDate, image, overview

const Movie = (props) => {
  return (
    <>
      <div className='listItemPicture'>
        <img
          src={props.image ? `https://image.tmdb.org/t/p/w400${props.image}` : image_not_available}
          alt={props.title}
        ></img>
      </div>
      <div className='listItemDetails'>
        <h3>{props.title}</h3>
        <p className='listItemDetailsDate'>{props.releaseDate ? `(${props.releaseDate})` : null}</p>
        <p>{props.overview ? `${props.overview}` : 'No Summary Available'}</p>
      </div>
    </>
  )
}

// {props.title} {props.releaseDate ? `(${props.releaseDate})` : null}

export default Movie
