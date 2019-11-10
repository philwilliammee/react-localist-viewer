import React from 'react';
import { getTruncDesc, getEventTime, getMonthHeader, getDisplayDate, getClassItem } from '../../helpers/displayEvent';
import AddCal from './addCal';
import { EventTitle, EventDate, EventLocation, EventThumbnail, EventDescription } from './partials';

var StandardInner = function StandardInner(props) {
  var event = props.event,
      truncatedescription = props.truncatedescription,
      hidedescription = props.hidedescription,
      hideimages = props.hideimages;
  var classList = getClassItem(event);
  return React.createElement("div", {
    className: "views-row"
  }, React.createElement("div", {
    className: "event-node node ".concat(classList)
  }, React.createElement("div", {
    className: "events"
  }, React.createElement("div", {
    className: "field title"
  }, React.createElement(EventTitle, {
    title: event.title,
    url: event.localist_url
  })), React.createElement(EventLocation, {
    locationName: event.location_name
  }), React.createElement("div", null, React.createElement(EventDate, {
    date: getEventTime(event)
  })), React.createElement(EventThumbnail, {
    photoUrl: event.photo_url,
    title: event.title,
    hideimages: hideimages,
    photoCrop: "big"
  }), React.createElement(EventDescription, {
    description: getTruncDesc(event, truncatedescription),
    title: event.title,
    url: event.localist_url,
    hidedescription: hidedescription
  }), React.createElement(AddCal, props))));
};

var Standard = function Standard(props) {
  var events = props.events,
      filterby = props.filterby,
      hideaddcal = props.hideaddcal,
      truncatedescription = props.truncatedescription,
      thumbnail = props.thumbnail,
      hidedescription = props.hidedescription,
      hideimages = props.hideimages,
      listClassArray = props.listClassArray,
      wrapperClassArray = props.wrapperClassArray;
  var lastMonth = '';
  var lastDay = '';

  var getMonth = function getMonth(event) {
    var month = getMonthHeader(event);

    if (lastMonth !== month) {
      lastMonth = month;
      return React.createElement("h3", {
        className: "month-header"
      }, month);
    }

    return '';
  };

  var getDay = function getDay(event, filterbyType) {
    var displayDate = getDisplayDate(event, filterbyType);

    if (lastDay !== displayDate) {
      lastDay = displayDate;
      return React.createElement("h4", {
        className: "day-header"
      }, React.createElement("span", {
        className: "fa fa-calendar-o"
      }), displayDate);
    }

    return '';
  };

  var wrapperClassList = wrapperClassArray.join(' ');
  var listClassList = listClassArray.join(' ');
  return React.createElement("section", {
    className: "standard",
    title: "Events List"
  }, React.createElement("div", {
    className: "main-body"
  }, React.createElement("div", {
    className: "events-listing ".concat(wrapperClassList)
  }, React.createElement("div", {
    className: "events-list ".concat(listClassList)
  }, events.length > 0 ? events.map(function (event) {
    return React.createElement("div", {
      key: event.event.id
    }, getMonth(event.event), getDay(event.event, filterby), React.createElement(StandardInner, {
      event: event.event,
      filterby: filterby,
      hideaddcal: hideaddcal,
      truncatedescription: truncatedescription,
      thumbnail: thumbnail,
      hidedescription: hidedescription,
      hideimages: hideimages
    }));
  }) : React.createElement("p", null, "There are no upcomming events.")))));
};

Standard.defaultProps = {
  events: [],
  hideaddcal: 'true',
  truncatedescription: '250',
  thumbnail: 'true',
  wrapperclass: '',
  listclass: '',
  hidedescription: 'false',
  hideimages: 'false'
};
export default Standard;