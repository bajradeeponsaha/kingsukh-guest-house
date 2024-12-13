import React from 'react'

function Card({children, imgSrc, ...props}) {
  return (
    <div {...props} className='relative max-w-xs overflow-hidden rounded-2xl shadow-lg group'>
        <img src={imgSrc} className='h-[20rem] sm:h-[30rem] transition-transform group-hover:scale-110 duration-400'/>
        <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent'>
            <div className='w-full text-white p-4'>{children}</div>
        </div>
        
    </div>
  )
}

export default Card