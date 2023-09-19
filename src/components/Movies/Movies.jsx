import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useGetMoviesQuery } from '../../services/TMDB'

import Loader from '../Common/Loader'
import MovieList from './MovieList'
import Pagination from '../Common/Pagination'
import FeaturedMovie from './FeaturedMovie'

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
      <div className="p-4 pt-8">
        {
          isFetching && <Loader width={10} />
        }
        {
          error && <span>Oops ! some error has occurred</span>
        }
        {
          !isFetching && !error && <>
            <FeaturedMovie movie={data.results[0]} />
            <MovieList movies={data} />
            <Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages} />
          </>
        }
      </div>
    </main>
  )
}

export default Movies
