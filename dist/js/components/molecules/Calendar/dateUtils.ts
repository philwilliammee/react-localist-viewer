import { DisplayedDateRange } from "../../../../types/types";
import moment, { Moment } from "moment";

/**
 * This is unused it can be used to get start of calendar month day
 * @param m Moment
 * @returns Moment
 */
export function calendarWeekOfMonth(m: Moment) {
  var first = m.clone().startOf("month").week(); // mutates original value
  const firstDay = moment(m).week(first).day(0);
  return firstDay;
}

/**
 * This is unused it can be used to get end of calendar month day
 * @param m Moment
 * @returns Moment
 */
export function calendarLastWeekOfMonth(m: Moment) {
  let last = m.clone().endOf("month").week(); // mutates original value
  // @todo fix this. is not getting
  if (last === 1) {
    return m.clone().endOf("year");
  }
  const lastDay = moment(m).week(last).day(6);
  return lastDay;
}

export function weekOfMonth(m: Moment) {
  return m.clone().startOf("month");
}

export function lastWeekOfMonth(m: Moment) {
  return m.clone().endOf("month");
}

export function getKeyFromDateRange(dateRange: DisplayedDateRange) {
  return dateRange.start.clone().format("YYYY-MM-DD");
}

export function getMonthFromThisDateRange(
  dateRange: DisplayedDateRange,
  diff: number,
  isCalendarMonth: boolean = false
) {
  // will work with calendar
  const newStart = weekOfMonth(
    // Get end of first week in the month
    dateRange.start.clone().endOf("week").add(diff, "month")
    // dateRange.start.clone().add(diff, "month")
  );
  const query = dateRange.end.clone().startOf("week").add(diff, "month");
  // const query = dateRange.end.clone().add(diff, "month");
  const newEnd = lastWeekOfMonth(query);

  return {
    start: newStart,
    end: newEnd,
  };
}

export function getLastMonth(dateRange: DisplayedDateRange) {
  const newDateRange = getMonthFromThisDateRange(dateRange, -1);
  return newDateRange;
}

export function getNextMonth(dateRange: DisplayedDateRange) {
  return getMonthFromThisDateRange(dateRange, 1);
}

export function initDateRange(): DisplayedDateRange {
  const dateRange = {
    start: weekOfMonth(moment().startOf("month")),
    end: lastWeekOfMonth(moment().endOf("month")),
  };

  return dateRange;
}

export const daysInMonth = (dateContext: Moment) => {
  return dateContext.daysInMonth();
};

export const currentDay = (dateContext: Moment) => {
  return parseInt(dateContext.format("D"), 10);
};

export const firstDayOfMonth = (dateContext: Moment) => {
  return parseInt(moment(dateContext).startOf("month").format("d"), 10); // Day of week 0...1..5...6
};

export const lastDayOfMonth = (dateContext: Moment) => {
  return parseInt(moment(dateContext).endOf("month").format("d"), 10); // Day of week 0...1..5...6
};
