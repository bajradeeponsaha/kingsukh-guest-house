import React from 'react'

function Review() {
  return (
    <section className='setcontainer align-center flex justify-center'>
        <div className='w-[70%] flex flex-col justify-center items-center sm:flex-row shadow-lg rounded-xl p-4 md:p-10 gap-6 md:gap-16'>
            <div className='p-4'>
                <h1 className='text-3xl md:text-6xl font-semibold'>100+</h1>
                <p className='text-md md:text-lg text-gray-400 py-4'>Bookings Completed</p>
            </div>
            <div>
                <h1 className='text-3xl md:text-6xl font-semibold'>150+</h1>
                <p className='text-md md:text-lg text-gray-400 py-4'>Happy Customers</p>
            </div>
        </div>
    </section>
    
  )
}

export default Review