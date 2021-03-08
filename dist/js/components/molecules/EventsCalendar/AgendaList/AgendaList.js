"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _addClass = _interopRequireDefault(require("dom-helpers/addClass"));

var _removeClass = _interopRequireDefault(require("dom-helpers/removeClass"));

var _width = _interopRequireDefault(require("dom-helpers/width"));

var _scrollbarSize = _interopRequireDefault(require("dom-helpers/scrollbarSize"));

var dates = _interopRequireWildcard(require("react-big-calendar/lib/utils/dates"));

var _constants = require("react-big-calendar/lib/utils/constants");

var _eventLevels = require("react-big-calendar/lib/utils/eventLevels");

var _EventsContext = _interopRequireDefault(require("../../../../context/EventsContext"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Override the default Agenda
// import Agenda from "react-big-calendar/lib/Agenda"
function AgendaList({
  selected,
  getters,
  accessors,
  localizer,
  components,
  length,
  date,
  events
}) {
  const headerRef = (0, _react.useRef)(null);
  const dateColRef = (0, _react.useRef)(null);
  const timeColRef = (0, _react.useRef)(null);
  const contentRef = (0, _react.useRef)(null);
  const tbodyRef = (0, _react.useRef)(null);
  const {
    setShowDialog,
    eventSelected,
    setEventSelected
  } = (0, _react.useContext)(_EventsContext.default);
  (0, _react.useEffect)(() => {
    _adjustHeader();
  });

  const renderDay = (day, events, dayKey) => {
    const {
      event: Event
    } = components;
    events = events.filter(e => (0, _eventLevels.inRange)(e, dates.startOf(day, "day"), dates.endOf(day, "day"), accessors));
    return events.map((event, idx) => {
      let title = accessors.title(event);
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: dayKey + "_" + idx
      }, /*#__PURE__*/_react.default.createElement("section", {
        className: "events-modern-compact modern",
        title: "Events List"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "events-main-body"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "cwd-component cwd-card-grid"
      }, Event ? /*#__PURE__*/_react.default.createElement(Event, {
        calendarEvent: event,
        hideaddcal: "true",
        truncatedescription: "500",
        hidedescription: "false",
        hideimages: "true",
        hidetime: false,
        setShowDialog: setShowDialog,
        eventSelected: eventSelected,
        setEventSelected: setEventSelected
      }) : title))));
    }, []);
  };

  const _adjustHeader = () => {
    if (!tbodyRef.current) return;
    let header = headerRef.current;
    let firstRow = tbodyRef.current.firstChild;
    if (!firstRow) return;
    let isOverflowing = contentRef.current.scrollHeight > contentRef.current.clientHeight;
    let _widths = [];
    let widths = _widths;
    _widths = [(0, _width.default)(firstRow.children[0]), (0, _width.default)(firstRow.children[1])];

    if (widths[0] !== _widths[0] || widths[1] !== _widths[1]) {
      dateColRef.current.style.width = _widths[0] + "px";
      timeColRef.current.style.width = _widths[1] + "px";
    }

    if (isOverflowing) {
      (0, _addClass.default)(header, "rbc-header-overflowing");
      header.style.marginRight = (0, _scrollbarSize.default)() + "px";
    } else {
      (0, _removeClass.default)(header, "rbc-header-overflowing");
    }
  };

  let {
    messages
  } = localizer;
  let end = dates.add(date, length, "day");
  let range = dates.range(date, end, "day");
  events = events.filter(event => (0, _eventLevels.inRange)(event, date, end, accessors));
  events.sort((a, b) => +accessors.start(a) - +accessors.start(b));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rbc-agenda-view"
  }, events.length !== 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, range.map((day, idx) => renderDay(day, events, idx))) : /*#__PURE__*/_react.default.createElement("span", {
    className: "rbc-agenda-empty"
  }, messages.noEventsInRange));
}

AgendaList.propTypes = {
  events: _propTypes.default.array,
  date: _propTypes.default.instanceOf(Date),
  length: _propTypes.default.number.isRequired,
  selected: _propTypes.default.object,
  accessors: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  getters: _propTypes.default.object.isRequired,
  localizer: _propTypes.default.object.isRequired
};
AgendaList.defaultProps = {
  length: 30
};

AgendaList.range = (start, {
  length = AgendaList.defaultProps.length
}) => {
  let end = dates.add(start, length, "day");
  return {
    start,
    end
  };
};

AgendaList.navigate = (date, action, {
  length = AgendaList.defaultProps.length
}) => {
  switch (action) {
    case _constants.navigate.PREVIOUS:
      return dates.add(date, -length, "day");

    case _constants.navigate.NEXT:
      return dates.add(date, length, "day");

    default:
      return date;
  }
};

AgendaList.title = (start, {
  length = AgendaList.defaultProps.length,
  localizer
}) => {
  let end = dates.add(start, length, "day");
  return localizer.format({
    start,
    end
  }, "agendaHeaderFormat");
};

var _default = AgendaList;
exports.default = _default;