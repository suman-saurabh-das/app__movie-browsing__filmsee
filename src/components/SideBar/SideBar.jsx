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
    <div>
      {/* Sidebar - START */}
      <nav className={`${showSidebar ? '' : '-translate-x-64'} sm:translate-x-0 absolute bg-white dark:bg-bgDarkPrimary duration-500 h-[100vh] overflow-y-scroll text-black dark:text-white top-0 transition-all w-64`}>
        <div className='mt-32 sm:mt-24'>
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
