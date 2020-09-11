import React from "react";
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
// import events from './events'
// import * as dates from '../../src/utils/dates'
import AgendaInner from './AgendaInner'
import moment from 'moment'
import PropTypes from 'prop-types'
import { getEventStart, getEventEnd, isAllDay } from '../../../helpers/displayEvent'
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
    const {events, listClassArray, wrapperClassArray} = props;
    const wrapperClassList = wrapperClassArray.join(' ');
    const listClassList = listClassArray.join(' ');

    let components = {
        // event: MyEvent, // used by each view (Month, Day, Week)
        // toolbar: MyToolbar,
        timeSlotWrapper: ColoredDateCellWrapper,
        agenda: {
            event: AgendaInner // with the agenda view use a different component to render events
        }
    }

    console.log(props)

    const flatEvents = events.map(event => {
        return (
            {
                id: event.event.id,
                title: event.event.title,
                start: new Date(getEventStart(event.event)),
                end: new Date(getEventEnd(event.event)),
                allDay: isAllDay(event.event),
            }
        )
    })
    console.log(flatEvents)
    return (
        <section className='events-modern-compact modern' title="Events List">
            <div className="events-main-body">
                <div className={`cwd-component cwd-card-grid ${wrapperClassList}`}>
                    <div className={listClassList}>
                        <Calendar
                            events={flatEvents}
                            views={allViews}
                            step={60}
                            showMultiDayTimes
                            // max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
                            // defaultDate={new Date()}
                            components={components}
                            localizer={localizer}
                            // defaultDate={new Date()}
                            // defaultView="month"
                            style={{ height: 'calc(100vh - 100px)' }}
                            onSelectEvent={event => { console.log(event) }}
                            onRangeChange={event => { console.log(event) }}
                            //tooltipAccessor={(event)=>{return event.title}}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

Basic.propTypes = {
    events: PropTypes.array
}

Basic.defaultProps = {
    events: [],
}

export default Basic
