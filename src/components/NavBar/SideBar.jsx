import React from 'react'
import SidebarCategories from './SidebarCategories'
import { useGetGenresQuery } from '../../services/TMDB'


function SideBar({ showSidebar, setShowSidebar }) {
  const categories = [
    { id: 'popular', name: 'Popular' },
    { id: 'top_rated', name: 'Top rated' },
    { id: 'upcoming', name: 'Upcoming' },
  ]
  const { data, isFetching } = useGetGenresQuery()

  return (
    <div className="text-black dark:text-white transition-all duration-500">
      {/* Sidebar - START */}
      <nav className={`${showSidebar ? '' : '-translate-x-full'} sm:translate-x-0 bg-black/[0.5] fixed h-[100vh] overflow-y-auto top-0 w-full sm:w-56 z-40`}>
        <div className={`${showSidebar ? '' : '-translate-x-56'} sm:translate-x-0 bg-white dark:bg-bgDarkPrimary mt-32 sm:mt-24 w-56`}>

          {/* Categories 1 - START */}
          <div className="flex flex-col">
            <h3 className="p-4 text-sm">Categories</h3>
            {
              categories.map(({ id, name }) => (
                <SidebarCategories key={id}
                  id={id} 
                  name={name} 
                  setShowSidebar={setShowSidebar}
                />
              ))
            }
          </div>
          {/* Categories 1 - END */}

          <hr className="my-2 mx-auto w-[90%]" />

          {/* Categories 2 - START */}
          <div className="flex flex-col">
            <h3 className="p-4 text-sm">Genres</h3>
            {
              isFetching
                ? <span>Loading...</span>
                : data.genres.map(({ id, name }) => (
                  <SidebarCategories key={id}
                    id={id} 
                    name={name} 
                    setShowSidebar={setShowSidebar} 
                  />
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
