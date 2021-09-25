import React, { useState } from "react";
import EventsContext, { initialEvent } from "./EventsContext";
import moment from "moment";
import { EventElement, EventEvent } from "../../types/types";

const EventsState = ({ children }: { children: React.ReactNode }) => {
  const [events, setEvents] = useState<EventElement[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<EventElement[]>([]);
  const [showDialog, setShowDialog] = useState(false);
  const [eventSelected, setEventSelected] = useState<EventEvent>(initialEvent);
  const [displayedDateRange, setDisplayedDateRange] = useState({
    start: moment().startOf("month"),
    end: moment().endOf("month"),
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

export default EventsState;
