import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import image_not_available from '../../images/image_not_available.jpg'
import { genreDisplay, checkPosterPath } from '../../extraFunctions'

const MovieDetails = ({ movie, movieGenres }) => {

  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    setImageLoaded(false)
  }, [movie])

  if(!movie){
    return <div>Select a movie!</div>
  }

  const renderList = () => {
    const renderDetails = () => {
      return (
        <>
        <div className='selectedItemDetails'>
          <h2>{movie.title}</h2>
          <p><span>Release Date</span><br />{movie.release_date ? movie.release_date : 'Release date unknown'}</p>
          <p class='overview'><span>Overview</span><br />{movie.overview}</p>
          <p className='genres'><span>Genres</span>{genreDisplay(movie, movieGenres)}</p>
        </div>
        </>
      )
    }
    return (
      <div className='selectedItem'>
        <img
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w400${movie.poster_path}` : image_not_available}
          key={movie.poster_path} 
          alt={''}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
        />
        {checkPosterPath(movie, imageLoaded, renderDetails())}
      </div>
    )
  }

  return (
    <>
      {!movie.poster_path ? null : imageLoaded ? null : <div className='loading'>Loading...</div>}
      {renderList()}
    </>
  )
}

const mapStateToProps = state => {
  return { movie: state.itemSelect, movieGenres:  state.movieGenresList }
}

export default connect(mapStateToProps)(MovieDetails)
