import { useEffect, useRef, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import { DateSelectArg, EventClickArg, EventInput } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { v4 as uuidv4 } from 'uuid';

// type Props = {
//   info: {
//     start: string | undefined,
//     end: string | undefined,
//   },
// }

const Calendar = () => {
    const [events, setEvents] = useState<EventInput[]>([])
    const calendarRef = useRef<FullCalendar | null>(null)

    useEffect(() => {
        if (calendarRef.current) {
            calendarRef.current.getApi().setOption('height', 500);
        }
    }, [])

    const handleSelect = (arg: DateSelectArg) => {
        const { start, end } = arg;
        const eventNamePrompt = prompt("Enter event name");
        if (eventNamePrompt) {
            const newEvent: EventInput = {
                start,
                end,
                title: eventNamePrompt,
                id: uuidv4(),
                allDay: false,
                color: 'blue'
            };
            setEvents([...events, newEvent]);
        }
    };

    const handleEventClick = (arg: EventClickArg) => {
        if (window.confirm("Are you sure you want to delete this event?")) {
            const { id } = arg.event;
            const updatedEvents = events.filter((event) => event.id !== id);
            setEvents(updatedEvents);
        }
    };
     

  return (
    <div className='h-[70%] p-8'>
        <FullCalendar 
            ref={calendarRef}
            plugins={[dayGridPlugin, interactionPlugin]}
            headerToolbar={{
                start: "today prev next",
                end: "dayGridMonth dayGridWeek dayGridDay",
            }}
            initialView='dayGridMonth'
            contentHeight='600'
            events={events}
            select={handleSelect}
            eventClick={handleEventClick}
            editable={true}
            selectable={true}
            height='100%'
        />
    </div> 
  )
}

export default Calendar