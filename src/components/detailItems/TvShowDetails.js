import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import image_not_available from '../../images/image_not_available.jpg'
import { genreDisplay, checkPosterPath } from '../../extraFunctions'

const TvShowDetails = ({ show, showGenres }) => {

  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    setImageLoaded(false)
  }, [show])

  if(!show){
    return <div>Select a show!</div>
  }

  return (
    <div>
      {!show.poster_path ? null : imageLoaded ? null : <div>Loading...</div>}
      {checkPosterPath(show, imageLoaded, show.name)}
      <br />
      {checkPosterPath(show, imageLoaded, show.first_air_date, 'First Air Date Unknown')}
      <br />
      {checkPosterPath(show, imageLoaded, show.overview)}
      <br />
      <img 
        src={show.poster_path ? `https://image.tmdb.org/t/p/w300${show.poster_path}` : image_not_available} 
        key={show.poster_path}
        alt={show.title}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(true)}
      >
      </img>
      <br />
      {checkPosterPath(show, imageLoaded, genreDisplay(show, showGenres))}
    </div>
  )
}

const mapStateToProps = state => {
  return { show: state.itemSelect, showGenres: state.showGenresList }
}

export default connect(mapStateToProps)(TvShowDetails)
