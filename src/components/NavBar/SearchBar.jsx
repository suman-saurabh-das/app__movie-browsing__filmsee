import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { searchMovie } from '../../features/currentGenreIdOrCategoryName'

function SearchBar() {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  const location = useLocation()

  const handleKeyPress = (event) => {
    if (event.key === 'Enter')
      dispatch(searchMovie(query))
  }

  if (location.pathname !== '/') { return null }

  return (
    <div className="flex items-center border-b border-black dark:border-white w-full">
      <i className="uil uil-search"></i>
      <input
        className="bg-transparent outline-none placeholder:text-black dark:placeholder:text-white p-2 w-full"
        type="text"
        placeholder="Search..."
        onChange={e => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </div>
  )
}

export default SearchBar
