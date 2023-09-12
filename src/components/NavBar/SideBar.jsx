import React from 'react'
import { Link } from 'react-router-dom'

function SideBar({showSidebar, setShowSidebar}) {
  const categories = [
    {label: 'Popular', value: 'popular'},
    {label: 'Top rated', value: 'top_rated'},
    {label: 'Upcoming', value: 'upcoming'},
  ]

  const genres = [
    {label: 'Action', value: 'action'},
    {label: 'Animation', value: 'animation'},
    {label: 'Comedy', value: 'comedy'},
    {label: 'Crime', value: 'crime'},
    {label: 'Horror', value: 'horror'},
    {label: 'History', value: 'history'},
  ]

  return (
    <div className="text-black dark:text-white transition-all duration-300">
      {/* Sidebar - START */}
      <nav className={`${showSidebar ? '' : '-translate-x-full'} sm:translate-x-0 fixed bg-black/[0.5] h-[100vh] overflow-y-auto top-0 w-full sm:w-56 z-40`}>
        <div className={`${showSidebar ? '' : '-translate-x-56'} sm:translate-x-0 bg-white dark:bg-bgDarkPrimary mt-32 sm:mt-24 h-full w-56`}>
          {/* Categories 1 - START */}
          <div className="flex flex-col">
          <h3 className="p-4 text-sm">Categories</h3>
          {
            categories.map(({label, value}) => (
              <Link 
                key={value} to="/" 
                onClick={() => setShowSidebar(false)} 
                className="flex gap-6 pl-4 py-3 text-lg">
                <i className="uil uil-clapper-board text-xl"></i>
                {label}
              </Link>
            ))
          }
          </div>
          {/* Categories 1 - END */}
          
          <hr className="my-2 mx-auto w-[90%]" />

          {/* Categories 2 - START */}
          <div className="flex flex-col">
          <h3 className="p-4 text-sm">Genres</h3>
          {
            genres.map(({label, value}) => (
              <Link 
                key={value} to="/" 
                onClick={() => setShowSidebar(false)} 
                className="flex gap-6 pl-4 py-3 text-lg">
                <i className="uil uil-film text-xl"></i>
                {label}
              </Link>
            ))
          }
          </div>
          {/* Categories 2 - END */}
        </div>
      </nav>
      {/* Sidebar - END */}
    </div>
  )
}

export default SideBar
