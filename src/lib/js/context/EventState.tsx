import React, { useState } from "react";
import PropTypes from "prop-types";
import EventsContext, { initialEvent } from "./EventsContext";
import moment from "moment";
import { EventElement, EventEvent } from "../../types/types";
import {
  lastWeekOfMonth,
  weekOfMonth,
} from "../components/molecules/EventsCalendar/dateUtils";

const EventsState = ({ children }: { children: React.ReactNode }) => {
  const [events, setEvents] = useState<EventElement[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<EventElement[]>([]);
  const [showDialog, setShowDialog] = useState(false);
  const [eventSelected, setEventSelected] = useState<EventEvent>(initialEvent);
  const [displayedDateRange, setDisplayedDateRange] = useState({
    start: weekOfMonth(moment().startOf("month")),
    end: lastWeekOfMonth(moment().endOf("month")),
  });

  // const initEvent: InitialEventState = eventSelected as InitialEventState;

  return (
    <EventsContext.Provider
      value={{
        events,
        setEvents,
        filteredEvents,
        setFilteredEvents,
        showDialog,
        setShowDialog,
        eventSelected,
        setEventSelected,
        displayedDateRange,
        setDisplayedDateRange,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

EventsState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EventsState;
