import React from 'react'
import { Link } from 'react-router-dom'

function MovieCard({ movie }) {
  console.log(movie);
  return (
    <div className="p-5 sm:p-3">
      <Link to={`/movie/${movie.id}`}>
        {/* Image Container */}
        <div className="mx-auto rounded-lg w-full hover:scale-105 transition-all duration-300">
          <img
            alt={movie.title}
            src={movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : 'https://www.fillmurray.com/200/300'}
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
                      ? (<i class="uis uis-star"></i>) 
                      : movie.vote_average/2 >= number 
                      ? (<i class="uis uis-star-half-alt"></i>)
                      : (<i class="uil uil-star"></i>) 
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
