import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { getTruncDesc, getAbbrMonth, getDay, getEventDate, getEventTime } from '../helpers/displayEvent';
import EventFilters from './filter';
import AddCal from './addCal';
import buildEventWrapperFilters from '../helpers/buildEventWrapperFilters';
import { EventImg } from './partials';

var ModernStandardInner = function ModernStandardInner(props) {
  var event = props.event,
      hideaddcal = props.hideaddcal,
      hideimages = props.hideimages,
      truncatedescription = props.truncatedescription,
      itemclass = props.itemclass,
      hidedescription = props.hidedescription;
  /**
   *
   * @param {obj} eventTypes An array of events.
   * @return {string} Html string
   */

  var tagStr = function tagStr(eventTypes) {
    var spanStr;

    if (eventTypes) {
      spanStr = eventTypes.map(function (element) {
        return React.createElement("span", {
          key: element.id,
          className: "inline-events-type"
        }, element.name);
      });
    }

    return spanStr;
  };

  var eventTime = getEventTime(event);
  return React.createElement("div", {
    className: "card event-node ".concat(itemclass)
  }, React.createElement("div", {
    className: "events"
  }, React.createElement("a", {
    href: event.localist_url,
    className: "group-link-wrapper field-group-link"
  }, React.createElement("time", {
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
  }, React.createElement("p", null, eventTime, event.location_name ? ", ".concat(event.location_name) : '', tagStr(event.filters.event_types))), React.createElement("div", {
    className: "field field-name-summary summary"
  }, React.createElement("p", null, React.createElement(EventImg, {
    photoUrl: event.photo_url,
    title: event.title,
    hideimages: hideimages,
    photoCrop: "big"
  }), hidedescription !== 'true' ? "".concat(getTruncDesc(event, truncatedescription), " read more") : ''))), hideaddcal !== 'true' ? React.createElement(AddCal, {
    event: event
  }) : ''));
};

var ModernStandard = function ModernStandard(props) {
  var events = props.events,
      filterby = props.filterby,
      hideaddcal = props.hideaddcal,
      truncatedescription = props.truncatedescription,
      hideimages = props.hideimages,
      itemclass = props.itemclass,
      listclass = props.listclass,
      wrapperclass = props.wrapperclass,
      hidedescription = props.hidedescription;

  var _useState = useState(events),
      _useState2 = _slicedToArray(_useState, 2),
      filterEvents = _useState2[0],
      handleEventFilter = _useState2[1];

  var filterObjs = buildEventWrapperFilters(events, filterby);
  var thumbNailClass = hideimages === 'true' ? 'no-thumbnails' : '';
  return React.createElement("section", {
    className: "events-modern-standard modern",
    title: "Events List"
  }, React.createElement("div", {
    className: "main-body"
  }, React.createElement("div", {
    className: "cwd-component cwd-card-grid three-card singles events-listing ".concat(thumbNailClass, " ").concat(wrapperclass)
  }, React.createElement(EventFilters, {
    filterObjs: filterObjs,
    events: events,
    handleEventFilter: handleEventFilter,
    filterby: filterby
  }), React.createElement("div", {
    className: "events-list view-content ".concat(listclass)
  }, filterEvents.length > 0 ? filterEvents.map(function (event) {
    return React.createElement(ModernStandardInner, {
      key: event.event.id,
      event: event.event,
      filterby: filterby,
      hideaddcal: hideaddcal,
      truncatedescription: truncatedescription,
      hidedescription: hidedescription,
      hideimages: hideimages,
      itemclass: itemclass
    });
  }) : React.createElement("p", null, "There are no upcomming events.")))));
};

ModernStandard.defaultProps = {
  events: [],
  hideaddcal: 'false',
  truncatedescription: '250',
  hideimages: 'false',
  wrapperclass: '',
  listclass: '',
  itemclass: '',
  hidedescription: 'false'
};
export default ModernStandard;