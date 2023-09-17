import React from 'react'

function TrailerModal({ isModalOpen, setIsModalOpen, videos }) {
  const handleModalClose = (e) => {
    if (e.target.id === "modalWrapper") {
      setIsModalOpen(false)
    }
  }
  return (
    <>
      {
        isModalOpen && <div id="modalWrapper" onClick={handleModalClose} className="absolute top-0 left-0 bg-black/[0.5] h-full w-full">
          <div className="relative top-1/2 left-1/2 right-56 -translate-x-1/2 -translate-y-1/2 h-[50vh] md:h-[65vh] w-[90%] sm:w-4/6 2xl:w-1/2 z-50">
            <button
              className="bg-white p-2 rounded-lg font-bold hover:rotate-90 hover:text-red-600 transition-all duration-300 text-black absolute -bottom-16 left-1/2 -translate-x-1/2"
              onClick={() => setIsModalOpen(false)}>
              <i className="uil uil-times text-4xl"></i>
            </button>
            {
              videos?.results.length > 0
                ? <iframe
                  title="Movie trailer"
                  className="flex items-center justify-center object-cover h-full w-full"
                  allow="autoplay"
                  src={`https://www.youtube.com/embed/${videos.results[0].key}`}
                  frameborder="0"></iframe>
                : <p>No trailer found !</p>
            }
          </div>
        </div>
      }
    </>
  )
}

export default TrailerModal
