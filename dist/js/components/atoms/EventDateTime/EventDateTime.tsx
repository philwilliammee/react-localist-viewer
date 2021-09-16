import React, { ReactElement } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Typography, useTheme } from "@mui/material";

interface Props {
  dateFormat: string;
  timeFormat: string;
  hideTime: Boolean;
}

export default function EventDateTime({
  dateFormat,
  timeFormat,
  hideTime,
}: Props): ReactElement {
  const theme = useTheme();
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
          marginRight: theme.spacing(1),
        }}
      />
      {dateFormat} {hideTime ? "" : `@ ${timeFormat}`}
    </Typography>
  );
}
