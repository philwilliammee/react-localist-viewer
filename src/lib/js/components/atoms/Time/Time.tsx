import React from "react";
import {
  getStartDayMonthAbbr,
  getEventStartDayString,
  getEventStartMonthDayString,
  getEventTime,
} from "../../../helpers/displayEvent";
import { EventEvent } from "../../../../types/types";
import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";

interface Props {
  event: EventEvent;
}
const Time = (props: Props) => {
  const { event } = props;
  const theme = useTheme();
  return (
    <Box
      component="time"
      className="rlv-time"
      title={getEventStartMonthDayString(event)}
      dateTime={getEventTime(event)}
      sx={{
        display: "inline-block",
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      }}
    >
      <Typography
        component="span"
        className="month"
        sx={{
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText,
          textAlign: "center",
          textTransform: "uppercase",
          paddingTop: theme.spacing(1),
          paddingRight: theme.spacing(1),
          paddingBottom: theme.spacing(1),
          paddingLeft: theme.spacing(2),
        }}
      >
        {getStartDayMonthAbbr(event)}
      </Typography>
      <Typography
        component="span"
        className="day"
        sx={{
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText,
          textAlign: "center",
          paddingTop: theme.spacing(1),
          paddingRight: theme.spacing(2),
          paddingBottom: theme.spacing(1),
          paddingLeft: theme.spacing(1),
        }}
      >
        {getEventStartDayString(event)}
      </Typography>
    </Box>
  );
};

export default Time;
