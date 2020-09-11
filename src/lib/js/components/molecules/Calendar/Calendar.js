import React, { useContext, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
// import events from './events'
// import * as dates from '../../src/utils/dates'
import AgendaInner from "./AgendaInner";
import CalendarToolbar from "./CalendarToolBar";
import moment from "moment";
import localistApiConnector from "../../../services/localistApiConnector";
import {
  getEventStart,
  getEventEnd,
  isAllDay,
} from "../../../helpers/displayEvent";
import AgendaList from "./AgendaList";
import EventsContext from "../../../context/EventsContext";
import EventModal from "./EventModalDialog";
import "./calendar.css"; // react-big-calendar/lib/css/react-big-calendar.css
import EventDetails from "../EventDetails";
let localizer = momentLocalizer(moment);

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "lightblue",
    },
  });

let Basic = (props) => {
  const { events, setEvents } = useContext(EventsContext);
  // the selected event
  const [event, setEvent] = useState();
  const [showDialog, setShowDialog] = React.useState(false);

  const components = {
    toolbar: CalendarToolbar,
    timeSlotWrapper: ColoredDateCellWrapper,
    list: {
      event: AgendaInner,
    },
  };

  const flatEvents = events.map((event) => {
    return {
      id: event.event.id,
      title: event.event.title,
      start: new Date(getEventStart(event.event)),
      end: new Date(getEventEnd(event.event)),
      allDay: isAllDay(event.event),
    };
  });

  const handleRangeChange = async (event) => {
    console.log(event);
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
  };

  const handleEventSelect = (event) => {
    console.log(event);
    setEvent(event);
    setShowDialog(true);
  };

  return (
    <>
      <EventModal
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        aria-label="event"
      >
        {event ? <EventDetails event={event} /> : ""}
      </EventModal>
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
        style={{ height: "calc(100vh - 100px)" }}
        onRangeChange={handleRangeChange}
        onSelectEvent={handleEventSelect}
        //tooltipAccessor={(event)=>{return event.title}}
      />
    </>
  );
};

export default Basic;
