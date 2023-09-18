import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectGenreIdOrCategoryName } from '../../features/currentGenreIdOrCategoryName'
import { useGetMovieQuery, useGetRecommendationsQuery, useGetUserMovieListQuery } from '../../services/TMDB'
import { userSelector } from '../../features/auth'

import genreIcons from '../../assets/genres'
import Loader from '../Common/Loader'
import Rating from '../Common/Rating'
import MovieCard from './MovieCard'
import TrailerModal from './TrailerModal'

function MovieInformation({ showSidebar }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()
  const { user } = useSelector(userSelector)
  const { id } = useParams()
  const { data, isFetching, error } = useGetMovieQuery(id)
  const { data: recommendations, isFetching: isFetchingRecommendations } = useGetRecommendationsQuery({ movie_id: id, list: '/recommendations' })

  const { data: favoriteMovies } = useGetUserMovieListQuery({ listName: '/favorite/movies', account_id: user.id, session_id: localStorage.getItem('session_id'), page: 1 })
  const { data: watchlistMovies } = useGetUserMovieListQuery({ listName: '/watchlist/movies', account_id: user.id, session_id: localStorage.getItem('session_id'), page: 1 })

  const [isMovieFavorited, setIsMovieFavorited] = useState(false)
  const [isWatchlisted, setIsWatchlisted] = useState(false)

  useEffect(() => {
    setIsMovieFavorited(!!favoriteMovies?.results?.find((movie) => movie?.id === data?.id))
  }, [favoriteMovies, data])
  useEffect(() => {
    setIsWatchlisted(!!watchlistMovies?.results?.find((movie) => movie?.id === data?.id))
  }, [watchlistMovies, data])

  const addToFavorites = async () => {
    axios.post(`https://api.themoviedb.org/3/account/${user.id}/favorite?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${localStorage.getItem('session_id')}`, {
      media_type: 'movie',
      media_id: id,
      favorite: !isMovieFavorited,
    })
    setIsMovieFavorited(prevVal => !prevVal)
  }

  const addToWatchlist = async () => {
    axios.post(`https://api.themoviedb.org/3/account/${user.id}/watchlist?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${localStorage.getItem('session_id')}`, {
      media_type: 'movie',
      media_id: id,
      watchlist: !isWatchlisted,
    })
    setIsWatchlisted(prevVal => !prevVal)
  }

  return (
    <main className={`main-container 
    ${showSidebar
        ? 'overflow-y-hidden bg-black/[0.5] dark:bg-black/[0.7]'
        : 'overflow-y-scroll'}`}
    >
      <div className="p-4 pt-8 sm:p-6 lg:p-8">
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
            {/* Movie image & information container */}
            <div className="grid gap-8 lg:gap-0 lg:grid-cols-3">

              {/* Image container */}
              <div>
                <img
                  alt={data.title}
                  src={data.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                    : 'https://murphys-movies.vercel.app/movie-poster-placeholder.svg'}
                  className="shadow-lg shadow-slate-900 rounded-lg object-contain mx-auto w-[80%] max-w-xs"
                />
              </div>

              {/* Information container */}
              <div className="mx-auto w-[90%] lg:col-span-2">
                {/* Title */}
                <h2 className="font-semibold text-center text-3xl lg:text-4xl">
                  {data?.title} ({data.release_date.split('-')[0]})
                </h2>

                {/* Tag line */}
                <h3 className="font-semibold mt-6 text-center lg:text-lg">
                  {data?.tagline}
                </h3>

                {/* Rating, Duration & Language */}
                <div className="flex justify-between sm:justify-around items-center mt-8">
                  <div>
                    <Rating rating={data?.vote_average} />
                    &ensp;
                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-semibold">
                      {data?.vote_average} / 10
                    </span>
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-semibold">
                      <i className="uil uil-language text-xl"></i>
                      {`: ${data.spoken_languages[0].name}`}
                    </span>
                  </div>
                </div>

                {/* Genres */}
                <div className="flex items-center justify-around mt-8">
                  {
                    data?.genres?.map(genre => (
                      <Link
                        key={genre.id}
                        className="flex flex-col sm:flex-row gap-2 items-center justify-center"
                        onClick={() => dispatch(selectGenreIdOrCategoryName(genre?.id))}
                        to="/"
                      >
                        <img
                          className="duration-500 dark:invert hover:rotate-[360deg] transition-all w-6"
                          src={genreIcons[genre?.name.toLowerCase()]}
                          alt="genre-icon"
                        />
                        {genre?.name}
                      </Link>
                    ))
                  }
                </div>

                {/* Overview */}
                <div className="mt-8">
                  <h3 className="font-semibold mb-4 text-xl lg:text-2xl">
                    Overview
                  </h3>
                  <p>{data?.overview}</p>
                </div>

                {/* Top cast */}
                <div className="mt-8">
                  <h3 className="font-semibold mb-8 text-xl lg:text-2xl">
                    Top Cast
                  </h3>
                  <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 xl:grid-cols-6">
                    {
                      data && data.credits?.cast?.map((character, i) => (
                        character.profile_path &&
                        <Link
                          key={character.id}
                          to={`/actors/${character.id}`}
                        >
                          <img
                            className="object-cover rounded-lg max-w-[7rem] mx-auto mb-2"
                            src={`https://image.tmdb.org/t/p/w500${character.profile_path}`}
                            alt={character?.name}
                          />
                          <p className="text-xs sm:text-sm text-center">
                            {character?.name}
                          </p>
                          <p className="text-xs sm:text-sm text-center text-gray-500 dark:text-gray-400">
                            {character?.character.split('/')[0]}
                          </p>
                        </Link>
                      )).slice(0, 6)
                    }
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="mt-8">
                  <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 xl:grid-cols-6">
                    <a
                      className="nav-button"
                      target="_blank" rel="noopener noreferrer"
                      href={data?.homepage}
                    >
                      Website <i className="uil uil-globe"></i>
                    </a>
                    <a
                      className="nav-button"
                      target="_blank" rel="noopener noreferrer"
                      href={`https://www.imdb.com/title/${data?.imdb_id}`}
                    >
                      IMDB <i className="uil uil-film"></i>
                    </a>
                    <button
                      className="nav-button"
                      href="#"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Trailer <i className="uil uil-youtube"></i>
                    </button>
                    <button
                      className={`nav-button`}
                      onClick={addToFavorites}
                    >
                      Favorite <i className={`uil uil-heart ${isMovieFavorited ? "text-red-600" : ""}`}></i>
                    </button>
                    <button
                      className={`nav-button`}
                      onClick={addToWatchlist}
                    >
                      Watchlist <i className={`uil uil-10-plus ${isWatchlisted ? "text-red-600" : ""}`}></i>
                    </button>
                    <Link
                      className="nav-button"
                      to="/"
                    >
                      Back <i className="uil uil-arrow-left"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Suggestions container - You might also like */}
            <div className="mt-16">
              <h2 className="font-semibold text-center text-3xl lg:text-4xl">
                You might also like
              </h2>
              <div className="mt-8">
                {
                  isFetchingRecommendations
                    ? <Loader />
                    : recommendations.results.length > 0
                      ? <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                        {
                          recommendations.results.slice(0, 10).map(movie => (
                            <MovieCard key={movie.id} movie={movie} />
                          ))
                        }
                      </div>
                      : <span>Unable to find similar movies !</span>
                }
              </div>
            </div>

            {/* Movie trailer modal */}
            <div>
              {
                data?.videos?.results.length > 0
                  ? <TrailerModal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    videos={data.videos}
                  />
                  : <p>No trailer found !</p>
              }
            </div>
          </>
        }
      </div>
    </main>
  )
}

export default MovieInformation
