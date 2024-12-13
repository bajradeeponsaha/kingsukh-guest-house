import React from 'react'
import fb from '../assets/images/facebook.png'
import twitter from '../assets/images/twitter.png'
import instagram from '../assets/images/instagram.png'
import youtube from '../assets/images/youtube.png'

function Footer() {
  return (
    <footer className='bg-zinc-900 px-4 md:px-16 lg:px-28'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 pt-16 px-2 pb-6 md:pb-10 text-gray-500'>
            <div>
                <a><h3 className='footerHeading text-md md:text-lg'>Kingsukh Guest House</h3></a>
                <ul className='text-wrap leading-loose'>
                    <li>Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.</li>
                </ul>
            </div>
            <div>
                <h3 className='footerHeading text-md md:text-lg'>Quick Links</h3>
                <ul className='flex flex-col gap-4'>
                    <li className='hoverFooterElm'>Browse Destinations</li>
                    <li className='hoverFooterElm'>Special Offers & Packages</li>
                    <li className='hoverFooterElm'>Room Types & Amenities</li>
                    <li className='hoverFooterElm'>Customer Reviews & Ratings</li>
                    <li className='hoverFooterElm'>Travel Tips & Guides</li>
                </ul>
                
            </div>
            <div>
                <h3 className='footerHeading text-md md:text-lg'>Our Services</h3>
                <ul className='flex flex-col gap-4'>
                    <li className='hoverFooterElm'>Concierge Assistance</li>
                    <li className='hoverFooterElm'>Flexible Booking Options</li>
                    <li className='hoverFooterElm'>Airport Transfers</li>
                    <li className='hoverFooterElm'>Wellness & Recreation</li>
                </ul>
            </div>
            <div>
                <h3 className='footerHeading text-md md:text-lg'>Contact Us</h3>
                <ul className='flex flex-col gap-4'>
                    <li className='hoverFooterElm'>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</li>
                    <li className='hoverFooterElm'>kkghosh0099@gmail.com</li>
                    <li className='hoverFooterElm'>+91 9007062180</li>
                </ul>
                
                <div className='flex space-x-4 py-2'>
                    <img src={fb} alt="" className='size-6' />
                    <img src={instagram} alt="" className='size-6' />
                    <img src={youtube} alt="" className='size-6' />
                    <img src={twitter} alt="" className='size-6' />
                </div>
            </div>
        </div>
        <div className='text-center border-t border-gray-600 mt-6 p-4 text-gray-300'>
            <p>Copyright © 2024 Kingsukh Guest House. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer