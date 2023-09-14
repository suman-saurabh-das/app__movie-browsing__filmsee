import React from 'react'
import { Link } from 'react-router-dom'

function MovieCard({ movie }) {
  return (
    <div className="p-5 sm:p-3">
      <Link to={`/movie/${movie.id}`}>
        {/* Image Container */}
        <div className="mx-auto rounded-lg hover:scale-105 shadow-md shadow-slate-900 transition-all duration-300 w-full">
          <img
            alt={movie.title}
            src={movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : 'https://murphys-movies.vercel.app/movie-poster-placeholder.svg'}
            className="rounded-lg w-full"
          />
        </div>
        {/* Rating Container */}
        <div className="pt-3 text-yellow-500 text-center">
          {
            Array.from({length: 5}, (el, index) => {
              let number = index + 0.5
              return (
                <span key={index}>
                  {// Logic : rating = 4.4, i+1 = 1, n = 0.5 (loop over to get rating)
                    (movie.vote_average/2) >= index + 1 
                      ? (<i className="uis uis-star"></i>) 
                      : movie.vote_average/2 >= number 
                      ? (<i className="uis uis-star-half-alt"></i>)
                      : (<i className="uil uil-star"></i>) 
                  }
                </span>
              )
            })
          }
        </div>
        {/* Movie name Container */}
        <div className="text-center">
          {movie.title.length > 25 ? `${movie.title.slice(0,25)}...` : movie.title}
          {/* {movie.title} */}
        </div>
      </Link>
    </div>
  )
}

export default MovieCard
