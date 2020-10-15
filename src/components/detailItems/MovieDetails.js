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

  return (
    <div>
      {!movie.poster_path ? null : imageLoaded ? null : <div>Loading...</div>}
      {checkPosterPath(movie, imageLoaded, movie.title)}
      <br />
      {checkPosterPath(movie, imageLoaded, movie.release_date, 'Release date unknown')}
      <br />
      {checkPosterPath(movie, imageLoaded, movie.overview)}
      <br />
      <img
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : image_not_available}
        key={movie.poster_path} 
        alt={movie.title}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(true)}
      >
      </img>
      <br />
      {checkPosterPath(movie, imageLoaded, genreDisplay(movie, movieGenres))}
    </div>
  )
}

const mapStateToProps = state => {
  return { movie: state.itemSelect, movieGenres:  state.movieGenresList }
}

export default connect(mapStateToProps)(MovieDetails)
