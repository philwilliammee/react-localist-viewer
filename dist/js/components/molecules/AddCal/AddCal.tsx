import React from "react";
import buildUrl from "build-url";
import { getCalStartDate, getCalEndDate } from "../../../helpers/displayEvent";
import { isHidden } from "../../../helpers/common";
import { EventEvent, HideType } from "../../../../types/types";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import EventIcon from "@mui/icons-material/Event";
import { IconButton } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { Box } from "@mui/system";

const buildGoogleLink = (event: EventEvent) => {
  const gDateStart = getCalStartDate(event);
  const gDateStop = getCalEndDate(event);
  const href = buildUrl("https://calendar.google.com/calendar/event", {
    queryParams: {
      action: "TEMPLATE",
      dates: `${gDateStart}/${gDateStop}`,
      details: event.description_text.replace(/[\r\n]/g, `<br />`),
      location: event.location,
      sprop: "website:events.cornell.edu",
      text: event.title,
    },
  });
  return href;
};

const buildGoogleStr = (event: EventEvent) => {
  const href = buildGoogleLink(event);
  return (
    <IconButton
      component="a"
      href={href}
      title="Save to Google Calendar"
      rel="noreferrer noopener"
      target="_blank"
    >
      <GoogleIcon
        className="google"
        sx={{
          color: "#2d863e",
        }}
      />
      <span style={visuallyHidden}>Add {event.title} to Google Calendar</span>
    </IconButton>
  );
};

const buildiCal = (event: EventEvent) => {
  return (
    <IconButton
      component="a"
      href={event.localist_ics_url}
      title="Save to iCal"
      rel="noreferrer noopener"
      target="_blank"
    >
      <AppleIcon
        className="apple"
        sx={{
          color: "#545a5f",
        }}
      />
      <span style={visuallyHidden}>Add {event.title} to iCal</span>
    </IconButton>
  );
};

const buildOutlookCal = (event: EventEvent) => {
  return (
    <IconButton
      component="a"
      href={event.localist_ics_url}
      title="Save to Outlook"
      rel="noreferrer noopener"
      target="_blank"
    >
      <EventIcon
        className="microsoft"
        sx={{
          color: "#0072c6",
        }}
      />
      <span style={visuallyHidden}>Add {event.title} to Outlook</span>
    </IconButton>
  );
};

interface AddCalProps {
  event: EventEvent;
  hideaddcal?: HideType;
}

const AddCal = (props: AddCalProps) => {
  const { event, hideaddcal } = props;

  if (isHidden(hideaddcal)) {
    return <></>;
  }

  return (
    <Box
      className="rlv-add-cal"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      add to calendar {buildGoogleStr(event)} {buildiCal(event)}
      {buildOutlookCal(event)}
    </Box>
  );
};

export default AddCal;
export { buildGoogleStr, buildiCal, buildOutlookCal, buildGoogleLink };
