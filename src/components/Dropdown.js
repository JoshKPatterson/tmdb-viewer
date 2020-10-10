import React from 'react'

const Dropdown = (props) => {
  return (
    <div>
      <select onChange={props.setSetting}>
        <option value='movie'>Movie</option>
        <option value='tvShow'>TV Show</option>
        <option value='person'>Person</option>
      </select>
    </div>
  )
}

export default Dropdown
