import React from "react";
import Proptypes from "prop-types";
import { EventElement, EventEvent } from "../../../../types/types";
import {
  currentDay,
  daysInMonth,
  firstDayOfMonth,
  lastDayOfMonth,
} from "./dateUtils";
import { Moment } from "moment";
import { getEventStart } from "../../../helpers/displayEvent";
import "./MonthView.scss";
import { Button, IconButton } from "@mui/material";

interface Props {
  dateContext: Moment;
  events: EventElement[];
  setSelectedDay: (day: number) => void;
  selectedDay: number | null;
  handleEventSelect: (eventEvent: EventEvent) => void;
}

const MonthView = (props: Props) => {
  const { dateContext, events, selectedDay, handleEventSelect } = props;
  const onDayClick = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    day: number
  ) => {
    props.setSelectedDay(day);
  };

  let blanks: JSX.Element[] = [];
  for (let i = 0; i < firstDayOfMonth(dateContext); i++) {
    blanks.push(
      <td key={`${i}-empty-slot`} className="emptySlot">
        {""}
      </td>
    );
  }

  let daysInMonthArray: React.ReactNode[] = [];
  for (let d = 1; d <= daysInMonth(dateContext); d++) {
    let className = d === currentDay(dateContext) ? "day current-day" : "day";
    let selectedClass = d === selectedDay ? " selected-day " : "";
    // Find all events for today

    const todaysEvents = events.filter((event) => {
      const eventDate = new Date(getEventStart(event.event));
      /** @todo handle this dateContext is just a month but events are calendar month*/
      if (eventDate.getMonth() === dateContext.month()) {
        return eventDate.getDate() === d;
      }
      return false;
    });
    daysInMonthArray.push(
      <td key={d} className={className + selectedClass}>
        <div className="content">
          <div>
            <IconButton
              size="small"
              onClick={(e) => {
                onDayClick(e, d);
              }}
              aria-label="close dialog"
              className="align-right day-btn"
            >
              {d}
            </IconButton>
          </div>
          {todaysEvents?.map((event) => {
            return (
              <div key={event.event.event_instances[0].event_instance.id}>
                <Button
                  variant="contained"
                  color="primary"
                  className="event"
                  onClick={(e) => handleEventSelect(event.event)}
                >
                  <span className="button-text">{event.event.title}</span>
                </Button>
              </div>
            );
          })}
        </div>
      </td>
    );
  }

  let endBlanks: JSX.Element[] = [];
  for (let i = lastDayOfMonth(dateContext); i < 6; i++) {
    endBlanks.push(
      <td key={`${i}-end-empty-slot`} className="emptySlot">
        {""}
      </td>
    );
  }

  var totalSlots = [...blanks, ...daysInMonthArray, ...endBlanks];
  let rows: React.ReactNode[] = [];
  let cells: React.ReactNode[] = [];

  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row);
    } else {
      let insertRow = cells.slice();
      rows.push(insertRow);
      cells = [];
      cells.push(row);
    }
    if (i === totalSlots.length - 1) {
      let insertRow = cells.slice();
      rows.push(insertRow);
    }
  });

  let trElems = rows.map((d: React.ReactNode, i: number) => {
    return <tr key={`${i}-days`}>{d}</tr>;
  });
  return (
    <table className="rlv-month-view table compact calendar">
      <thead>
        <tr>
          <Weekdays />
        </tr>
      </thead>
      <tbody>{trElems}</tbody>
    </table>
  );
};

// The days of the week seems like this could be a constant
const Weekdays = React.memo(function tableHeader() {
  return (
    <>
      <th className="week-day" aria-label="Sunday" scope="col">
        Sun
      </th>
      <th className="week-day" aria-label="Monday" scope="col">
        Mon
      </th>
      <th className="week-day" aria-label="Tuesday" scope="col">
        Tue
      </th>
      <th className="week-day" aria-label="Wednesday" scope="col">
        Wed
      </th>
      <th className="week-day" aria-label="Thursday" scope="col">
        Thur
      </th>
      <th className="week-day" aria-label="Friday" scope="col">
        Fri
      </th>
      <th className="week-day" aria-label="Saturday" scope="col">
        Sat
      </th>
    </>
  );
});

MonthView.propTypes = {
  trElems: Proptypes.node,
};

export default MonthView;
