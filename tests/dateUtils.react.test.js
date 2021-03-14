import moment from "moment";
import {
  getLastMonth,
  getNextMonth,
  getMonthFromThisDateRange,
} from "../src/lib/js/components/molecules/EventsCalendar/dateUtils";

// run with jest dateUtils.react.test.js
function dateRangeTest(value, dateRange, testDateRange) {
  dateRange = getMonthFromThisDateRange(testDateRange, value);

  const testEndDateToComeAfterStartDate = dateRange.start
    .clone()
    .isBefore(dateRange.end.clone());

  if (!testEndDateToComeAfterStartDate) {
    console.log(
      `FAILED start ${dateRange.start.format(
        "YYYY-MM-DD"
      )} is after end ${dateRange.end.format("YYYY-MM-DD")}`
    );
  }
  expect(testEndDateToComeAfterStartDate).toBe(true);
}

test("Get Month From This Date Range test", () => {
  var i;
  var loops = 200;
  var dateRange = {
    start: moment().startOf("month"),
    end: moment().endOf("month"),
  };

  var testDateRange = {
    start: moment().startOf("month"),
    end: moment().endOf("month"),
  };
  for (var i = 0; i < loops; i++) {
    dateRangeTest(i, dateRange, testDateRange);
    dateRangeTest(-i, dateRange, testDateRange);
  }
});

test("Get Month From This Date Range test", () => {
  var i;
  var loops = 200;
  var dateRange = {
    start: moment().startOf("month"),
    end: moment().endOf("month"),
  };

  for (var i = 0; i < loops; i++) {
    const testDateRange = {
      start: moment().startOf("month").subtract(i, "month"),
      end: moment().endOf("month").subtract(i, "month"),
    };
    dateRange = getLastMonth(testDateRange);
    const testEndDateToComeAfterStartDate = dateRange.start
      .clone()
      .isBefore(dateRange.end.clone());
    if (!testEndDateToComeAfterStartDate) {
      console.log(
        `FAILED start ${dateRange.start.format(
          "YYYY-MM-DD"
        )} is after end ${dateRange.end.format("YYYY-MM-DD")}`
      );
    }
    expect(testEndDateToComeAfterStartDate).toBe(true);
  }
});

test("Get Next Month From This Date Range test", () => {
  var i;
  var loops = 200;
  var dateRange = {
    start: moment().startOf("month"),
    end: moment().endOf("month"),
  };
  for (var i = 0; i < loops; i++) {
    // const testDateRange = {
    //   start: moment().startOf("month").add(i, "month"),
    //   end: moment().endOf("month").add(i, "month"),
    // };
    dateRange = getNextMonth(dateRange);
    const testEndDateToComeAfterStartDate = dateRange.start
      .clone()
      .isBefore(dateRange.end.clone());
    if (!testEndDateToComeAfterStartDate) {
      console.log(
        `FAILED start ${dateRange.start.format(
          "YYYY-MM-DD"
        )} is after end ${dateRange.end.format("YYYY-MM-DD")}`
      );
    }
    expect(testEndDateToComeAfterStartDate).toBe(true);
  }
});
