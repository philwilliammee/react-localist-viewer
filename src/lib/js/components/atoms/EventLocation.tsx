import React from "react";
import PropTypes from "prop-types";

interface EventLocationProps {
  locationName?: string;
}
const EventLocation = (props: EventLocationProps) => {
  const { locationName } = props;
  if (locationName) {
    return <h4 className="meta location">{locationName}</h4>;
  }
  return <></>;
};
EventLocation.propTypes = {
  locationName: PropTypes.string,
};

export default EventLocation;
