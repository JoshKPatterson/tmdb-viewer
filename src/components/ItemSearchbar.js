import React, { useState } from 'react';
import { connect } from 'react-redux'
import { 
  movieSearch,
  tvShowSearch
 } from '../actions';
import Dropdown from './Dropdown'

const MovieSearchbar = (props) => {

  const [term, setTerm] = useState('transformers');
  const [setting, setSetting] = useState('movie');

  const onSetSetting = (e) => {
    setSetting(e.target.value)
  }
  const onSubmit = e => {
    switch(setting){
      case 'movie':
        props.movieSearch(term, 1)
        break;
      case 'tvShow':
        props.tvShowSearch(term, 1)
        break;
      default:
        return;
    }
  }

  const keyPressed = e => e.key === 'Enter' ? onSubmit() : null

  return (
    <div className='movieSearchBar'>
      <input 
        type='text'
        value={term}
        onChange={e => setTerm(e.target.value)}
        onKeyPress={keyPressed}
      />
      <button onClick={onSubmit}>Search</button>
      <Dropdown setSetting={onSetSetting}/>
    </div>
  )
}



export default connect(null, { 
  movieSearch,
  tvShowSearch
 })(MovieSearchbar)
