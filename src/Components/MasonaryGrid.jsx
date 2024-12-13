import React from 'react'

const images = [
    '/recep.jpg',
    '/header.jpg',
    '/1.jpg',
    '/flower.jpg',
    '/palash.webp',
    '/baranti.webp',
    '/ayodhya.webp',
    '/mithonDam.webp',
    '/room1.jpg',
    '/service.jpg',
];


function MasonaryGrid() {
  return (
    <div className='columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4'>
            {images.map((src, index) => (
                    <div key={index} className='mb-4 break-inside-avoid'>
                        <img src={src} className='w-full object-cover rounded-lg'/>
                    </div>
            ))
            }
        </div>
  )
}

export default MasonaryGrid