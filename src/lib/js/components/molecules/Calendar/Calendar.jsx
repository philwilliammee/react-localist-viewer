import React from "react";
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
// import events from './events'
// import * as dates from '../../src/utils/dates'
import moment from 'moment'
import PropTypes from 'prop-types'
import {getEventStart, getEventEnd, isAllDay} from '../../../helpers/displayEvent'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

let allViews = Object.keys(Views).map(k => Views[k])

const ColoredDateCellWrapper = ({ children }) =>
    React.cloneElement(React.Children.only(children), {
        style: {
            backgroundColor: 'lightblue',
        },
    })

let Basic = props => {
    const { events } = props
    console.log(events)

    const flatEvents = events.map(event => {
        return (
            {
                id: event.event.id,
                title: event.event.title,
                start: new Date(getEventStart(event.event)),
                end: new Date(getEventEnd(event.event)),
                allDay: isAllDay(event.event)
              }
        )
    })
    console.log(flatEvents)
    return (
        <Calendar
            events={flatEvents}
            views={allViews}
            step={60}
            // showMultiDayTimes
            // max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
            // defaultDate={new Date()}
            components={{
                timeSlotWrapper: ColoredDateCellWrapper,
            }}
            localizer={localizer}
            style={{ height: 700 }}
        />
    )
}

// const Calendar = props => {
//     return (
//         <div>
//             Get Started
//         </div>
//     )
// }

Basic.propTypes = {
    events: PropTypes.array
}

Basic.defaultProps = {
    events: [],
}

export default Basic
