import React, { useContext } from "react";
import EventsContext from "../../../context/EventsContext";
import PropTypes from "prop-types";
import "./EventStyle.scss";
import { EventElement } from "../../../../types/types";
import { FlatEvent } from "../EventsCalendar/EventsCalendar";
import EventInner from "./EventInner";

interface Props {
  event: FlatEvent;
}

const EventDetails = (props: Props) => {
  // This is the flat event passed from the caLendar
  const { event } = props;
  const { events } = useContext(EventsContext);

  // Get the full event details
  const fullEvent = events.find((e: EventElement) => e.event.id === event?.id)
    ?.event;

  if (!fullEvent || fullEvent.id === -1) {
    return <>Event Details not found.</>;
  }

  return <EventInner event={fullEvent} />;
};

EventDetails.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventDetails;
