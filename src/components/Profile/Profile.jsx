import React from 'react'
import { useSelector } from 'react-redux'

function Profile({ showSidebar }) {
  const userInformation = useSelector(state => state.user)
  return (
    <main className={`main-container 
    ${showSidebar
        ? 'overflow-y-hidden bg-black/[0.5] dark:bg-black/[0.7]'
        : 'overflow-y-scroll'}`}
    >
      Profile - {userInformation.user.username}
    </main>
  )
}

export default Profile
