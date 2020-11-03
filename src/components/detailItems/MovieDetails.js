import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import image_not_available from '../../images/image_not_available.jpg'
import { genreDisplay, checkPosterPath } from '../../extraFunctions'
import Loader from '../Loader'
import { clearSelected } from '../../actions'

const MovieDetails = ({ movie, movieGenres, clearSelected }) => {

  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    setImageLoaded(false)
  }, [movie])

  if(!movie){
    // return <div>Select a movie!</div>
    return null
  }

  const renderList = () => {
    const renderDetails = () => {
      return (
        // <div className='selectedItemDetails'>
        <>
        <div className='closeButton'>
          <button onClick={clearSelected}>
          <i className="far fa-times-circle"></i>
          </button>
        </div>
        <div className='sideDetails'>
          <p><span>Release Date</span><br />{movie.release_date ? movie.release_date : 'Release Date Unknown.'}</p>
          <p className='genres'><span>Genres</span><br />{genreDisplay(movie, movieGenres)}</p>
        </div>
        <div className='underDetails'>
          <h2>{movie.title}</h2>
          <p className='overview'>{movie.overview ? movie.overview : 'Plot Unknown.'}</p>
        </div>
          
          </>
        //  </div> 
      )
    }
    return (
      <>
        <img
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w400${movie.poster_path}` : image_not_available}
          key={movie.poster_path} 
          alt={''}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
        />
        {checkPosterPath(movie, imageLoaded, renderDetails())}
      </>
    )
  }

  return (
    <div className='selectedItem'>
      {!movie.poster_path ? null : imageLoaded ? null : <Loader />}
      {renderList()}
    </div>
  )
}

const mapStateToProps = state => {
  return { movie: state.itemSelect, movieGenres:  state.movieGenresList }
}

export default connect(mapStateToProps, { clearSelected })(MovieDetails)
