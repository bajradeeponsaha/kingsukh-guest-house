import React from 'react'
import Main from './Components/Main'
import About from './Components/About'
import LivingRooms from './Components/LivingRooms'
import Services from './Components/Services'
import Gallary from './Components/Gallary'
import Footer from './Components/Footer'
import ContactForm from './Components/ContactForm'
import Review from './Components/Review'
import Booking from './Components/Booking'


function App() {
  return (
    <div className='mainApp overflow-hidden'>
      <Main />
      <Booking />
      <About />
      <LivingRooms />
      <Services />
      <Review />
      <Gallary />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
