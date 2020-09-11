import PropTypes from "prop-types";
import React, { useRef, useEffect } from "react";
import addClass from "dom-helpers/addClass";
import removeClass from "dom-helpers/removeClass";
import getWidth from "dom-helpers/width";
import scrollbarSize from "dom-helpers/scrollbarSize";
import * as dates from "react-big-calendar/lib/utils/dates";
import { navigate } from "react-big-calendar/lib/utils/constants";
import { inRange } from "react-big-calendar/lib/utils/eventLevels";
import { isSelected } from "react-big-calendar/lib/utils/selection";

// import Agenda from "react-big-calendar/lib/Agenda"

function AgendaList({
  selected,
  getters,
  accessors,
  localizer,
  components,
  length,
  date,
  events,
}) {
  const headerRef = useRef(null);
  const dateColRef = useRef(null);
  const timeColRef = useRef(null);
  const contentRef = useRef(null);
  const tbodyRef = useRef(null);

  useEffect(() => {
    _adjustHeader();
  });

  const renderDay = (day, events, dayKey) => {
    const { event: Event } = components;

    events = events.filter((e) =>
      inRange(e, dates.startOf(day, "day"), dates.endOf(day, "day"), accessors)
    );
    const wrapperClassList = "";
    const listClassList = "";

    return events.map((event, idx) => {
      let title = accessors.title(event);
      let end = accessors.end(event);
      let start = accessors.start(event);

      const userProps = getters.eventProp(
        event,
        start,
        end,
        isSelected(event, selected)
      );

      return (
        <section
          key={dayKey + "_" + idx}
          className="events-modern-compact modern"
          title="Events List"
          style={userProps.style}
        >
          <div className="events-main-body">
            <div className={`cwd-component cwd-card-grid ${wrapperClassList}`}>
              <div className={listClassList}>
                {Event ? <Event event={event} title={title} /> : title}
              </div>
            </div>
          </div>
        </section>
      );
    }, []);
  };

  const _adjustHeader = () => {
    if (!tbodyRef.current) return;

    let header = headerRef.current;
    let firstRow = tbodyRef.current.firstChild;

    if (!firstRow) return;

    let isOverflowing =
      contentRef.current.scrollHeight > contentRef.current.clientHeight;

    let _widths = [];
    let widths = _widths;

    _widths = [getWidth(firstRow.children[0]), getWidth(firstRow.children[1])];

    if (widths[0] !== _widths[0] || widths[1] !== _widths[1]) {
      dateColRef.current.style.width = _widths[0] + "px";
      timeColRef.current.style.width = _widths[1] + "px";
    }

    if (isOverflowing) {
      addClass(header, "rbc-header-overflowing");
      header.style.marginRight = scrollbarSize() + "px";
    } else {
      removeClass(header, "rbc-header-overflowing");
    }
  };

  let { messages } = localizer;
  let end = dates.add(date, length, "day");

  let range = dates.range(date, end, "day");

  events = events.filter((event) => inRange(event, date, end, accessors));

  events.sort((a, b) => +accessors.start(a) - +accessors.start(b));

  return (
    <div className="rbc-agenda-view">
      {events.length !== 0 ? (
        <>{range.map((day, idx) => renderDay(day, events, idx))}</>
      ) : (
        <span className="rbc-agenda-empty">{messages.noEventsInRange}</span>
      )}
    </div>
  );
}

AgendaList.propTypes = {
  events: PropTypes.array,
  date: PropTypes.instanceOf(Date),
  length: PropTypes.number.isRequired,
  selected: PropTypes.object,
  accessors: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  getters: PropTypes.object.isRequired,
  localizer: PropTypes.object.isRequired,
};

AgendaList.defaultProps = {
  length: 30,
};

AgendaList.range = (start, { length = AgendaList.defaultProps.length }) => {
  let end = dates.add(start, length, "day");
  return { start, end };
};

AgendaList.navigate = (
  date,
  action,
  { length = AgendaList.defaultProps.length }
) => {
  switch (action) {
    case navigate.PREVIOUS:
      return dates.add(date, -length, "day");

    case navigate.NEXT:
      return dates.add(date, length, "day");

    default:
      return date;
  }
};

AgendaList.title = (
  start,
  { length = AgendaList.defaultProps.length, localizer }
) => {
  let end = dates.add(start, length, "day");
  return localizer.format({ start, end }, "agendaHeaderFormat");
};

export default AgendaList;
