'use client'
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import BallIcon from '../components/BallIcon'
import { HomeIcon } from '@heroicons/react/24/solid'
import UnderConstruction from '../components/UnderConstruction'

// type Props = {
//   calendarData: string,
//   initialDate: string,
// }
// { calendarData, initialDate }: Props 
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

      <h1 className='text-white'>This is the Events Page</h1>
      <UnderConstruction />
      {/* <div className='h-[70%] p-8'>
        <FullCalendar 
          plugins={[dayGridPlugin, interactionPlugin]}
          headerToolbar={false}
          initialView='dayGridMonth'
          initialDate={initialDate}
          contentHeight='600'
          events={calendarData}
          editable={true}
          height='100%'
        />
      </div> */}
    </div>
  );
}



