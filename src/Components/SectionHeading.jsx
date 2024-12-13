import React from 'react'

function SectionHeading({text}) {
  return (
    <div className='w-full h-fit flex justify-center items-center'>
        <div className='horzLine'></div>
        <p className='text-lg uppercase p-4'>{text}</p>
        <div className='horzLine'></div>
    </div>
  )
}

export default SectionHeading