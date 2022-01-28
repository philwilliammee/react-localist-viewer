import React, { useState } from "react";
import EventsContext, { initialEvent } from "./EventsContext";
//import moment from "moment";
import { EventElement, EventEvent } from "../../types/types";
import { initDateRange } from "../components/molecules/Calendar/dateUtils";

const EventsState = ({ children }: { children: React.ReactNode }) => {
  const [events, setEvents] = useState<EventElement[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<EventElement[]>([]);
  const [showDialog, setShowDialog] = useState(false);
  const [eventSelected, setEventSelected] = useState<EventEvent>(initialEvent);
  const [dateRange, setDateRange] = useState(initDateRange());

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
        dateRange,
        setDateRange,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export default EventsState;
