import React, { useState } from "react";
import moment from "moment";
import "./calendar.scss";
import {
  currentDay,
  daysInMonth,
  firstDayOfMonth,
  lastDayOfMonth,
} from "../EventsCalendar/dateUtils";

const Calendar = () => {
  const [dateContext, setDateContext] = useState(moment());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const nextMonth = () => {
    const newDateContext = moment(dateContext).clone().add(1, "month");
    setDateContext(newDateContext);
  };

  const prevMonth = () => {
    const newDateContext = moment(dateContext).clone().subtract(1, "month");
    setDateContext(newDateContext);
  };

  const onDayClick = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    day: number
  ) => {
    setSelectedDay(day);
  };

  let blanks = [];
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
    daysInMonthArray.push(
      <td key={d} className={className + selectedClass}>
        <div className="content">
          <div>
            <button
              className="align-right"
              onClick={(e) => {
                onDayClick(e, d);
              }}
            >
              {d}
            </button>
          </div>
          <div>
            <button className="event">Its an event</button>
          </div>
        </div>
      </td>
    );
  }

  let endBlanks = [];
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
    <div className="calendar-container">
      <div className="toolbar">
        <div className="links">
          <button
            onClick={(e) => {
              prevMonth();
            }}
          >
            <i className="prev fa fa-fw fa-chevron-left"></i> Back
          </button>
          <button
            onClick={(e) => {
              nextMonth();
            }}
          >
            Next <i className="prev fa fa-fw fa-chevron-right"></i>
          </button>
        </div>
        <div className="header-title">
          <h3>
            <span className="label-month">{dateContext.format("MMMM")}</span>{" "}
            <span className="label-year">{dateContext.format("Y")}</span>
          </h3>
        </div>
        <div className="view">
          <button>Month</button>
          <button>Day</button>
          <button>List</button>
        </div>
      </div>
      <table className="table compact calendar">
        <thead>
          <tr>
            <Weekdays />
          </tr>
        </thead>
        <tbody>{trElems}</tbody>
      </table>
    </div>
  );
};

// The days of the week seems like this could be a constant
const Weekdays = React.memo(function tableHeader() {
  return (
    <>
      <td className="week-day">Sun</td>
      <td className="week-day">Mon</td>
      <td className="week-day">Tue</td>
      <td className="week-day">Wed</td>
      <td className="week-day">Thur</td>
      <td className="week-day">Fri</td>
      <td className="week-day">Sat</td>
    </>
  );
});

export default Calendar;
