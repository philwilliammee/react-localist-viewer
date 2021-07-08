import React from "react";
import PropTypes from "prop-types";
import { EventEvent } from "../../../../types/types";
import EventInner from "../EventInner/EventInner";

interface Props {
  event: EventEvent;
}

const EventDetails = (props: Props) => {
  const { event } = props;
  return <EventInner event={event} />;
};

EventDetails.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventDetails;
