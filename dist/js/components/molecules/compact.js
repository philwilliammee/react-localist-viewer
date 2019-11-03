import React from 'react';
import { getTruncDesc, getEventDateCompact } from '../../helpers/displayEvent';
import AddCal from '../addCal';
import { EventTitle, EventDate, EventLocation, EventThumbnail, EventDescription } from '../partials';

var CompactInner = function CompactInner(props) {
  var event = props.event,
      hideaddcal = props.hideaddcal,
      thumbnail = props.thumbnail,
      truncatedescription = props.truncatedescription,
      itemclass = props.itemclass,
      hidedescription = props.hidedescription,
      hideimages = props.hideimages;

  if (!event.display) {
    event.display = '';
  }

  ;
  return React.createElement("div", {
    className: "views-row ".concat(itemclass, " ").concat(event.display)
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
  var thumbNailClass = thumbnail === 'false' ? 'no-thumbnails' : '';
  return React.createElement("section", {
    className: "standard compact",
    title: "Events List"
  }, React.createElement("div", {
    className: "main-body"
  }, React.createElement("div", {
    className: "events-listing ".concat(thumbNailClass, " compact ").concat(wrapperclass)
  }, React.createElement("div", {
    className: "events-list view-content ".concat(listclass)
  }, events.length > 0 ? events.map(function (event) {
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