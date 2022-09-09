import React, { useState } from 'react'

const News = () => {
  const [filter, setFilter] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [pageNumbers, setPageNumbers] = useState([])

  return (
  <>
    <section className='stories light'>
      <div className='d-flex flex-column justify-content-center'>
        <div className="d-flex flex-row justify-content-center">
          <div className='placeholder gradient2'>
            <h2>News</h2>
          </div>
          <div className='placeholder gradient2'>
            <h2>News</h2>
          </div>
          <div className='placeholder gradient2'>
            <h2>News</h2>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <div className='placeholder gradient2'>
            <h2>News</h2>
          </div>
          <div className='placeholder gradient2'>
            <h2>News</h2>
          </div>
          <div className='placeholder gradient2'>
            <h2>News</h2>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <div className='placeholder gradient2'>
            <h2>News</h2>
          </div>
          <div className='placeholder gradient2'>
            <h2>News</h2>
          </div>
          <div className='placeholder gradient2'>
            <h2>News</h2>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default News