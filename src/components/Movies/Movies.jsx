import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'

import { useGetMoviesQuery } from '../../services/TMDB'

function Movies({ showSidebar }) {
  const {data} = useGetMoviesQuery()
  console.log(data);

  return (
    <main className={`dark:bg-bgDarkPrimary h-[100vh] pt-32 sm:pt-24 sm:ml-64 text-black dark:text-white transition-all duration-500 ${showSidebar ? 'overflow-y-hidden bg-black/[0.5] dark:bg-black/[0.7]' : 'overflow-y-scroll'}`}>
      <div className="p-4">

      </div>
    </main>
  )
}

export default Movies
