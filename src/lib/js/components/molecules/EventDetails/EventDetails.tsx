import React from "react";
import { EventEvent } from "../../../../types/types";
import EventInner from "../EventInner/EventInner";

interface Props {
  event: EventEvent;
}

const EventDetails = (props: Props) => {
  const { event } = props;
  return <EventInner event={event} />;
};

export default EventDetails;
