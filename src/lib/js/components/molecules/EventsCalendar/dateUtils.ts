import { DisplayedDateRange } from "lib/types/types";
import moment from "moment";

export function weekOfMonth(m: moment.Moment) {
  var first = m.clone().startOf("month").week(); // mutates original value
  const firstDay = moment(m).week(first).day(0);
  return firstDay;
}

export function lastWeekOfMonth(m: moment.Moment) {
  let last = m.clone().endOf("month").week(); // mutates original value
  // @todo fix this. is not getting
  if (last === 1) {
    return m.clone().endOf("year");
  }
  const lastDay = moment(m).week(last).day(6);
  return lastDay;
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
  // console.log(
  //   "received start: " +
  //     dateRange.start.format("YYYY-MM-DD") +
  //     " returned start: " +
  //     newDateRange.start.format("YYYY-MM-DD")
  // );
  // console.log(
  //   "received end: " +
  //     dateRange.end.format("YYYY-MM-DD") +
  //     " returned end: " +
  //     newDateRange.end.format("YYYY-MM-DD")
  // );
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
