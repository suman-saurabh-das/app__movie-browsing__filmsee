import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from '../Common/Loader'
import Rating from '../Common/Rating'
import genreIcons from '../../assets/genres'
import { useDispatch } from 'react-redux'
import { selectGenreIdOrCategoryName } from '../../features/currentGenreIdOrCategoryName'
import { useGetMovieQuery } from '../../services/TMDB'
import { useGetRecommendationsQuery } from '../../services/TMDB'
import MovieCard from './MovieCard'

function MovieInformation({ showSidebar }) {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { data, isFetching, error } = useGetMovieQuery(id)
  const { data: recommendations, isFetching: isFetchingRecommendations, error: errorFetchingRecommendations } = useGetRecommendationsQuery({ movie_id: id, list: '/recommendations' })
  console.log(recommendations);

  const isFavorited = false
  const isWatchlisted = false
  const addToFavorites = () => {

  }
  const addToWatchlist = () => {

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
            {/* Movie Image & Information container */}
            <div className="grid gap-8 lg:gap-0 lg:grid-cols-3">

              {/* Image Container */}
              <div className="">
                <img
                  alt={data.title}
                  src={data.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                    : 'https://murphys-movies.vercel.app/movie-poster-placeholder.svg'}
                  className="shadow-lg shadow-slate-900 rounded-lg object-contain mx-auto w-[80%]"
                />
              </div>

              {/* Information Conatiner */}
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
                    &emsp;
                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-semibold">
                      {data?.vote_average} / 10
                    </span>
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-semibold">
                      {data?.runtime}m{data?.spoken_languages.length > 0 ? ` / ${data.spoken_languages[0].name}` : ""}
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
                          className="w-6 dark:invert"
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
                  {/* Button group 1 */}
                  <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 xl:grid-cols-6">
                    <button
                      className="border-2 border-gray-500 px-2 py-1 rounded-md text-sm"
                      target="_blank" rel="noopener noreferrer"
                      href={data?.homepage}
                    >
                      Website <i className="uil uil-globe"></i>
                    </button>
                    <button
                      className="border-2 border-gray-500 px-2 py-1 rounded-md text-sm"
                      target="_blank" rel="noopener noreferrer"
                      href={`https://www.imdb.com/title/${data?.imdb_id}`}
                    >
                      IMDB <i className="uil uil-film"></i>
                    </button>
                    <button
                      className="border-2 border-gray-500 px-2 py-1 rounded-md text-sm"
                      href="#"
                      onClick={() => { }}
                    >
                      Trailer <i className="uil uil-youtube"></i>
                    </button>
                    <button
                      className={`border-2 border-gray-500 px-2 py-1 rounded-md text-sm ${isFavorited ? "bg-gray-200 text-black" : ""}`}
                      onClick={addToFavorites}
                      disabled={isFavorited}
                    >
                      Favorite <i className="uil uil-heart"></i>
                    </button>
                    <button
                      className={`border-2 border-gray-500 px-2 py-1 rounded-md text-sm ${isWatchlisted ? "bg-gray-200 text-black" : ""}`}
                      onClick={addToWatchlist}
                      disabled={isWatchlisted}
                    >
                      Watchlist <i className="uil uil-10-plus"></i>
                    </button>
                    <Link
                      className="border-2 border-gray-500 px-2 py-1 rounded-md text-sm text-center"
                      to="/"
                      onClick={() => { }}
                    >
                      Back <i className="uil uil-arrow-left"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Suggestions Container - You might also like */}
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
          </>
        }
      </div>
    </main>
  )
}

export default MovieInformation