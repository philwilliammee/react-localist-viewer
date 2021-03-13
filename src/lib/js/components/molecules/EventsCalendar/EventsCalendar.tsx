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
import { lastWeekOfMonth, weekOfMonth } from "./utils";
import { getKeyFromDateRange, getLastMonth, getNextMonth } from "./dateHelper";

const queryName = "events";

let EventsCalendar = (props: AppProps) => {
  const [dateRange, setDateRange] = useState({
    start: weekOfMonth(moment().startOf("month")),
    end: lastWeekOfMonth(moment().endOf("month")),
  });

  const key = getKeyFromDateRange(dateRange);
  // const [key, setKey] = useState(dateRange.start.format("YYYY-MM-DD"));
  const { data } = useQuery(
    [queryName, key],
    () => fetchEvents(props as ViewComponentProps, 0, dateRange),
    { keepPreviousData: true, staleTime: Infinity }
  );

  const preFetchData = useCallback(
    (dr: DisplayedDateRange) => {
      let lastMonthDateRange = getLastMonth(dr);
      queryClient.prefetchQuery(
        [queryName, getKeyFromDateRange(lastMonthDateRange)],
        () => fetchEvents(props as ViewComponentProps, 0, lastMonthDateRange),
        { staleTime: Infinity }
      );

      let nextMonthDateRange = getNextMonth(dr);
      queryClient.prefetchQuery(
        [queryName, getKeyFromDateRange(nextMonthDateRange)],
        () => fetchEvents(props as ViewComponentProps, 0, nextMonthDateRange),
        { staleTime: Infinity }
      );
    },
    [props]
  );

  useEffect(() => {
    preFetchData(dateRange);
  }, [dateRange, preFetchData]);

  return (
    <Grid>
      <button onClick={() => setDateRange(getLastMonth(dateRange))}>
        Fetch Last Month
      </button>
      {"   "}
      <button onClick={() => setDateRange(getNextMonth(dateRange))}>
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
