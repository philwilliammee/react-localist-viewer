import React, { useCallback, useEffect, useState } from "react";

import moment from "moment";

import Grid from "../../atoms/Grid";
import {
  ViewComponentProps,
  DisplayedDateRange,
  AppProps,
  EventElement,
} from "lib/types/types";
import { useQuery } from "react-query";
import { fetchEvents } from "lib/localist";
import { queryClient } from "lib/App";
import {
  getKeyFromDateRange,
  getLastMonth,
  getNextMonth,
  lastWeekOfMonth,
  weekOfMonth,
} from "./dateUtils";

const queryId = "events";

let EventsCalendar = (props: AppProps) => {
  const [dateRange, setDateRange] = useState({
    start: weekOfMonth(moment().startOf("month")),
    end: lastWeekOfMonth(moment().endOf("month")),
  });

  const key = getKeyFromDateRange(dateRange);
  console.log(key);
  const { data } = useQuery(
    [queryId, key],
    () => fetchEvents(props as ViewComponentProps, 0, dateRange),
    { keepPreviousData: true, staleTime: Infinity }
  );

  const preFetchData = useCallback(
    (dr: DisplayedDateRange) => {
      let lastMonthDateRange = getLastMonth(dr);
      queryClient.prefetchQuery(
        [queryId, getKeyFromDateRange(lastMonthDateRange)],
        () => fetchEvents(props as ViewComponentProps, 0, lastMonthDateRange),
        { staleTime: Infinity }
      );

      let nextMonthDateRange = getNextMonth(dr);
      queryClient.prefetchQuery(
        [queryId, getKeyFromDateRange(nextMonthDateRange)],
        () => fetchEvents(props as ViewComponentProps, 0, nextMonthDateRange),
        { staleTime: Infinity }
      );
    },
    [props]
  );

  useEffect(() => {
    preFetchData(dateRange);
  }, [dateRange, preFetchData]);

  const setDate = (newDateRange: DisplayedDateRange) => {
    if (newDateRange.end.isSameOrBefore(newDateRange.start)) {
      console.warn("Invalid Date Range");
      return;
    }
    setDateRange(newDateRange);
  };

  return (
    <Grid>
      <button onClick={() => setDate(getLastMonth(dateRange))}>
        Fetch Last Month
      </button>
      {"   "}
      <button onClick={() => setDate(getNextMonth(dateRange))}>
        Fetch Next Month
      </button>

      <div>
        <h3>
          Events for {dateRange.start.format("YYYY-MM-DD")} -{" "}
          {dateRange.end.format("YYYY-MM-DD")}
        </h3>
        {data?.events.map((event: EventElement) => {
          return <pre key={event.event.id}>{JSON.stringify(event.event)}</pre>;
        })}
      </div>
    </Grid>
  );
};

export default EventsCalendar;
