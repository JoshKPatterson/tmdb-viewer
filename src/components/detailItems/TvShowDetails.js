import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import image_not_available from '../../images/image_not_available.jpg'
import { genreDisplay, checkPosterPath } from '../../extraFunctions'
import Loader from '../Loader'
import { clearSelected } from '../../actions'


const TvShowDetails = ({ show, showGenres, clearSelected }) => {

  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    setImageLoaded(false)
  }, [show])

  if(!show){
    return null
  }

  const renderList = () => {
    const renderDetails = () => {
      return (
        <>
          <div className='closeButton'>
            <button onClick={clearSelected}>
            <i className="far fa-times-circle"></i>
            </button>
          </div>
          <div className='sideDetails'>
            <p><span>First Air Date</span><br />{show.first_air_date ? show.first_air_date : 'First Air Date Unknown'}</p>
            <p><span>Genres</span><br />{genreDisplay(show, showGenres)}</p>
          </div>
          <div className='underDetails'>
            <h2>{show.name}</h2>
            <p className='overview'>{show.overview ? show.overview : 'None to display'}</p>
          </div>  
        </>
      )
    }
    return (
      <>
        <img 
        src={show.poster_path ? `https://image.tmdb.org/t/p/w300${show.poster_path}` : image_not_available} 
        key={show.poster_path}
        alt={''}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(true)}
        />
      {checkPosterPath(show, imageLoaded, renderDetails())}
      </>
    )
  }

  return (
    <div className='selectedItem'>
      {!show.poster_path ? null : imageLoaded ? null : <Loader />}
      {renderList()}
    </div>
  )
}

const mapStateToProps = state => {
  return { show: state.itemSelect, showGenres: state.showGenresList }
}

export default connect(mapStateToProps, { clearSelected })(TvShowDetails)
