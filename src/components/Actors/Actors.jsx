import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useGetActorDetailsQuery } from '../../services/TMDB'
import { useGetMoviesByActorIdQuery } from '../../services/TMDB'

import Loader from '../Common/Loader'
import MovieCard from '../Movies/MovieCard'
import Pagination from '../Common/Pagination'

function Actors({ showSidebar }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data, isFetching, error } = useGetActorDetailsQuery(id)
  const [page, setPage] = useState(1);
  const { data: movies, isFetching: isFetchingMovies } = useGetMoviesByActorIdQuery({ id, page })
  console.log(data, movies);

  return (
    <main className={`main-container 
    ${showSidebar
        ? 'overflow-y-hidden bg-black/[0.5] dark:bg-black/[0.7]'
        : 'overflow-y-scroll'}`}
    >
      <div className="p-4 pt-6 sm:p-6 lg:p-8">
        {
          isFetching && <Loader />
        }
        {
          error && <button onClick={() => navigate(-1)}>
            Something went wrong !<br />
            <i className="uil uil-arrow-left"></i> Please go back
          </button>
        }
        {
          !isFetching && !error && <>
            {/* Actor image and information container */}
            <div className="grid gap-8 lg:grid-cols-3 items-center">

              {/* Actor image container */}
              <div>
                <img
                  alt={data.name}
                  src={data.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${data.profile_path}`
                    : 'https://murphys-movies.vercel.app/movie-poster-placeholder.svg'}
                  className="shadow-lg shadow-slate-900 rounded-lg object-contain mx-auto w-[80%] max-w-xs"
                />
              </div>

              {/* Actor information container */}
              <div className="mx-auto w-[90%] lg:col-span-2">
                {/* Title */}
                <h2 className="font-semibold text-3xl lg:text-4xl">
                  {data?.name}
                </h2>

                {/* Birth details */}
                <h3 className="font-semibold mt-8 lg:text-lg">
                  Born: <span className="[word-spacing:0.2rem]">{new Date(data?.birthday).toDateString()}</span>
                </h3>

                {/* Bio */}
                <div className="mt-4">
                  <p>{data?.biography || 'Sorry no biography yet...'}</p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex mt-8 gap-2 md:w-1/2">
                  <a
                    className="border-2 border-gray-500 px-2 py-1 rounded-md text-sm text-center w-full"
                    target="_blank" rel="noopener noreferrer"
                    href={`https://www.imdb.com/name/${data?.imdb_id}`}
                  >
                    IMDB <i className="uil uil-film"></i>
                  </a>
                  <button
                    className="border-2 border-gray-500 px-2 py-1 rounded-md text-sm text-center w-full"
                    onClick={() => navigate(-1)}
                  >
                    Back <i className="uil uil-arrow-left"></i>
                  </button>
                </div>
              </div>

            </div>

            {/* Movies performed by actor */}
            <div className="mt-8">
              <h2 className="font-semibold text-center text-3xl lg:text-4xl">
                Movies
              </h2>
              <div className="mt-8">
                {
                  isFetchingMovies
                    ? <Loader />
                    : movies.results.length > 0
                      ? <>
                        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                          {
                            movies.results.map(movie => (
                              <MovieCard key={movie.id} movie={movie} />
                            ))
                          }
                        </div>
                        <Pagination currentPage={page} setPage={setPage} totalPages={movies?.total_pages} />
                      </>
                      : <span>Unable to find any other movie !</span>
                }
              </div>
            </div>
          </>
        }
      </div>
    </main>
  )
}

export default Actors
