import React from "react";
import PropTypes from "prop-types";
import buildUrl from "build-url";
import { getCalStartDate, getCalEndDate } from "../../../helpers/displayEvent";
import { isHidden } from "../../../helpers/common";
import { HideType } from "../../../../types/types";
import GoogleIcon from "@material-ui/icons/Google";
import AppleIcon from "@material-ui/icons/Apple";
import EventIcon from "@material-ui/icons/Event";

import "./AddCal.scss";
import { NodeEvent } from "types/graphql";

const buildGoogleLink = (event: NodeEvent) => {
  const gDateStart = getCalStartDate(event);
  const gDateStop = getCalEndDate(event);
  const href = buildUrl("https://calendar.google.com/calendar/event", {
    queryParams: {
      action: "TEMPLATE",
      dates: `${gDateStart}/${gDateStop}`,
      details:
        event.fieldShortDescription?.value?.replace(/[\r\n]/g, `<br />`) || "",
      location: event.fieldEventLocation || "",
      sprop: "website:events.cornell.edu",
      text: event.title || "",
    },
  });
  return href;
};

const buildGoogleStr = (event: NodeEvent) => {
  const href = buildGoogleLink(event);
  return (
    <a
      href={href}
      title="Save to Google Calendar"
      rel="noreferrer noopener"
      target="_blank"
    >
      <GoogleIcon className="google" />
      <span className="sr-only">Add {event.title} to Google Calendar</span>
    </a>
  );
};

const buildiCal = (event: NodeEvent) => {
  return (
    <a
      href={(event.fieldDestinationUrl?.url as string) || ""}
      title="Save to iCal"
      rel="noreferrer noopener"
      target="_blank"
    >
      <AppleIcon className="apple" />
      <span className="sr-only">Add {event.title} to iCal</span>
    </a>
  );
};

const buildOutlookCal = (event: NodeEvent) => {
  return (
    <a
      href={(event.fieldDestinationUrl?.url as string) || ""}
      title="Save to Outlook"
      rel="noreferrer noopener"
      target="_blank"
    >
      <EventIcon className="microsoft" />
      <span className="sr-only">Add {event.title} to Outlook</span>
    </a>
  );
};

interface AddCalProps {
  event: NodeEvent;
  hideaddcal?: HideType;
}

const AddCal = (props: AddCalProps) => {
  const { event, hideaddcal } = props;

  if (isHidden(hideaddcal)) {
    return <></>;
  }

  return (
    <span className="rlc-add-cal">
      add to calendar {buildGoogleStr(event)} {buildiCal(event)}
      {buildOutlookCal(event)}
    </span>
  );
};

AddCal.propTypes = {
  event: PropTypes.object.isRequired,
  hideaddcal: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default AddCal;
export { buildGoogleStr, buildiCal, buildOutlookCal, buildGoogleLink };
