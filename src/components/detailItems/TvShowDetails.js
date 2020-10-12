import React from 'react'
import { connect } from 'react-redux'

const TvShowDetails = ({ show }) => {
  if(!show){
    return <div>Select a show!</div>
  }
  return (
    <div>
      {show.title}
      <br />
      {show.first_air_date}
      <br />
      {show.overview}
      <br />
      <img src={`https://image.tmdb.org/t/p/w300${show.poster_path}`} alt={show.title}></img>

    </div>
  )
}

const mapStateToProps = state => {
  return { show: state.itemSelect }
}

export default connect(mapStateToProps)(TvShowDetails)
