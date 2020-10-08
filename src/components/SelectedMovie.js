import React from 'react'
import { connect } from 'react-redux'

const SelectedMovie = ({ movie }) => {
  if(!movie){
    return <div>Select a movie!</div>
  }
  return (
    <div>
      {movie.title}
    </div>
  )
}

const mapStateToProps = state => {
  return { movie: state.movieSelect }
}

export default connect(mapStateToProps)(SelectedMovie)
