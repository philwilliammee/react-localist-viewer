"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _EventsContext = _interopRequireDefault(require("../../../../context/EventsContext"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AgendaInnerContent = _interopRequireDefault(require("./AgendaInnerContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const AgendaListView = props => {
  const {
    calendarEvent
  } = props;
  const {
    events
  } = (0, _react.useContext)(_EventsContext.default);
  const event = events.find(e => e.event.id === calendarEvent.id).event;

  if (!event || event.id === -1) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  }

  return /*#__PURE__*/_react.default.createElement(_AgendaInnerContent.default, _extends({}, props, {
    event: event
  }));
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