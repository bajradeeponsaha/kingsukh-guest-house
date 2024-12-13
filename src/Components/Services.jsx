import React from 'react'
import Heading from './Heading'
import SectionHeading from './SectionHeading'
import ServiceCard from './ServiceCard'
import security from '../assets/icons/protected.png'
import service24 from '../assets/icons/24hrs.png'
import restaurant from '../assets/icons/catering.png'
import map from '../assets/icons/guidemap.png'

function Services() {
  return (
    <section className='setContainer flex flex-col gap-4' id='Services'>
        <SectionHeading text={"Our Services"} />
        <div>
            <div>
                <Heading heading={"Strive Only For The Best."}/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-content-center'>
              <ServiceCard srvImg={security} srvTitle={"High Class Security"}/>
              <ServiceCard srvImg={service24} srvTitle={"24 Hours Room Service"}/>
              <ServiceCard srvImg={restaurant} srvTitle={"Restaurant"}/>
              <ServiceCard srvImg={map} srvTitle={"Tourist Guide Support"}/>
            </div>
        </div>
    </section>
  )
}

export default Services