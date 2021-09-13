import React from "react";
import PropTypes from "prop-types";
import "./EventLocation.scss";
import RoomIcon from "@mui/icons-material/Room";

interface EventLocationProps {
  locationName?: string;
}
const EventLocation = (props: EventLocationProps) => {
  const { locationName } = props;
  if (!locationName) {
    return <></>;
  }
  return (
    <h4 className="rlv-event-location">
      <RoomIcon
        className="room-icon"
        style={{ fontSize: "inherit", marginRight: "5px" }}
      />
      {locationName}
    </h4>
  );
};
EventLocation.propTypes = {
  locationName: PropTypes.string,
};

export default EventLocation;
