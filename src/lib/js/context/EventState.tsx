import React, { useState } from "react";
import PropTypes from "prop-types";
import EventsContext, { initialEvent } from "./EventsContext";
import moment from "moment";
import { EventElement } from "../../types/types";
import { NodeEvent } from "types/graphql";

const EventsState = ({ children }: { children: React.ReactNode }) => {
  const [events, setEvents] = useState<NodeEvent[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<NodeEvent[]>([]);
  const [showDialog, setShowDialog] = useState(false);
  const [eventSelected, setEventSelected] = useState<NodeEvent>(initialEvent);
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

EventsState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EventsState;
