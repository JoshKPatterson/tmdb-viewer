import React from 'react'
import { connect } from 'react-redux'

const PersonDetails = ({ person }) => {
  if(!person){
    return <div>Select a person!</div>
  }
  return (
    <div>
      {person.title}
      <br />
      {person.release_date}
      <br />
      {person.overview}
      <br />
      <img src={`https://image.tmdb.org/t/p/w300${person.poster_path}`} alt={person.title}></img>

    </div>
  )
}

const mapStateToProps = state => {
  return { person: state.itemSelect }
}

export default connect(mapStateToProps)(PersonDetails)
