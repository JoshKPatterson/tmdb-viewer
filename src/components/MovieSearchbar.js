import React, { useState } from 'react';
import { connect } from 'react-redux'
import { movieSearch } from '../actions';

const MovieSearchbar = (props) => {

  const [term, setTerm] = useState('transformers');

  const onSubmit = e => {
    props.movieSearch(term);
  }

  return (
    <div className='movieSearchBar'>
      <input 
        type='text'
        value={term}
        onChange={e => setTerm(e.target.value)}
      />
      <button onClick={onSubmit}>Search</button>
    </div>
  )
}



export default connect(null, { movieSearch })(MovieSearchbar)
