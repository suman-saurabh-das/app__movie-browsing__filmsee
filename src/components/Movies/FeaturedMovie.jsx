import React from 'react'
import { Link } from 'react-router-dom'

function FeaturedMovie({ movie }) {

  if (!movie) return null

  return (
    <div className="relative p-3 lg:p-3 mb-6 text-white -z-10">
      <Link
        to={`/movie/${movie.id}`}
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})` }}
        className="block relative bg-blend-darken bg-black/[0.575] h-[490px] bg-cover rounded-lg shadow-md shadow-zinc-900 w-full"
      >
        <div className="absolute bottom-0 m-4 md:m-8 lg:w-2/5">
        <h1 className="font-bold text-3xl mb-4">{movie.title}</h1>
        <p className="text-sm md:text-base">{movie.overview}</p>
        </div>
      </Link>
    </div>
  )
}

export default FeaturedMovie
