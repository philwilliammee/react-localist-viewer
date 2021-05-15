import React from "react";
import PropTypes from "prop-types";
import "./EventLocation.scss";

interface EventLocationProps {
  locationName?: string;
}
const EventLocation = (props: EventLocationProps) => {
  const { locationName } = props;
  if (locationName) {
    return <h4 className="rlv-event-location">{locationName}</h4>;
  }
  return <></>;
};
EventLocation.propTypes = {
  locationName: PropTypes.string,
};

export default EventLocation;
