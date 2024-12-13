import React from 'react'
import outSide from "../assets/images/out.jpg"
import SectionHeading from './SectionHeading'

function About() {
  return (
    <section className='mx-2 md:mx-10 flex flex-col gap-4 pt-20 pb-4' id='About'>
        <SectionHeading text={"About us"} />

        <div className='sm:flex sm:justify-center sm:items-start sm:gap-10'>
            <div className='sm:w-1/2 sm:flex sm:flex-col sm:justify-center sm:items-start sm:gap-4 md:gap-6 sm:pr-4 text-wrap'>
                <h1 className='font-bold text-4xl my-4 capitalize md:text-5xl'>The best holidays start here!</h1>
                <p  className='text-slate-400 text-md text-justify md:text-lg lg:text-xl'>Experience a peaceful retreat at Kingsukh Guest House, nestled amidst the stunning Biharinath, Baranti, Susunia, and Joychandi Hills, along with nearby Maithon and Panchat Dams. Enjoy comfortable accommodations, delicious meals, and a serene garden oasis. Discover the natural beauty of Purulia and create lasting memories in our warm, welcoming haven.</p>
            </div>
            <div className='sm:w-1/2 py-10 pr-10 sm:flex sm:justify-center'>
                <img src={outSide} alt="Front view of Guesthouse from outside" className='md:size-[32rem] sm:size-[28rem] size-96 rounded-tl-lg rounded-br-lg object-fill'/>
            </div>

        </div>
    </section>
  )
}

export default About