import React from 'react'
import SectionHeading from './SectionHeading'
import { MapPin,Mail, PhoneCall, Facebook, Instagram, Twitter, Linkedin  } from 'react-feather'
import SendMessage from './SendMessage'

function ContactForm() {
  return (
    <section className='setContainer shadow-xl shadow-pink-300 rounded-xl' id='Contact'>
        <SectionHeading text={"Get in Touch"} />
        <div className='flex flex-col p-4 md:flex-row md:px-10'>
            <div className='md:relative bg-primary text-white p-6 rounded-md md:rounded-tl-xl md:rounded-bl-xl md:rounded-tr-none md:rounded-br-none shadow-lg md:w-[50%]'>
                <h2 className='text-xl sm:text-2xl font-semibold py-2'>Contact Info</h2>
                <ul className='flex flex-col justify-center items-start gap-4 text-md lg:text-lg'>
                    <li>
                        <div className='flex items-center space-x-3'>
                            <MapPin className='w-6 h-6 flex-shrink-0'/>
                            <p className='flex-1'>Beside Barshal Water Tank,Manpur, Barhanti, West Bengal 723156</p>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center space-x-3 md:space-x-4'>
                            <Mail className='w-6 h-6 flex-shrink-0' />
                            <p className='flex-1'>kkghosh0099@gmail.com</p>
                        </div>
                    </li>
                    <li>
                        <div className='flex items-center space-x-3'>
                            <PhoneCall className='w-6 h-6 flex-shrink-0' />
                            <p className='flex-1'>+91-9007062180</p>
                        </div>
                    </li>
                </ul>
                <div className='md:absolute md:bottom-0 md:left-0 md:pl-4 md:pb-4 flex space-x-4 pt-10'>
                    <Facebook />
                    <Instagram />
                    <Twitter />
                    <Linkedin />
                </div>
            </div>
            <div className='w-[100%] h-[25rem] p2 overflow-hidden rounded-lg md:rounded-none'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7312.985387183954!2d86.85843856665647!3d23.586656873083342!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1733919765705!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='h-full w-full overflow-hidden'/>
            </div>
        </div>
        <SendMessage />
    </section>
  )
}

export default ContactForm