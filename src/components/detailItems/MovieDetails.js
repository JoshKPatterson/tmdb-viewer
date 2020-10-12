import React from 'react'
import { connect } from 'react-redux'

const SelectedMovie = ({ movie, movieGenres }) => {
  if(!movie){
    return <div>Select a movie!</div>
  }

  const genres = movie.genre_ids.map(num => {
   const genre = movieGenres.filter(obj => obj.id === num)
  return genre[0].name
  })

  console.log(genres)

  return (
    <div>
      {movie.title}
      <br />
      {movie.release_date}
      <br />
      {movie.overview}
      <br />
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}></img>
      <br />
      Genres:
      {genres.length === 0 ? <div>None to display</div> : genres.map(genre => <div>{genre}</div> )}
      
    </div>
  )
}

const mapStateToProps = state => {
  return { movie: state.itemSelect, movieGenres:  state.movieGenresList }
}

export default connect(mapStateToProps)(SelectedMovie)
