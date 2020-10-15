import React from 'react'

const Dropdown = (props) => {
  return (
    <div>
      <select onChange={props.setSetting}>
        <option value='movie'>Movie</option>
        <option value='tvShow'>TV Show</option>
      </select>
    </div>
  )
}

export default Dropdown
