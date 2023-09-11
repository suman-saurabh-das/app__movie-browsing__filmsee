import React from 'react'
import appLogoDark from '../../assets/Navbar/appLogoDark.png'
import appLogoLight from '../../assets/Navbar/appLogoLight.png'
import SideBar from '../SideBar/SideBar'
import { Link } from 'react-router-dom'

function NavBar({ darkTheme, setDarkTheme, showSidebar, setShowSidebar }) {

  return (
    <main>
      {/* Top bar - START */}
      <div className="fixed bg-bgLightPrimary dark:bg-bgDarkSecondary duration-500 h-32 sm:h-24 transition-all dark:text-white w-full 2xl:max-w-[1920px] mx-auto z-10">
        <div className="flex items-center justify-between max-w-[90%] mx-auto pt-3 sm:pt-6">
          {/* App Logo Container - START */}
          <Link to="/">
            <img
              className="w-32 sm:w-36 md:w-40" src={`${darkTheme ? appLogoLight : appLogoDark}`}
              alt="Filmsee Logo"
            />
          </Link>
          {/* App Logo Container - END */}

          {/* Hamburger menu & Search Bar container - START */}
          <div className="absolute sm:static flex items-center justify-center gap-6 bottom-4 w-[90%] sm:w-[50%]">
            {/* Hamburger Icon */}
            <button
              id="sidebarToggleBtn"
              className="sm:hidden"
              onClick={() => setShowSidebar(prevShowSidebar => !prevShowSidebar)}
            >
              {
                showSidebar
                  ? <i class="uil uil-times text-2xl"></i>
                  : <i className="uil uil-bars text-2xl"></i>
              }
            </button>

            {/* Search Bar */}
            <div className="flex items-center border-b border-black dark:border-white w-full">
              <i className="uil uil-search"></i>
              <input
                className="bg-transparent outline-none p-2"
                type="text"
              />
            </div>
          </div>
          {/* Hamburger menu & Search Bar container - END */}

          {/* Dark Theme and Login Button container - START */}
          <div className="flex gap-6">
            {/* Dark Theme Button */}
            <button onClick={() => setDarkTheme(!darkTheme)}>
              {
                darkTheme
                  ? <i className="uil uil-sunset text-white text-2xl"></i>
                  : <i className="uil uil-moonset text-2xl"></i>
              }
            </button>

            {/* Login Button */}
            <button
              className="border-2 border-gray-500 dark:border-white flex gap-3 items-center justify-between px-2 lg:px-3 py-1 rounded-full lg:rounded-lg">
              <span className="font-semibold hidden lg:block">
                Login
              </span>
              <i className="uil uil-user text-xl"></i>
            </button>
          </div>
          {/* Dark Theme and Login Button container - END */}
        </div>
      </div>
      {/* Top bar - END */}

      <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </main>
  )
}

export default NavBar
