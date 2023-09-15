import React from 'react'
import loadingImage from '../../assets/common/loading.gif'

function Loader({ width }) {
  return (
    <div>
      <img
        className={`dark:invert bg-transparent relative top-1/2 left-1/2 -translate-x-1/2 ${width === 7 ? '' : 'translate-y-1/2'} w-${4 * width} lg:w-${6 * width}`}
        src={loadingImage}
        alt="Loading..." />
    </div>
  )
}

export default Loader
