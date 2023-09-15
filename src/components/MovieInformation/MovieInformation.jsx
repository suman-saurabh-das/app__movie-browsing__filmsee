import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from '../Common/Loader'

import { useGetMovieQuery } from '../../services/TMDB'

function MovieInformation({ showSidebar }) {
  const { id } = useParams()
  const { data, isFetching, error } = useGetMovieQuery(id)
  return (
    <main className={`main-container 
    ${showSidebar
        ? 'overflow-y-hidden bg-black/[0.5] dark:bg-black/[0.7]'
        : 'overflow-y-scroll'}`}
    >
      <div className="p-4 sm:p-6 lg:p-8">
        {
          isFetching && <Loader width={10} />
        }
        {
          error && <Link to={'/'}>
            Something went wrong !<br />
            <i className="uil uil-arrow-left"></i> Please go back
          </Link>
        }
        {
          !isFetching && !error && <>
            <h3 className="font-semibold text-2xl lg:text-3xl">Movie Information</h3>
            {id}
          </>
        }
      </div>
    </main>
  )
}

export default MovieInformation
