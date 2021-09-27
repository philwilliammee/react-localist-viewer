import { useContext, useEffect, useCallback } from "react";
import { DisplayedDateRange, ViewProps } from "../../types/types";
import { useQuery } from "react-query";
import { fetchEvents } from "../services/apiInterface";
import { getQueryId } from "../helpers/common";
import {
  getKeyFromDateRange,
  getLastMonth,
  getNextMonth,
} from "../components/molecules/Calendar/dateUtils";
import EventsContext from "../context/EventsContext";
import { queryClient } from "lib/query";

export default function useCalendarApi(
  props: ViewProps,
  dateRange: DisplayedDateRange
) {
  const { events, setEvents, filteredEvents, setFilteredEvents } = useContext(
    EventsContext
  );

  const key = getKeyFromDateRange(dateRange);
  const queryId = getQueryId(props);

  const { data } = useQuery(
    [queryId, key],
    () => fetchEvents(props, 0, dateRange),
    { keepPreviousData: true, staleTime: Infinity }
  );

  const preFetchData = useCallback(
    (dr: DisplayedDateRange) => {
      let lastMonthDateRange = getLastMonth(dr);
      queryClient.prefetchQuery(
        [queryId, getKeyFromDateRange(lastMonthDateRange)],
        () => fetchEvents(props, 0, lastMonthDateRange),
        { staleTime: Infinity }
      );

      let nextMonthDateRange = getNextMonth(dr);
      queryClient.prefetchQuery(
        [queryId, getKeyFromDateRange(nextMonthDateRange)],
        () => fetchEvents(props, 0, nextMonthDateRange),
        { staleTime: Infinity }
      );
      if (data) {
        setEvents(data.events);
        setFilteredEvents(data.events);
        // preload and disc-cache event images @todo replace big with actual
        // Photo crop should be defined in the base parent.
        // Or each component is responsible for pre-fetching their images.
        data.events.forEach((event) => {
          const src = event.event.photo_url.replace("/huge/", `/big/`);
          const img = new Image();
          img.src = src;
        });
      }
    },

    [props, setEvents, setFilteredEvents, data, queryId]
  );

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      preFetchData(dateRange);
    }
    return function cleanup() {
      mounted = false;
    };
    // This is ok we only want to fetch new data when the date range changes,
    // This allows us to apply filtering.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateRange, data]);

  return { filteredEvents, events, key };
}
