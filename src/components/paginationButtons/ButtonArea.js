import React from 'react';
import { connect } from 'react-redux';
import NextPageButton from './NextPageButton';
import PreviousPageButton from './PreviousPageButton';

const ButtonArea = ({ pages }) => {

  const renderButtonLogic = () => {
    if(pages.currentPage < pages.totalPages && pages.currentPage > 1){
      return <><PreviousPageButton /><NextPageButton /></>
    }
    if(pages.currentPage > 1){
      return <PreviousPageButton />
    }
    if(pages.currentPage < pages.totalPages){
      return <NextPageButton />
    }
  }

  return (
    <div className='buttonArea'>
      {renderButtonLogic()}
    </div>
  )
}

const mapStateToProps = state => {
  return { pages: state.itemSearch.pages }
}

export default connect(mapStateToProps)(ButtonArea)
