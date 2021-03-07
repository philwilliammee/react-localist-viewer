import React, { useState } from "react";
import PropTypes from "prop-types";
import EventsContext from "./EventsContext";
import moment from "moment";
import { EventElement } from "../../types/types";

const EventsState = ({ children }: { children: React.ReactNode }) => {
  const [events, setEvents] = useState<EventElement[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<EventElement[]>([]);
  const [showDialog, setShowDialog] = useState(false);
  const [eventSelected, setEventSelected] = useState({});
  const [displayedDateRange, setDisplayedDateRange] = useState({
    start: moment().startOf("month"),
    end: moment().endOf("month"),
  });

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
