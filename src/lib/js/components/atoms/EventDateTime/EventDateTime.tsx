import { getEventDate, getEventFullTime } from "../../../helpers/displayEvent";
// import { EventEvent } from "../../../../types/types";
import React, { ReactElement } from "react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import "./EventDateTime.scss";
import { NodeEvent } from "types/graphql";

interface Props {
  event: NodeEvent;
  hideTime: Boolean;
}

export default function EventDate({ event, hideTime }: Props): ReactElement {
  return (
    <span className="rlv-event-date-time">
      <AccessTimeIcon className="access-time-icon" />
      {getEventDate(event)} {hideTime ? "" : `@ ${getEventFullTime(event)}`}
    </span>
  );
}
