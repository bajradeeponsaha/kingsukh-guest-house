import React from 'react'
import SectionHeading from './SectionHeading'
import Heading from './Heading'
import Card from './Card'
import img1 from '../assets/images/small.jpg'
import img2 from '../assets/images/large.jpg'
import { Heart, MessageCircle, Bookmark } from 'react-feather'
import Button from './Button'

function LivingRooms() {
  return (
    <section className='setContainer flex flex-col gap-4' id='Rooms'>
        <SectionHeading text={"Our Living Room"} />
        <div>
            <div>
                <Heading heading={"The Best Holidays Start Here!"} />
            </div>
            <div className='flex flex-col justify-center items-center gap-4 md:flex-row md:gap-12'>
                <Card imgSrc={img1}>
                    <h3 className='text-xl font-bold mb-2'>Cozy Haven Room</h3>
                    <p className='text-sm'>Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.</p>
                    <p>Starting from<span className='font-bold'> Rs. 1000/night</span></p>
                    <div className='mt-4 flex justify-between items-center'>
                        <div className='space-x-4'>
                            <button>
                                <Heart />
                            </button>
                            <button>
                                <MessageCircle />
                            </button>
                            <button>
                                <Bookmark />
                            </button>
                        </div>
                        <div>
                            <Button />
                        </div>
                    </div>
                </Card>
                <Card imgSrc={img2}>
                    <h3 className='text-xl font-bold mb-2'>Spacious Serenity Suite</h3>
                    <p className='text-sm'>Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.</p>
                    <p>Starting from<span className='font-bold'> Rs. 1500/night</span></p>
                    <div className='mt-4 flex justify-between items-center'>
                        <div className='space-x-4'>
                            <button>
                                <Heart />
                            </button>
                            <button>
                                <MessageCircle />
                            </button>
                            <button>
                                <Bookmark />
                            </button>
                        </div>
                        <div className='space-x-4'>
                            <Button />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </section>
  )
}

export default LivingRooms