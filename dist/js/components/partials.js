import React from 'react';
import { isHidden } from '../helpers/common';

var EventTitle = function EventTitle(props) {
  var title = props.title,
      url = props.url;
  return React.createElement("h3", null, React.createElement("a", {
    rel: "noreferrer noopener",
    target: "_blank",
    href: url
  }, title));
};

var EventDate = function EventDate(props) {
  var date = props.date;
  return React.createElement("h4", {
    className: "meta date"
  }, React.createElement("span", {
    className: "fulldate"
  }, date));
};

var EventLocation = function EventLocation(props) {
  var locationName = props.locationName;

  if (locationName) {
    return React.createElement("h4", {
      className: "meta location"
    }, locationName);
  }

  return '';
};

EventLocation.defaultProps = {
  EventLocation: null
};

var EventImg = function EventImg(props) {
  var hideimages = props.hideimages,
      photoUrl = props.photoUrl,
      title = props.title,
      photoCrop = props.photoCrop;
  var photo = photoUrl.replace('/huge/', "/".concat(photoCrop, "/"));

  if (isHidden(hideimages)) {
    return '';
  }

  return React.createElement("img", {
    alt: title,
    height: "150",
    src: photo,
    loading: "lazy"
  });
};

EventImg.defaultProps = {
  hideimages: null,
  photoCrop: 'big'
};

var EventThumbnail = function EventThumbnail(props) {
  var hideimages = props.hideimages,
      photoUrl = props.photoUrl,
      title = props.title,
      photoCrop = props.photoCrop;

  if (isHidden(hideimages)) {
    return '';
  }

  return React.createElement("div", {
    className: "group-image"
  }, React.createElement(EventImg, {
    hideimages: hideimages,
    photoUrl: photoUrl,
    title: title,
    photoCrop: photoCrop
  }));
};

EventThumbnail.defaultProps = {
  hideimages: null,
  photoCrop: 'big'
};

var EventDescription = function EventDescription(props) {
  var description = props.description,
      title = props.title,
      url = props.url,
      hidedescription = props.hidedescription;
  var descriptionLink = React.createElement("a", {
    className: "read-more more",
    href: url,
    rel: "noreferrer noopener",
    target: "_blank"
  }, " read more", React.createElement("span", {
    className: "visually-hidden"
  }, " about ", title));
  return React.createElement("div", {
    className: "summary"
  }, React.createElement("p", {
    className: "description"
  }, isHidden(hidedescription) ? '' : description, isHidden(hidedescription) ? '' : descriptionLink));
};

EventDescription.defaultProps = {
  hidedescription: 'false'
};

var EventTypes = function EventTypes(props) {
  var eventTypes = props.eventTypes;

  if (!eventTypes) {
    return '';
  }

  return React.createElement("h4", {
    className: "meta type"
  }, React.createElement("span", {
    className: "fa"
  }), eventTypes.map(function (eventType) {
    return eventType.name;
  }).join(', '));
};

EventTypes.defaultProps = {
  eventTypes: null
};

var FilterButton = function FilterButton(props) {
  var filterId = props.filterId,
      active = props.active,
      clickHandler = props.clickHandler,
      name = props.name;
  return React.createElement("button", {
    id: filterId,
    className: "filter-btn ".concat(active === filterId ? 'active' : ''),
    type: "button",
    onClick: clickHandler
  }, name);
};

FilterButton.defaultProps = {
  active: ''
};
export { EventTitle, EventDate, EventLocation, EventThumbnail, EventDescription, EventTypes, EventImg, FilterButton };