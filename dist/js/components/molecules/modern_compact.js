import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { getTruncDesc, getAbbrMonth, getDay, getEventDate, getEventTime } from '../../helpers/displayEvent';
import EventFilters from '../filter';
import AddCal from '../addCal';
import buildEventWrapperFilters from '../../helpers/buildEventWrapperFilters';
import { EventThumbnail } from '../partials';

var ModernCompactInner = function ModernCompactInner(props) {
  var event = props.event,
      hideaddcal = props.hideaddcal,
      hideimages = props.hideimages,
      truncatedescription = props.truncatedescription,
      itemclass = props.itemclass,
      hidedescription = props.hidedescription;
  var eventTime = getEventTime(event);
  return React.createElement("div", {
    className: "event-node ".concat(itemclass)
  }, React.createElement("div", {
    className: "events"
  }, React.createElement("a", {
    href: event.localist_url,
    className: "group-link-wrapper field-group-link"
  }, React.createElement(EventThumbnail, {
    photoUrl: event.photo_url,
    title: event.title,
    hideimages: hideimages,
    photoCrop: "big"
  }), React.createElement("time", {
    title: getEventDate(event),
    dateTime: eventTime
  }, React.createElement("span", {
    className: "month"
  }, getAbbrMonth(event)), React.createElement("span", {
    className: "day"
  }, getDay(event))), React.createElement("div", {
    className: "field title"
  }, React.createElement("h3", null, event.title)), React.createElement("div", {
    className: "field meta"
  }, React.createElement("p", null, eventTime, event.location_name ? ", ".concat(event.location_name) : '')), React.createElement("div", {
    className: "field field-name-summary summary"
  }, React.createElement("p", null, hidedescription !== 'true' ? getTruncDesc(event, truncatedescription) : ''))), hideaddcal !== 'true' ? React.createElement(AddCal, {
    event: event
  }) : ''));
};

var ModernCompact = function ModernCompact(props) {
  var events = props.events,
      filterby = props.filterby,
      hideaddcal = props.hideaddcal,
      truncatedescription = props.truncatedescription,
      hideimages = props.hideimages,
      itemclass = props.itemclass,
      listclass = props.listclass,
      hidedescription = props.hidedescription,
      wrapperclass = props.wrapperclass;

  var _useState = useState(events),
      _useState2 = _slicedToArray(_useState, 2),
      filterEvents = _useState2[0],
      handleEventFilter = _useState2[1];

  var filterObjs = buildEventWrapperFilters(events, filterby);
  var thumbNailClass = hideimages === 'true' ? 'no-thumbnails' : '';
  return React.createElement("section", {
    className: "events-modern-compact modern",
    title: "Events List"
  }, React.createElement("div", {
    className: "main-body"
  }, React.createElement("div", {
    className: "cwd-component compact events-listing ".concat(thumbNailClass, " ").concat(wrapperclass)
  }, React.createElement(EventFilters, {
    filterObjs: filterObjs,
    events: events,
    handleEventFilter: handleEventFilter,
    filterby: filterby
  }), React.createElement("div", {
    className: "events-list view-content ".concat(listclass)
  }, filterEvents.length > 0 ? filterEvents.map(function (event) {
    return React.createElement(ModernCompactInner, {
      key: event.event.id,
      event: event.event,
      filterby: filterby,
      hideaddcal: hideaddcal,
      truncatedescription: truncatedescription,
      hideimages: hideimages,
      itemclass: itemclass,
      hidedescription: hidedescription
    });
  }) : React.createElement("p", null, "There are no upcomming events.")))));
};

ModernCompact.defaultProps = {
  events: [],
  hideaddcal: 'false',
  truncatedescription: '150',
  hideimages: 'true',
  wrapperclass: '',
  listclass: '',
  itemclass: '',
  hidedescription: ''
};
export default ModernCompact;