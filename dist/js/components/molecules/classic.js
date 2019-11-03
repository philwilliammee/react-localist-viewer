import React from 'react';
import { getEventDate, getEventTime } from '../../helpers/displayEvent';

var ClassicInner = function ClassicInner(props) {
  var event = props.event,
      itemclass = props.itemclass;
  var eventTime = getEventTime(event);
  var date = getEventDate(event);

  if (!event.display) {
    event.display = '';
  }

  ;
  return React.createElement("div", {
    className: "views-row ".concat(itemclass, " ").concat(event.display)
  }, React.createElement("div", {
    className: "container-fluid"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-sm-12 event-title-and-location"
  }, React.createElement("div", null, React.createElement("a", {
    href: event.localist_url
  }, event.title)), React.createElement("div", null, React.createElement("span", {
    className: "event-date"
  }, date), "-", eventTime, event.location_name ? " | ".concat(event.location_name) : '')))));
};

var Classic = function Classic(props) {
  var events = props.events,
      itemclass = props.itemclass,
      listclass = props.listclass,
      wrapperclass = props.wrapperclass;
  return React.createElement("div", {
    className: "view view-events view-id-events cuenergy-events ".concat(wrapperclass)
  }, React.createElement("div", {
    className: "events-list view-content ".concat(listclass)
  }, events.length > 0 ? events.map(function (event) {
    return React.createElement(ClassicInner, {
      key: event.event.id,
      event: event.event,
      itemclass: itemclass
    });
  }) : React.createElement("p", null, "There are no upcomming events.")));
};

Classic.defaultProps = {
  events: [],
  wrapperclass: '',
  listclass: '',
  itemclass: ''
};
export default Classic;