import React from "react";
import RoomIcon from "@mui/icons-material/Room";
import { Typography, useTheme } from "@mui/material";

interface EventLocationProps {
  locationName?: string;
}
const EventLocation = (props: EventLocationProps) => {
  const { locationName } = props;
  const theme = useTheme();
  if (!locationName) {
    return <></>;
  }
  return (
    <Typography
      sx={{
        textTransform: "none",
        fontWeight: "normal",
        fontSize: "1em",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}
      className="rlv-event-location"
      color="text.primary"
      gutterBottom
    >
      <RoomIcon
        className="room-icon"
        sx={{
          fontSize: "inherit",
          marginRight: theme.spacing(1),
        }}
      />
      {locationName}
    </Typography>
  );
};

export default EventLocation;
