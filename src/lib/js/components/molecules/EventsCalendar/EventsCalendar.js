import React, { useContext, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
// import events from './events'
// import * as dates from '../../src/utils/dates'
import AgendaInner from "./AgendaList/AgendaInner";
import CalendarToolbar from "./CalendarToolBar";
import moment from "moment";
import localistApiConnector from "../../../services/localistApiConnector";
import {
  getEventStart,
  getEventEnd,
  isAllDay,
} from "../../../helpers/displayEvent";
import AgendaList from "./AgendaList/AgendaList";
import EventsContext from "../../../context/EventsContext";
import EventModal from "../../atoms/ModalDialog";
import "./calendar.css"; // react-big-calendar/lib/css/react-big-calendar.css
import EventDetails from "../EventDetails";
import Filters from "./Filters";
import Grid from "../../atoms/Grid";

let localizer = momentLocalizer(moment);

let EventsCalendar = (props) => {
  const { events, setEvents, filteredEvents, setFilteredEvents } = useContext(
    EventsContext
  );
  // the selected event
  const [event, setEvent] = useState();
  const [key, setKey] = useState(0);
  const [showDialog, setShowDialog] = useState(false);

  const components = {
    toolbar: CalendarToolbar,
    list: {
      event: AgendaInner,
    },
  };

  // Do events get iterated in main app? Don't reiterate!
  const flatEvents = filteredEvents.map((event) => {
    return {
      id: event.event.id,
      title: event.event.title,
      start: new Date(getEventStart(event.event)),
      end: new Date(getEventEnd(event.event)),
      allDay: isAllDay(event.event),
    };
  });

  const handleRangeChange = async (event) => {
    let start, end;
    if (event.start) {
      start = moment(event.start)
        .subtract(1, "month")
        .startOf("month")
        .format("YYYY-MM-DD hh:mm");
      end = moment(event.end)
        .add(1, "month")
        .endOf("month")
        .format("YYYY-MM-DD hh:mm");
    } else if (event.length) {
      // Day was selected
      start = moment(event[0])
        .subtract(1, "month")
        .startOf("month")
        .format("YYYY-MM-DD hh:mm");
      end = moment(event[0])
        .add(1, "month")
        .endOf("month")
        .format("YYYY-MM-DD hh:mm");
    }

    const itemClassArray = ["event-node"];
    let res = await localistApiConnector({ ...props, start, end });
    res.data.events.forEach((event) => {
      event.event.itemClassArray = [...itemClassArray];
    });
    setEvents(res.data.events);
    setFilteredEvents(res.data.events);
    setKey(key + 1);
  };

  const handleEventSelect = (event) => {
    setEvent(event);
    setShowDialog(true);
  };

  return (
    <>
      {/* @todo only have modal on page once */}
      <EventModal
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        aria-label="Selected Event"
      >
        {event ? <EventDetails event={event} /> : ""}
      </EventModal>
      <Grid container>
        <Grid col={3}>
          <Filters key={key} />
        </Grid>
        <Grid col={9}>
          <Calendar
            events={flatEvents}
            views={{
              month: true,
              day: true,
              list: AgendaList,
            }}
            step={240}
            showMultiDayTimes
            components={components}
            localizer={localizer}
            defaultDate={new Date(moment().startOf("month"))}
            defaultView="month"
            style={{ height: "calc(100vh - 300px)", minHeight: "500px" }}
            onRangeChange={handleRangeChange}
            onSelectEvent={handleEventSelect}
            //tooltipAccessor={(event)=>{return event.title}}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default EventsCalendar;
