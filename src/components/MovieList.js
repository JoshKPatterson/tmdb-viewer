import React from 'react';
import { connect } from 'react-redux';
import Movie from './Movie'
import { movieSelect } from '../actions'

const MovieList = (props) => {
  const renderList = () => {
    if(props.movies === null){
      return <div>Make a search to see a list of movies!</div>
    }
    return props.movies.map((movie) => {
      return (<div
                onClick={() => props.movieSelect(movie)}
              >
                <Movie 
                  title={movie.original_title} 
                  key={movie.id}
                  releaseDate={movie.release_date}
                  // onClick={() => props.movieSelect(movie)}
                />
              </div>
            )
    })
  }

  // const returnState = () => {
  //   console.log(props);
  // }

  return (
    <div>
      Movie List
      {renderList()}
    </div>
  )
}

const mapStateToProps = state => {
  return { movies: state.movieSearch }
}

export default connect(mapStateToProps, { movieSelect })(MovieList)
