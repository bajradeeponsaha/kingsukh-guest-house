import React from 'react'
import bg from "../assets/images/ayodhya.webp"
import Navbar from "./Navbar"
import HeroSection from './HeroSection'


function Main() {

    const bgImage = {
        backgroundImage : `url(${bg})`,
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
        backgroundPosition : 'center',
    }
  return (
    <main className='h-[70vh] sm:min-h-[90vh]  w-screen' style={bgImage}>
        <Navbar />
        <HeroSection />
    </main>
  )
}

export default Main