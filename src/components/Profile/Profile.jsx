import React from 'react'

function Profile({ showSidebar }) {
  return (
    <main className={`main-container 
    ${showSidebar
        ? 'overflow-y-hidden bg-black/[0.5] dark:bg-black/[0.7]'
        : 'overflow-y-scroll'}`}
    >
      Profile
    </main>
  )
}

export default Profile
