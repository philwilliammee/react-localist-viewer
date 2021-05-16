import React from "react";
import PropTypes from "prop-types";
import buildUrl from "build-url";
import { getCalStartDate, getCalEndDate } from "../../../helpers/displayEvent";
import { isHidden } from "../../../helpers/common";
import { EventEvent, HideType } from "../../../../types/types";
import GoogleIcon from "@material-ui/icons/Google";
import AppleIcon from "@material-ui/icons/Apple";
import EventIcon from "@material-ui/icons/Event";

import "./AddCal.scss";

const buildGoogleLink = (myObj: EventEvent) => {
  const gDateStart = getCalStartDate(myObj);
  const gDateStop = getCalEndDate(myObj);
  const href = buildUrl("https://calendar.google.com/calendar/event", {
    queryParams: {
      action: "TEMPLATE",
      dates: `${gDateStart}/${gDateStop}`,
      details: myObj.description_text.replace(/[\r\n]/g, `<br />`),
      location: myObj.location,
      sprop: "website:events.cornell.edu",
      text: myObj.title,
    },
  });
  return href;
};

const buildGoogleStr = (myObj: EventEvent) => {
  const href = buildGoogleLink(myObj);
  return (
    <a
      href={href}
      title="Save to Google Calendar"
      rel="noreferrer noopener"
      target="_blank"
    >
      <GoogleIcon className="google" />
      <span className="sr-only">Add {myObj.title} to Google Calendar</span>
    </a>
  );
};

const buildiCal = (myObj: EventEvent) => {
  return (
    <a
      href={myObj.localist_ics_url}
      title="Save to iCal"
      rel="noreferrer noopener"
      target="_blank"
    >
      <AppleIcon className="apple" />
      <span className="sr-only">Add {myObj.title} to iCal</span>
    </a>
  );
};

const buildOutlookCal = (myObj: EventEvent) => {
  return (
    <a
      href={myObj.localist_ics_url}
      title="Save to Outlook"
      rel="noreferrer noopener"
      target="_blank"
    >
      <EventIcon className="microsoft" />
      <span className="sr-only">Add {myObj.title} to Outlook</span>
    </a>
  );
};

interface AddCalProps {
  event: EventEvent;
  hideaddcal?: HideType;
}
/**
 * @param {obj} props.event The localist event object
 * @return {jsx} The rendered template.
 */
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
