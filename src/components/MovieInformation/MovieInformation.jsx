import React from 'react'

function MovieInformation({ showSidebar }) {
  return (
    <main className={`main-container 
    ${showSidebar
        ? 'overflow-y-hidden bg-black/[0.5] dark:bg-black/[0.7]'
        : 'overflow-y-scroll'}`}
    >
      Movie Information
    </main>
  )
}

export default MovieInformation
