import React from 'react'
import { useEffect, useState } from 'react';


function hero() {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);  // Trigger the animation after 1 second
    }, 1000);  // 1000ms delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='h-[80vh] flex items-center justify-center' id='Home'>
      <div className={`h-full flex flex-col justify-start md:justify-center md:items-center items-start p-2 transition-transform duration-1000 transform ${isLoaded ? 'scale-100' : 'scale-0'}`}>
        <p className='text-slate-200 text-lg sm:text-xl p-2'>Simple-Unique-Friendly</p>
        <h1 className='text-white text-4xl sm:text-5xl md:text-6xl font-semibold capitalize p-2'>Make yourself at home</h1> 
        <h1 className='text-white text-4xl sm:text-5xl md:text-6xl font-semibold capitalize p-2'>in our <span className='text-primary'>guest house</span>.</h1>
      </div>
      
    </section>
      
  )
}

export default hero
