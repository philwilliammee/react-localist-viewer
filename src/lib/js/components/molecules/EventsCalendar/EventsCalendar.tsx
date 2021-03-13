import React, { useContext, useEffect, useState } from "react";
import { Calendar, Event, momentLocalizer } from "react-big-calendar";

import moment from "moment";

import Grid from "../../atoms/Grid";
import {
  ViewComponentProps,
  EventEvent,
  DisplayedDateRange,
  AppProps,
} from "lib/types/types";
import { useQuery } from "react-query";
import { fetchEvents } from "lib/localist";
import { queryClient } from "lib/App";
import { lastWeekOfMonth, weekOfMonth } from "./utils";

let localizer = momentLocalizer(moment);

function getKeyFromDateRange(dateRange: DisplayedDateRange) {
  return dateRange.start.format("YYYY-MM-DD");
}

const queryName = "events";

let EventsCalendar = (props: AppProps) => {
  // const {
  //   setEvents,
  //   filteredEvents,
  //   setFilteredEvents,
  //   showDialog,
  //   setShowDialog,
  //   eventSelected,
  //   setEventSelected,
  //   setDisplayedDateRange,
  // } = useContext(EventsContext);

  const [dateRange, setDateRange] = useState({
    start: weekOfMonth(moment().startOf("month")),
    end: lastWeekOfMonth(moment().endOf("month")),
  });

  console.log(dateRange);
  const key = getKeyFromDateRange(dateRange);
  // const [key, setKey] = useState(dateRange.start.format("YYYY-MM-DD"));
  const { isLoading, error, data } = useQuery(
    [queryName, key],
    () => fetchEvents(props as ViewComponentProps, 0, dateRange),
    { keepPreviousData: true, staleTime: Infinity }
  );

  useEffect(() => {
    // preFetchData(dateRange);
    const dateR = { ...dateRange };
    let newDateRange = {
      start: weekOfMonth(
        dateR.start.clone().endOf("week").subtract(1, "month")
      ),
      end: lastWeekOfMonth(
        dateR.end.clone().startOf("week").subtract(1, "month")
      ),
    };

    queryClient.prefetchQuery(
      [queryName, getKeyFromDateRange(newDateRange)],
      () => fetchEvents(props as ViewComponentProps, 0, newDateRange),
      { staleTime: Infinity }
    );

    let nextDateRange = {
      start: weekOfMonth(dateR.start.clone().endOf("week").add(1, "month")),
      end: lastWeekOfMonth(dateR.end.clone().startOf("week").add(1, "month")),
    };

    queryClient.prefetchQuery(
      [queryName, getKeyFromDateRange(nextDateRange)],
      () => fetchEvents(props as ViewComponentProps, 0, nextDateRange),
      { staleTime: Infinity }
    );
  }, [dateRange, props]);

  const handleRangeChange = (dateRange: DisplayedDateRange) => {
    if (!dateRange.start || !dateRange.end) {
      console.log("error in date range");
      console.log(dateRange);
      return;
    }
    const newDateRange = {
      start: moment(dateRange.start),
      end: moment(dateRange.end),
    };
    setDateRange(newDateRange);
  };

  return (
    <>
      <Grid>
        <button
          onClick={() =>
            handleRangeChange({
              start: dateRange.start.subtract("month", 1),
              end: dateRange.end.subtract("month", 1),
            })
          }
        >
          Fetch Last Month
        </button>
        {"   "}
        <button
          onClick={() =>
            handleRangeChange({
              start: dateRange.start.add("month", 1),
              end: dateRange.end.add("month", 1),
            })
          }
        >
          Fetch Next Month
        </button>

        <div>
          <h3>
            Events for {dateRange.start.format("YYYY-MM-DD")} -{" "}
            {dateRange.end.format("YYYY-MM-DD")}
          </h3>
          <pre>{JSON.stringify(data?.events)}</pre>
        </div>
      </Grid>
    </>
  );
};

export default EventsCalendar;
