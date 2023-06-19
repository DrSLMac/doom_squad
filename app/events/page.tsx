'use client'
import React from 'react'

import BallIcon from '../components/BallIcon'
import { HomeIcon } from '@heroicons/react/24/solid'
import UnderConstruction from '../components/UnderConstruction'
import Calendar from '../components/Calendar'


export default function Events() {

  return (
    <div className='h-screen'>
            <div className="text-white flex items-center justify-between 
          shorter:pt-4
            px-8 pt-8
            xs:px-10
            minism:px-12
            sm:px-16
            md:px-20
            lg:px-24 lg:pt-8
            ">
        <BallIcon />
        <a href="/">
          <HomeIcon className="text-white short:h-8 h-10"/>
        </a>
      </div>
      <h3 className="uppercase text-center mt-4 mb-4 text-3xl">Calendar of Events</h3>

      <Calendar />
      {/* <UnderConstruction /> */}

    </div>
  );
}



