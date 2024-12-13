import React, { useState } from 'react'
import logo from '../assets/images/logoRmBg.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // ----------- Navbar --------------
    <nav className='relative flex justify-between items-center h-20 w-full px-2 md:px-10 py-2'>
      <div className="py-2 pl-2">
        <a href="https://api.whatsapp.com/send?phone=919007062180" className='flex items-center justify-start gap-0 w-fit px-2'>
            <img src={logo} alt="Logo" className='size-14 border-2 rounded-full border-primary pt-2'/>
            <span className='text-primary hidden font-semibold text-sm xl:flex pl-0.5'>ingsukh Guest House</span>
          </a>
      </div>
      

      {/* Nav Options */}
      <div className="nav-options md:px-2 hidden md:flex md:justify-evenly md:items-center md:gap-3 md:mx-2 lg:flex lg:justify-center lg:gap-6 w-fit">
        {["Home", "About", "Rooms", "Services", "Gallary", "Contact"].map((item, index) => (
          <a key={index} href={`#${item}`} className='text-md lg:text-lg text-white hover:text-pink-400 duration-200 hover:border-b-2 hover:border-b-pink-400 hover:border-l-2 hover:border-l-pink-400 hover:p-2'>{item}</a>
        ))}
      </div>

      {/* Buttons & Menu Option */}
      <div className="w-fit flex justify-end p-2 m-1">
        <button className='hidden sm:block bg-pink-600 rounded-lg px-4 py-2 text-white uppercase hover:shadow-md hover:text-primary hover:bg-white hover:border hover:border-zinc-900'>
          <a href="#Booking">Book Now</a>
        </button>
        <button
            onClick={toggleMenu}
            className="text-primary focus:outline-none sm:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
      </div>
      

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full right-0 w-full sm:hidden bg-primary z-10 rounded-lg px-4">
          {["Home", "About", "Rooms", "Services", "Gallary", "Contact"].map((item, index) =>(
            <li className="border-b border-white text-gray-50 p-2.5">
              <a key={index} href={`#${item}`} className="block py-2 px-4 hover:bg-gray-600">
                {item}
              </a>
          </li>
          ))}
        </ul>
      )}
      
    </nav>
  )
}

export default Navbar
