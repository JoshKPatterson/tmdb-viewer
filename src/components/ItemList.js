import React from 'react';
import { connect } from 'react-redux';
import Movie from './displayItems/Movie'
import TvShow from './displayItems/TvShow'
import Person from './displayItems/Person'
import { itemSelect } from '../actions'
import { 
  MOVIE_SEARCH,
  TV_SEARCH,
  PERSON_SEARCH
} from '../actions/types'

const MovieList = (props) => {
  const renderList = () => {
    if(props.items === null){
      return <div
      >Make a search to see a list of movies!</div>
    }
    switch(props.type){
      case MOVIE_SEARCH:
        return props.items.map((item) => {
          return (
                  <div onClick={() => props.itemSelect(item)}>
                    <Movie 
                      title={item.original_title} 
                      key={item.id}
                      releaseDate={item.release_date}
                      overview={item.overview}
                    />
                  </div>
                )
        })
      case TV_SEARCH:
        return props.items.map((item) => {
          return (
                  <div onClick={() => props.itemSelect(item)}>
                    <TvShow 
                      name={item.original_name} 
                      key={item.id}
                      firstAirDate={item.first_air_date}
                      overview={item.overview}
                    />
                  </div>
                )
        })
      case PERSON_SEARCH:
        return props.items.map((item) => {
          return (
                  <div onClick={() => props.itemSelect(item)}>
                    <Person 
                      name={item.name} 
                      key={item.id}
                      knownFor={item.known_for}
                    />
                  </div>
                )
        })
      default:
        return null;
    }
    // return props.items.map((item) => {
    //   return (
    //           <div onClick={() => props.itemSelect(item)}>
    //             <Movie 
    //               title={item.original_title} 
    //               key={item.id}
    //               releaseDate={item.release_date}
    //               overview={item.overview}
    //             />
    //           </div>
    //         )
    // })
  }
  return (
    <div>
      Movie List
      {renderList()}
    </div>
  )
}

const mapStateToProps = state => {
  return { items: state.itemSearch, type: state.itemIdentifier }
}

export default connect(mapStateToProps, { itemSelect })(MovieList)
