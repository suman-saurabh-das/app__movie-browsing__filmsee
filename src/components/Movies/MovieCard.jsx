import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../Common/Rating'

function MovieCard({ movie }) {
  return (
    <div className="p-3">
      <Link to={`/movie/${movie.id}`}>

        {/* Image Container */}
        <div className="mx-auto rounded-lg hover:scale-105 shadow-md shadow-zinc-900 transition-all duration-300 w-full">
          <img
            alt={movie.title}
            src={movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : 'https://murphys-movies.vercel.app/movie-poster-placeholder.svg'}
            className="rounded-lg w-full"
          />
        </div>

        {/* Rating Container */}
        <div className="pt-3 text-center">
          <Rating rating={movie.vote_average} />
        </div>

        {/* Movie name Container */}
        <div className="text-center">
          {movie.title.length > 25 ? `${movie.title.slice(0, 25)}...` : movie.title}
          {/* {movie.title} */}
        </div>

      </Link>
    </div>
  )
}

export default MovieCard
