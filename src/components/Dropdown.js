import React from 'react'

const Dropdown = (props) => {
  return (
    <div className="dropdown">
      <select onChange={props.setSetting}>
        <option value='movie'>Movie</option>
        <option value='tvShow'>TV Show</option>
      </select>
      <span className='dropdown-arrow'></span>
    </div>
  )
}

export default Dropdown
