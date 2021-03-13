import { DisplayedDateRange } from "lib/types/types";
import { lastWeekOfMonth, weekOfMonth } from "./utils";

export function getKeyFromDateRange(dateRange: DisplayedDateRange) {
  return dateRange.start.clone().format("YYYY-MM-DD");
}

export function getMonthFromThisDateRange(
  dateRange: DisplayedDateRange,
  diff: number
) {
  return {
    start: weekOfMonth(
      dateRange.start.clone().endOf("week").add(diff, "month")
    ),
    end: lastWeekOfMonth(
      dateRange.end.clone().startOf("week").add(diff, "month")
    ),
  };
}

export function getLastMonth(dateRange: DisplayedDateRange) {
  return getMonthFromThisDateRange(dateRange, -1);
}

export function getNextMonth(dateRange: DisplayedDateRange) {
  return getMonthFromThisDateRange(dateRange, 1);
}
