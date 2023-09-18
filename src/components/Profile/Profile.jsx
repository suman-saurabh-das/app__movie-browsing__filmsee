import React from 'react'

function Profile({ showSidebar }) {
  const logout = () => {
    localStorage.clear()
    window.location.href = '/'
  }
  const favoriteMovies = []

  return (
    <main className={`main-container 
    ${showSidebar
        ? 'overflow-y-hidden bg-black/[0.5] dark:bg-black/[0.7]'
        : 'overflow-y-scroll'}`}
    >
      <div className="p-4 pt-6 sm:p-6 lg:p-8">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-2xl lg:text-3xl">My Profile</h3>
          <button 
            className="login-button rounded-md px-3 lg:px-5 py-2 lg:font-semibold text-sm lg:text-base"
            onClick={logout}
          >
            Logout <i className="uil uil-signout lg:text-xl"></i>
          </button>
        </div>
        <div className="my-8">
          {
            !favoriteMovies.length
              ? <h4 className="">Add favorites or watchlist some movies to see them here !</h4>
              : <div>Favorite movies</div>
          }
        </div>
      </div>
    </main>
  )
}

export default Profile
