import React from 'react';
import { getAbbrMonth, getDay, getEventTime, getEventEndTime, getClassItem } from '../../helpers/displayEvent';

var InlineCompactInner = function InlineCompactInner(props) {
  var event = props.event;
  var eventTime = getEventTime(event);
  var endTime = getEventEndTime(event);

  var renderEventLocation = function renderEventLocation(locationName) {
    if (!locationName) {
      return '';
    }

    return React.createElement("div", {
      className: "event-location"
    }, React.createElement("span", {
      className: "fa fa-map-marker"
    }), locationName);
  };

  var classList = getClassItem(event);
  return React.createElement("div", {
    className: "views-row ".concat(classList)
  }, React.createElement("div", {
    className: "container-fluid"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-sm-2 event-month-and-day"
  }, React.createElement("div", null, React.createElement("span", {
    className: "event-month"
  }, getAbbrMonth(event)), React.createElement("span", {
    className: "event-day"
  }, getDay(event)))), React.createElement("div", {
    className: "col-sm-8 event-title-and-location"
  }, React.createElement("div", {
    className: "event-title"
  }, React.createElement("a", {
    href: event.localist_url,
    hrefLang: "en"
  }, event.title)), React.createElement("div", {
    className: "event-times"
  }, React.createElement("span", {
    className: "fa fa-clock-o"
  }), eventTime, endTime ? " - ".concat(endTime) : ''), renderEventLocation(event.location_name)))));
};

var InlineCompact = function InlineCompact(props) {
  var events = props.events,
      listclass = props.listclass,
      wrapperclass = props.wrapperclass;
  return React.createElement("section", {
    className: "modern",
    id: "eventsInlineCompact",
    title: "Events List"
  }, React.createElement("div", {
    className: "events-main-body"
  }, React.createElement("div", {
    className: "cwd-component compact events-listing ".concat(wrapperclass)
  }, React.createElement("div", {
    className: "events-list view-content ".concat(listclass)
  }, events.length > 0 ? events.map(function (event) {
    return React.createElement(InlineCompactInner, {
      key: event.event.id,
      event: event.event
    });
  }) : React.createElement("p", null, "There are no upcomming events.")))));
};

InlineCompact.defaultProps = {
  events: [],
  wrapperclass: '',
  listclass: ''
};
export default InlineCompact;