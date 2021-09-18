import React, { ReactElement } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Typography } from "@mui/material";

interface Props {
  dateFormat?: string;
  timeFormat: string;
  hideTime: Boolean;
}

export default function EventDateTime({
  dateFormat,
  timeFormat,
  hideTime,
}: Props): ReactElement {
  let separator = dateFormat ? "@ " : "";
  return (
    <Typography
      component="span"
      color="text.primary"
      className="rlv-event-date-time"
    >
      <AccessTimeIcon
        className="access-time-icon"
        sx={{
          fontSize: "inherit",
          marginRight: 1,
        }}
      />
      {dateFormat} {hideTime ? "" : `${separator}${timeFormat}`}
    </Typography>
  );
}
