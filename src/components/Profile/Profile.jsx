import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useGetUserMovieListQuery } from '../../services/TMDB'
import { userSelector } from '../../features/auth'

import Loader from '../Common/Loader'
import MovieCard from '../Movies/MovieCard'

function Profile({ showSidebar }) {
  const { user } = useSelector(userSelector)

  const { data: favoriteMovies, isFetching: isFetchingFavoriteMovies, refetch: refetchFavorites } = useGetUserMovieListQuery({ listName: '/favorite/movies', account_id: user.id, session_id: localStorage.getItem('session_id'), page: 1 })

  const { data: watchListMovies, isFetching: isFetchingWatchListMovies, refetch: refetchWatchListed } = useGetUserMovieListQuery({ listName: '/watchlist/movies', account_id: user.id, session_id: localStorage.getItem('session_id'), page: 1 })

  useEffect(() => {
    refetchFavorites()
    refetchWatchListed()
  }, [refetchFavorites, refetchWatchListed])

  const logout = () => {
    localStorage.clear()
    window.location.href = '/'
  }

  return (
    <main className={`main-container 
    ${showSidebar
        ? 'overflow-y-hidden bg-black/[0.5] dark:bg-black/[0.7]'
        : 'overflow-y-scroll'}`}
    >
      <div className="p-4 pt-6 sm:p-6 lg:p-8">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <h3 className="font-semibold text-2xl lg:text-3xl">My Profile - @{user.username}</h3>
          <button
            className="login-button rounded-md px-3 lg:px-5 py-2"
            onClick={logout}
          >
            Logout <i className="uil uil-signout lg:text-xl"></i>
          </button>
        </div>
        <div className="my-8">
          {
            !favoriteMovies?.results?.length && !watchListMovies?.results.length
              ? <h4 className="">Add favorites or watchlist some movies to see them here !</h4>
              : <>
                {/* Favorite movies */}
                {
                  isFetchingFavoriteMovies
                    ? <Loader />
                    : <>
                      <h3 className="font-semibold my-8 text-xl lg:text-2xl">Favorites</h3>
                      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                        {favoriteMovies?.results.map(favMovie => <MovieCard movie={favMovie} />)}
                      </div>
                    </>
                }
                {/* Watch listed movies */}
                {
                  isFetchingWatchListMovies
                    ? <Loader />
                    : <>
                      <h3 className="font-semibold my-8 text-xl lg:text-2xl">Watch-List</h3>
                      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                        {watchListMovies?.results.map(watchListMovie => <MovieCard movie={watchListMovie} />)}
                      </div>
                    </>

                }
              </>
          }
        </div>
      </div>
    </main>
  )
}

export default Profile
