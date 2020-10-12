import React from 'react';

const Person = (props) => {
  const knownFor = props.knownFor.map(item => {
    return (
      <div>{item.original_title}</div>
    )
  })
  return (
    <div className='movieItem'
    >
      {props.name}
      <br />
      Known For:
      {knownFor}
    </div>
  )
}

export default Person
