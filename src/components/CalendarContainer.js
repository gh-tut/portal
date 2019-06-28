import React from 'react'
import Calendar from 'react_google_calendar'

function CalendarContainer(props){
    const {api_key} = process.env;
    const calendarConfig = {
        api_key:{api_key},
        calendars: [
            {
              name: props.name, // whatever you want to name it
              url:  props.url// your calendar URL 'exampleURL@group.calendar.google.com'
            }
          ],
        dailyRecurrence: 700,
        weeklyRecurrence: 500,
        monthlyRecurrence: 20

    }
    return(
        <div>
            <Calendar config={calendarConfig}/>
        </div>
    )
}

export default CalendarContainer