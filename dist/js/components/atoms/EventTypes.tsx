import React from "react";
import PropTypes from "prop-types";
import { Department } from "../../../types/types";

// Unused?
interface EventTypesProps {
  eventTypes: Department[];
}
const EventTypes = (props: EventTypesProps) => {
  const { eventTypes } = props;
  if (!eventTypes) {
    return "";
  }
  return (
    <h4 className="meta type">
      <span className="fa" />
      {eventTypes
        .map((eventType) => {
          return eventType.name;
        })
        .join(", ")}
    </h4>
  );
};
EventTypes.propTypes = {
  eventTypes: PropTypes.array,
};

EventTypes.defaultProps = {
  eventTypes: null,
};

export default EventTypes;
