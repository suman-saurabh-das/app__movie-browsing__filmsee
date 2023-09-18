import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import appLogo from '../../assets/navbar/appLogoDark.png'
import { Link } from 'react-router-dom'
import SideBar from './SideBar'
import SearchBar from './SearchBar'

import { fetchToken, createSessionId, moviesApi } from '../../utils'
import { setUser, userSelector } from '../../features/auth'

function NavBar({ darkTheme, setDarkTheme, showSidebar, setShowSidebar }) {
  const { isAuthenticated, user } = useSelector(userSelector)
  const token = localStorage.getItem('request_token')
  const sessionIdFromLocalStorage = localStorage.getItem('session_id')
  const dispatch = useDispatch()

  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          const { data: userData } = await moviesApi.get(`/account?session_id=${sessionIdFromLocalStorage}`)
          dispatch(setUser(userData))
        } else {
          const sessionId = await createSessionId()
          const { data: userData } = await moviesApi.get(`/account?session_id=${sessionId}`);
          dispatch(setUser(userData))
        }
      }
    }
    logInUser()
  }, [token, dispatch, sessionIdFromLocalStorage])

  return (
    <>
      {/* Top bar - START */}
      <div className="fixed bg-gradient-to-b from-sky-400 via-cyan-400 to-cyan-300 dark:from-black dark:via-zinc-900 dark:to-zinc-800 h-32 sm:h-24 rounded-br-lg shadow-md shadow-black transition-all duration-500 dark:text-white w-full 2xl:max-w-[1920px] mx-auto z-40">
        <div className="flex items-center justify-between max-w-[90%] md:max-w-[95%] mx-auto pt-3 sm:pt-6">
          {/* App Logo Link - START */}
          <Link to="/">
            <img
              className="w-32 sm:w-36 md:w-40 dark:invert"
              src={appLogo}
              alt="Filmsee Logo"
            />
          </Link>
          {/* App Logo Link - END */}

          {/* Hamburger menu & Search Bar container - START */}
          <div className="absolute sm:static flex items-center justify-between gap-6 bottom-4 w-[90%] sm:w-[50%]">
            {/* Hamburger Icon */}
            <button
              id="sidebarToggleBtn"
              className="sm:hidden"
              onClick={() => setShowSidebar(prevShowSidebar => !prevShowSidebar)}
            >
              {
                showSidebar
                  ? <i className="uil uil-times text-2xl"></i>
                  : <i className="uil uil-bars text-2xl"></i>
              }
            </button>

            {/* Search Bar */}
            <SearchBar />
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
            {
              !isAuthenticated
                ? <button
                  className="login-button"
                  onClick={fetchToken}
                >
                  <span className="font-semibold hidden lg:block">Login</span>
                  <i className="uil uil-user text-xl"></i>
                </button>
                : <Link className="login-button"
                  to={`/profile/${user.id}`}
                >
                  <span className="font-semibold hidden lg:block">My Movies</span>
                  <i className="uil uil-user text-xl"></i>
                </Link>
            }
          </div>
          {/* Dark Theme and Login Button container - END */}
        </div>
      </div>
      {/* Top bar - END */}

      <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </>
  )
}

export default NavBar
