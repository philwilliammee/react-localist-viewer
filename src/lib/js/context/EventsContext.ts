import moment from "moment";
import React from "react";
import { EventElement } from "../../types/types";

interface DisplayedDateRange {
  start: moment.Moment;
  end: moment.Moment;
}

const events: EventElement[] = [];
const filteredEvents: EventElement[] = [];

const EventsContext = React.createContext({
  events,
  setEvents: (events: EventElement[] | never) => {},
  filteredEvents,
  setFilteredEvents: (filteredEvents: EventElement[]) => {},
  showDialog: false,
  setShowDialog: (show: boolean) => {},
  eventSelected: {},
  setEventSelected: (selectedEvent: EventElement) => {},
  displayedDateRange: {
    start: moment().startOf("month"),
    end: moment().endOf("month"),
  },
  setDisplayedDateRange: (displayedDateRange: DisplayedDateRange) => {},
});

export default EventsContext;
