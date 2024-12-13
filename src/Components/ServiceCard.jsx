import React from 'react'

function ServiceCard({srvImg, srvTitle}) {
  return (
    <div className='relative rounded-t-full rounded-br-full bg-slate-200 shadow-md size-56 p-4 mx-auto flex flex-col justify-center items-center gap-6'>
        <img src={srvImg} className='size-24'/>
        <p className='absolute bottom-0 left-0 pb-4 pl-2 text-sm sm:text-md font-semibold text-zinc-900 text-wrap'>{srvTitle}</p>
    </div>
  )
}

export default ServiceCard