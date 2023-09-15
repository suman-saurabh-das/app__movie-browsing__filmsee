import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Loader from '../Common/Loader'

import { useGetMoviesQuery } from '../../services/TMDB'
import MovieList from './MovieList'

function Movies({ showSidebar }) {
  const [page, setPage] = useState(1)
  const { genreIdOrCategoryName, searchQuery } = useSelector(state => state.currentGenreIdOrCategoryName)
  const { data, isFetching, error } = useGetMoviesQuery({ genreIdOrCategoryName, page, searchQuery })

  return (
    <main className={`main-container 
    ${showSidebar
        ? 'overflow-y-hidden'
        : 'overflow-y-scroll'}`}
    >
      <div className="p-4">
        {
          isFetching && <Loader width={10} />
        }
        {
          error && <span>Oops ! some error has occurred</span>
        }
        {
          !isFetching && !error && <>
            <MovieList movies={data} />
          </>
        }
      </div>
    </main>
  )
}

export default Movies
