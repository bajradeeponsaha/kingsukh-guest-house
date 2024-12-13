import React from 'react'

function Heading({heading}) {
  return (
    <div className='flex justify-center items-center'>
        <h1 className='font-bold text-4xl my-4 capitalize md:text-5xl p-2 text-wrap'>{heading}</h1>
    </div>
  )
}

export default Heading