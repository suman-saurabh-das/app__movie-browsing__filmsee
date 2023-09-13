import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useGetMoviesQuery } from '../../services/TMDB'

import MovieList from './MovieList'

function Movies({ showSidebar }) {
  const [page, setPage] = useState(1)
  const { genreIdOrCategoryName, searchQuery } = useSelector(state => state.currentGenreIdOrCategoryName)
  const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page, searchQuery })

  if (isFetching) {
    return <span>Loading...</span>
  }
  if (!data.results.length) {
    return <span>No movies that match that name.<br />Please search for something else.</span>
  }
  if (error) {
    return <span>Oops ! some error has occurred</span>
  }

  return (
    <main className={`main-container 
    ${showSidebar
        ? 'overflow-y-hidden'
        : 'overflow-y-scroll'}`}
    >
      <div className="p-4">
        <MovieList movies={data} />
      </div>
    </main>
  )
}

export default Movies
