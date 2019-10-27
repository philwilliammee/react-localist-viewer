import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { getTruncDesc, getEventDateCompact } from '../../helpers/displayEvent';
import EventFilters from '../filter';
import AddCal from '../addCal';
import buildEventWrapperFilters from '../../helpers/buildEventWrapperFilters';
import { EventTitle, EventDate, EventLocation, EventThumbnail, EventDescription } from '../partials';

var CompactInner = function CompactInner(props) {
  var event = props.event,
      hideaddcal = props.hideaddcal,
      thumbnail = props.thumbnail,
      truncatedescription = props.truncatedescription,
      itemclass = props.itemclass,
      hidedescription = props.hidedescription,
      hideimages = props.hideimages;
  return React.createElement("div", {
    className: "views-row ".concat(itemclass)
  }, hideimages === 'true' ? '' : React.createElement(EventThumbnail, {
    photoUrl: event.photo_url,
    title: event.title,
    thumbnail: thumbnail,
    photoCrop: "big"
  }), React.createElement("div", {
    className: "event-node node"
  }, React.createElement("div", {
    className: "events"
  }, React.createElement(EventTitle, {
    title: event.title,
    url: event.localist_url
  }), React.createElement(EventLocation, {
    locationName: event.location_name
  }), React.createElement(EventDate, {
    date: getEventDateCompact(event)
  }), React.createElement(EventDescription, {
    description: getTruncDesc(event, truncatedescription),
    title: event.title,
    url: event.localist_url,
    hidedescription: hidedescription
  }), hideaddcal === 'true' ? '' : React.createElement(AddCal, {
    event: event
  }))));
};

var Compact = function Compact(props) {
  var events = props.events,
      filterby = props.filterby,
      hideaddcal = props.hideaddcal,
      truncatedescription = props.truncatedescription,
      thumbnail = props.thumbnail,
      itemclass = props.itemclass,
      listclass = props.listclass,
      wrapperclass = props.wrapperclass,
      hidedescription = props.hidedescription,
      hideimages = props.hideimages;

  var _useState = useState(events),
      _useState2 = _slicedToArray(_useState, 2),
      filterEvents = _useState2[0],
      handleEventFilter = _useState2[1];

  var filterObjs = buildEventWrapperFilters(events, filterby);
  var thumbNailClass = thumbnail === 'false' ? 'no-thumbnails' : '';
  return React.createElement("section", {
    className: "standard compact",
    title: "Events List"
  }, React.createElement("div", {
    className: "main-body"
  }, React.createElement("div", {
    className: "events-listing ".concat(thumbNailClass, " compact ").concat(wrapperclass)
  }, React.createElement(EventFilters, {
    filterObjs: filterObjs,
    events: events,
    handleEventFilter: handleEventFilter,
    filterby: filterby
  }), React.createElement("div", {
    className: "events-list view-content ".concat(listclass)
  }, filterEvents.length > 0 ? filterEvents.map(function (event) {
    return React.createElement(CompactInner, {
      key: event.event.id,
      event: event.event,
      filterby: filterby,
      hideaddcal: hideaddcal,
      truncatedescription: truncatedescription,
      thumbnail: thumbnail,
      itemclass: itemclass,
      hidedescription: hidedescription,
      hideimages: hideimages
    });
  }) : React.createElement("p", null, "There are no upcomming events.")))));
};

Compact.defaultProps = {
  events: [],
  hideaddcal: 'false',
  truncatedescription: '150',
  thumbnail: 'true',
  wrapperclass: '',
  listclass: '',
  itemclass: '',
  hidedescription: 'false',
  hideimages: 'false'
};
export default Compact;