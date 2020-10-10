import React from 'react'
import { connect } from 'react-redux'

const SelectedMovie = ({ movie }) => {
  if(!movie){
    return <div>Select a movie!</div>
  }
  return (
    <div>
      {movie.title}
      <br />
      {movie.release_date}
      <br />
      {movie.overview}
      <br />
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}></img>

    </div>
  )
}

const mapStateToProps = state => {
  return { movie: state.itemSelect }
}

export default connect(mapStateToProps)(SelectedMovie)
