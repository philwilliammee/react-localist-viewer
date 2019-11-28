import React from 'react';
import { getEventTime, getClassItem } from '../../helpers/displayEvent';
import AddCal from './addCal';
import { EventImg } from './partials';
import Truncate from '../atoms/truncate';
import Time from '../atoms/time';

var ModernStandardInner = function ModernStandardInner(props) {
  var event = props.event,
      hideimages = props.hideimages;
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
  var classList = getClassItem(event);
  return React.createElement("div", {
    className: classList
  }, React.createElement("div", {
    className: "events"
  }, React.createElement("a", {
    href: event.localist_url,
    className: "group-link-wrapper field-group-link"
  }, React.createElement(Time, {
    event: event
  }), React.createElement("div", {
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
  }), React.createElement(Truncate, Object.assign({}, props, {
    readMore: "read more"
  }))))), React.createElement(AddCal, props)));
};

var ModernStandard = function ModernStandard(props) {
  var events = props.events,
      listClassArray = props.listClassArray,
      wrapperClassArray = props.wrapperClassArray;
  var wrapperClassList = wrapperClassArray.join(' ');
  var listClassList = listClassArray.join(' ');
  return React.createElement("section", {
    className: "events-modern-standard modern",
    title: "Events List"
  }, React.createElement("div", null, React.createElement("div", {
    className: "cwd-component cwd-card-grid ".concat(wrapperClassList)
  }, React.createElement("div", {
    className: listClassList
  }, events.length > 0 ? events.map(function (event) {
    return React.createElement(ModernStandardInner, Object.assign({
      key: event.event.id,
      event: event.event
    }, props));
  }) : React.createElement("p", null, "There are no upcomming events.")))));
};

ModernStandard.defaultProps = {
  events: [],
  hideaddcal: 'false',
  truncatedescription: '250',
  hideimages: 'false',
  wrapperClassArray: [],
  listClassArray: [],
  hidedescription: 'false'
};
export default ModernStandard;