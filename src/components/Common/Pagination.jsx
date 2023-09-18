import React from 'react'

function Pagination({ currentPage, totalPages, setPage }) {
  const handlePrevClick = () => {
    if (currentPage !== 1) {
      setPage(prevPage => prevPage - 1)
    }
  }
  const handleNextClick = () => {
    if (currentPage !== totalPages) {
      setPage(prevPage => prevPage + 1)
    }
  }

  if (totalPages === 0) {
    return null
  }
  return (
    <div className="flex font-semibold items-center justify-between px-3 mx-auto my-8">
      <button
        className="nav-button px-6 py-2"
        onClick={handlePrevClick}
      >
        Prev
      </button>
      <span className="">{currentPage}</span>
      <button
        className="nav-button px-6 py-2"
        onClick={handleNextClick}
      >
        Next</button>
    </div>
  )
}

export default Pagination
