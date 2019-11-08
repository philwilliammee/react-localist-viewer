import React from 'react';
import PropTypes from 'prop-types';
import { getAbbrMonth, getDay, getEventDate, getEventTime } from '../../helpers/displayEvent';

var Time = function Time(props) {
  var event = props.event;
  return React.createElement("time", {
    title: getEventDate(event),
    dateTime: getEventTime(event)
  }, React.createElement("span", {
    className: "month"
  }, getAbbrMonth(event)), React.createElement("span", {
    className: "day"
  }, getDay(event)));
};

PropTypes.Truncate = {
  event: PropTypes.object.isRequired
};
export default Time;