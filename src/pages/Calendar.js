import React, { useEffect } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import events from '../assets/events'
import axios from '../configs/axios';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import "../styles/Calendar.css"
const localizer = momentLocalizer(moment)




function CalendarOfEvents(props) {
    useEffect(() => {
        axios.get("/student/event/all").then(res => console.log(res.data));
    }, [])

    return (

        <div>
            <Calendar
                className="rbc-calendar"
                localizer={localizer}
                events={events}
                startAccessor="start"
            // endAccessor="end"
            />
        </div>
    )
}
export default CalendarOfEvents;