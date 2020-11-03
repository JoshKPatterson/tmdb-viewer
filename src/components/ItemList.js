import React from 'react';
import { connect } from 'react-redux';
import Movie from './displayItems/Movie'
import TvShow from './displayItems/TvShow'
import PageCountDisplay from './PageCountDisplay';
import ButtonArea from './paginationButtons/ButtonArea';
import { itemSelect } from '../actions'
import { 
  MOVIE_SEARCH,
  TV_SEARCH
} from '../actions/types'

const MovieList = (props) => {
  const renderList = () => {
    switch(props.type){
      case MOVIE_SEARCH:
        return props.items.map((item) => {
          return (
                  <div onClick={() => props.itemSelect(item)} key={item.id} className='listItem'>
                    <Movie 
                      title={item.original_title} 
                      key={item.id}
                      image={item.poster_path}
                      releaseDate={item.release_date}
                      overview={item.overview}
                    />
                  </div>
                )
        })
      case TV_SEARCH:
        return props.items.map((item) => {
          return (
                  <div onClick={() => props.itemSelect(item)} key={item.id}>
                    <TvShow 
                      name={item.original_name} 
                      key={item.id}
                      firstAirDate={item.first_air_date}
                      overview={item.overview}
                    />
                  </div>
                )
        })
      default:
        return null;
    }
  }
  
  const renderButtons = () => props.items === null ? null : <ButtonArea />

  return (
    <>
      <PageCountDisplay />
      <div className='list'>
        {renderList()}
      </div>
      {renderButtons()}
    </>
  )
}

const mapStateToProps = state => {
  return { items: state.itemSearch.list, type: state.itemIdentifier }
}

export default connect(mapStateToProps, { itemSelect })(MovieList)
