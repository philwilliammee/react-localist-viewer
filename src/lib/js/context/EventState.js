import React, { useState } from "react";
import PropTypes from "prop-types";
import EventsContext from "./EventsContext";

const EventsState = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  return (
    <EventsContext.Provider
      value={{
        events,
        setEvents,
        filteredEvents,
        setFilteredEvents,
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
