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

  const renderList = () => {
    const renderDetails = () => {
      return (
        <div className='selectedItemDetails'>
          <h2>{show.title}</h2>
          <p><span>First Air Date</span><br />{show.first_air_date ? show.first_air_date : 'First air date unknown'}</p>
          <p><span>Overview</span>{show.overview ? show.overview : 'None to display'}</p>
          <p><span>Genres</span><br />{genreDisplay(show, showGenres)}</p>
        </div>
      )
    }
    return (
      <div className='selectedItem'>
        <img 
        src={show.poster_path ? `https://image.tmdb.org/t/p/w300${show.poster_path}` : image_not_available} 
        key={show.poster_path}
        alt={''}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(true)}
      />
      {checkPosterPath(show, imageLoaded, renderDetails())}
      </div>
    )
  }

  return (
    <>
      {!show.poster_path ? null : imageLoaded ? null : <div className='loading'>Loading...</div>}
      {renderList()}
    </>
  )
}

const mapStateToProps = state => {
  return { show: state.itemSelect, showGenres: state.showGenresList }
}

export default connect(mapStateToProps)(TvShowDetails)
