import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

type Props = {
  calendarData: string,
  initialDate: string,
}

const Calendar = ( { calendarData, initialDate }: Props ) => {
  return (
    <div className='h-[70%] p-8'>
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
    </div> 
  )
}

export default Calendar