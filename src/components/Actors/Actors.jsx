import React from 'react'

function Actors({showSidebar}) {
  return (
    <main className={`dark:bg-bgDarkPrimary h-[100vh] pt-32 sm:pt-24 sm:ml-64 text-black dark:text-white transition-all duration-500 ${showSidebar ? 'overflow-y-hidden bg-black/[0.5] dark:bg-black/[0.7]' : 'overflow-y-scroll'}`}>
      Actors
    </main>
  )
}

export default Actors
