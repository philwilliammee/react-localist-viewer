import { DisplayedDateRange } from "lib/types/types";
import moment from "moment";

export function weekOfMonth(m: moment.Moment) {
  var first = m.clone().startOf("month").week();
  const firstDay = moment(m).week(first).day(0);
  return firstDay;
}

export function lastWeekOfMonth(m: moment.Moment) {
  var last = m.clone().endOf("month").week();
  const lastDay = moment(m).week(last).day(6);
  return lastDay;
}

export function getKeyFromDateRange(dateRange: DisplayedDateRange) {
  return dateRange.start.clone().format("YYYY-MM-DD");
}

export function getMonthFromThisDateRange(
  dateRange: DisplayedDateRange,
  diff: number,
  isDirectionReverse: boolean
) {
  const newStart = weekOfMonth(
    dateRange.start.clone().endOf("week").add(diff, "month")
  );
  const newEnd = lastWeekOfMonth(
    dateRange.end.clone().startOf("week").add(diff, "month")
  );
  return {
    start: newStart,
    end: newEnd,
  };
}

export function getLastMonth(dateRange: DisplayedDateRange) {
  const newDateRange = getMonthFromThisDateRange(dateRange, -1, true);
  console.log(
    "recieved: " +
      dateRange.start.format("YYYY-MM-DD") +
      " returned: " +
      newDateRange.start.format("YYYY-MM-DD")
  );
  return newDateRange;
}

export function getNextMonth(dateRange: DisplayedDateRange) {
  return getMonthFromThisDateRange(dateRange, 1, false);
}
