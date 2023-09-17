import React from 'react'

function Rating({rating}) {
  return (
    <>
      {
        Array.from({ length: 5 }, (el, index) => {
          let number = index + 0.5
          return (
            <span key={index}>
              {// Logic : rating = 4.4, i+1 = 1, n = 0.5 (loop over to get rating)
                (rating / 2) >= index + 1
                  ? (<i className="uis uis-star text-yellow-500"></i>)
                  : rating / 2 >= number
                    ? (<i className="uis uis-star-half-alt text-yellow-500"></i>)
                    : (<i className="uil uil-star text-yellow-500"></i>)
              }
            </span>
          )
        })
      }
    </>
  )
}

export default Rating
