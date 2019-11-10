import React from 'react';
import { getEventTime, getClassItem } from '../../helpers/displayEvent';
import AddCal from './addCal';
import { EventThumbnail } from '../partials';
import Truncate from '../atoms/truncate';
import Time from '../atoms/time';

var ModernCompactInner = function ModernCompactInner(props) {
  var event = props.event,
      hideimages = props.hideimages;
  var eventTime = getEventTime(event);
  var classList = getClassItem(event);
  return React.createElement("div", {
    className: "card ".concat(classList)
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
  }), React.createElement(Time, {
    event: event
  }), React.createElement("div", {
    className: "field title"
  }, React.createElement("h3", null, event.title)), React.createElement("div", {
    className: "field meta"
  }, React.createElement("p", null, eventTime, event.location_name ? ", ".concat(event.location_name) : '')), React.createElement("div", {
    className: "field field-name-summary summary"
  }, React.createElement("p", null, React.createElement(Truncate, props)))), React.createElement(AddCal, props)));
};

var ModernCompact = function ModernCompact(props) {
  var events = props.events,
      listClassArray = props.listClassArray,
      wrapperClassArray = props.wrapperClassArray;
  var wrapperClassList = wrapperClassArray.join(' ');
  var listClassList = listClassArray.join(' ');
  return React.createElement("section", {
    className: "events-modern-compact modern",
    title: "Events List"
  }, React.createElement("div", {
    className: "main-body"
  }, React.createElement("div", {
    className: "cwd-component cwd-card-grid ".concat(wrapperClassList)
  }, React.createElement("div", {
    className: listClassList
  }, events.length > 0 ? events.map(function (event) {
    return React.createElement(ModernCompactInner, Object.assign({
      key: event.event.id,
      event: event.event,
      display: event.display
    }, props));
  }) : React.createElement("p", null, "There are no upcomming events.")))));
};

ModernCompact.defaultProps = {
  events: [],
  truncatedescription: '150',
  wrapperclass: '',
  listclass: '',
  wrapperClassArray: [],
  listClassArray: []
};
export default ModernCompact;
