import React from "react";
import PropTypes from "prop-types";
import {
  getAbbrMonth,
  getDay,
  getEventDate,
  getEventTime,
} from "../../../helpers/displayEvent";
// import { EventEvent } from "../../../../types/types";
import "./Time.scss";
import { NodeEvent } from "types/graphql";

interface Props {
  event: NodeEvent;
}
const Time = (props: Props) => {
  const { event } = props;
  return (
    <time
      className="rlv-time"
      title={getEventDate(event)}
      dateTime={getEventTime(event)}
    >
      <span className="month">{getAbbrMonth(event)}</span>
      <span className="day">{getDay(event)}</span>
    </time>
  );
};

Time.propTypes = {
  event: PropTypes.object.isRequired,
};

export default Time;
