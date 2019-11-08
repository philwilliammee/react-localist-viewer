import React from 'react';
import { getTruncDesc, getEventDateCompact, getClassItem } from '../../helpers/displayEvent';
import AddCal from '../addCal';
import { EventTitle, EventDate, EventLocation, EventThumbnail, EventDescription } from '../partials';

var CompactInner = function CompactInner(props) {
  var event = props.event,
      hideaddcal = props.hideaddcal,
      truncatedescription = props.truncatedescription,
      hidedescription = props.hidedescription,
      hideimages = props.hideimages;
  var classList = getClassItem(event);
  return React.createElement("div", {
    className: "views-row ".concat(classList)
  }, React.createElement(EventThumbnail, {
    photoUrl: event.photo_url,
    title: event.title,
    hideimages: hideimages,
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
  }), React.createElement(AddCal, {
    hideaddcal: hideaddcal,
    event: event
  }))));
};

var Compact = function Compact(props) {
  var events = props.events,
      filterby = props.filterby,
      listClassArray = props.listClassArray,
      wrapperClassArray = props.wrapperClassArray;
  var wrapperClassList = wrapperClassArray.join(' ');
  var listClassList = listClassArray.join(' ');
  return React.createElement("section", {
    className: "standard compact",
    title: "Events List"
  }, React.createElement("div", {
    className: "main-body"
  }, React.createElement("div", {
    className: "events-listing compact ".concat(wrapperClassList)
  }, React.createElement("div", {
    className: "events-list view-content ".concat(listClassList)
  }, events.length > 0 ? events.map(function (event) {
    return React.createElement(CompactInner, Object.assign({
      key: event.event.id,
      event: event.event,
      filterby: filterby
    }, props));
  }) : React.createElement("p", null, "There are no upcomming events.")))));
};

Compact.defaultProps = {
  events: [],
  hideaddcal: 'false',
  truncatedescription: '150',
  hidedescription: 'false',
  hideimages: 'false'
};
export default Compact;