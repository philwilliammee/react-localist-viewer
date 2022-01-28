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
  let separator = dateFormat ? " @ " : "";
  let content = "";
  if (dateFormat) content += dateFormat;
  if (!hideTime) {
    content += separator + timeFormat;
  }
  return (
    <Typography
      component="span"
      color="text.primary"
      className="rlv-event-date-time"
      display="block"
    >
      <AccessTimeIcon
        sx={{
          fontSize: "inherit",
          marginRight: 1,
        }}
      />
      {content}
    </Typography>
  );
}
