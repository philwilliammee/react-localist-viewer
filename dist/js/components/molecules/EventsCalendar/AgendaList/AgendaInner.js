"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _EventsContext = _interopRequireDefault(require("../../../../context/EventsContext"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _displayEvent = require("../../../../helpers/displayEvent");

var _partials = require("../../partials");

var _Truncate = _interopRequireDefault(require("../../../atoms/Truncate"));

var _Time = _interopRequireDefault(require("../../../atoms/Time"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const AgendaListView = props => {
  const {
    calendarEvent,
    hideimages,
    hidetime,
    setShowDialog,
    setEventSelected
  } = props;
  const {
    events
  } = (0, _react.useContext)(_EventsContext.default);
  const event = events.find(e => e.event.id === calendarEvent.id).event;

  if (!event || event.id === -1) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  }
  /**
   *
   * @param {obj} eventTypes
   * @return {string} Html string
   */


  const tagStr = eventTypes => {
    let spanStr;

    if (eventTypes) {
      spanStr = eventTypes.map(element => {
        return /*#__PURE__*/_react.default.createElement("span", {
          key: element.id,
          className: "inline-events-type"
        }, element.name);
      });
    }

    return spanStr;
  };

  const handleOnClick = () => {
    setEventSelected(event);
    setShowDialog(true);
  };

  const eventTime = (0, _displayEvent.getEventTime)(event);
  const classList = (0, _displayEvent.getClassItem)(event);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classList
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "events"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: `#${event.id}`,
    className: "group-link-wrapper field-group-link",
    onClick: handleOnClick
  }, hidetime ? "" : /*#__PURE__*/_react.default.createElement(_Time.default, {
    event: event
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "field title"
  }, /*#__PURE__*/_react.default.createElement("h3", null, event.title)), /*#__PURE__*/_react.default.createElement("div", {
    className: "field meta"
  }, /*#__PURE__*/_react.default.createElement("p", null, hidetime ? "" : eventTime, event.location_name ? `, ${event.location_name}` : "", tagStr(event.filters.event_types))), /*#__PURE__*/_react.default.createElement("div", {
    className: "field field-name-summary summary"
  }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_partials.EventImg, {
    photoUrl: event.photo_url,
    title: event.title,
    hideimages: hideimages,
    photoCrop: "big"
  }), /*#__PURE__*/_react.default.createElement(_Truncate.default, {
    event: event,
    hidedescription: "false",
    truncatedescription: "300",
    readMore: "read more"
  }))))));
};

AgendaListView.propTypes = {
  calendarEvent: _propTypes.default.object.isRequired,
  hideaddcal: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  truncatedescription: _propTypes.default.string.isRequired,
  hidedescription: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  hideimages: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  hidetime: _propTypes.default.bool,
  setShowDialog: _propTypes.default.func.isRequired,
  setEventSelected: _propTypes.default.func.isRequired
};
AgendaListView.defaultProps = {
  hidetime: false
};
var _default = AgendaListView;
exports.default = _default;