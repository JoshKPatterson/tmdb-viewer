import React from 'react'
import { connect } from 'react-redux'

const PageCountDisplay = ({ pages }) => {

  const pageCalculation = () => {
    if(pages.currentPage < pages.totalPages){
      return <div>showing {(pages.currentPage * 20) - 19} - {pages.currentPage * 20} of {pages.totalResults}</div>
    } else if (pages.currentPage === pages.totalPages){
      return <div>showing {(pages.currentPage * 20) - 19} - {pages.totalResults} of {pages.totalResults}</div>
    }
  }

  return (
    <div>
      {pageCalculation()}
    </div>
  )
}

const mapStateToProps = state => {
  return { pages: state.itemSearch.pages }
}

export default connect(mapStateToProps)(PageCountDisplay)
