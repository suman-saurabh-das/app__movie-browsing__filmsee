import React from 'react'
import MovieCard from './MovieCard'

function MovieList({ movies }) {
  if (!movies.results.length) {
    return <span>
      No movies match that name.<br />
      Please search for something else.
    </span>
  }
  return (
    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {movies.results.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MovieList
