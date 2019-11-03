import React from 'react';
import { getTruncDesc, getAbbrMonth, getDay, getEventDate, getEventTime } from '../../helpers/displayEvent';
import AddCal from '../addCal';
import { EventImg } from '../partials';

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

  if (!event.display) {
    event.display = '';
  }

  ;
  return React.createElement("div", {
    className: "card event-node ".concat(itemclass, " ").concat(event.display)
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
  var thumbNailClass = hideimages === 'true' ? 'no-thumbnails' : '';
  return React.createElement("section", {
    className: "events-modern-standard modern",
    title: "Events List"
  }, React.createElement("div", {
    className: "main-body"
  }, React.createElement("div", {
    className: "cwd-component cwd-card-grid three-card singles events-listing ".concat(thumbNailClass, " ").concat(wrapperclass)
  }, React.createElement("div", {
    className: "events-list view-content ".concat(listclass)
  }, events.length > 0 ? events.map(function (event) {
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