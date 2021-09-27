import { isNotHidden } from "../helpers/common";
import { useState, useContext, useEffect } from "react";
import { AppProps, DisplayedDateRange, ViewProps } from "../../types/types";
import {
  getKeyFromDateRange,
  getLastMonth,
  getNextMonth,
} from "../components/molecules/Calendar/dateUtils";
import { useQuery } from "react-query";
import { fetchEvents } from "../services/apiInterface";
import { getQueryId } from "../helpers/common";
import EventsContext from "../context/EventsContext";
import { queryClient } from "lib/query";

export default function useApi(
  props: AppProps | ViewProps,
  currentPage: number,
  dateRange: DisplayedDateRange
) {
  const { events, setEvents, filteredEvents, setFilteredEvents } = useContext(
    EventsContext
  );

  const [llPage, setLlPage] = useState({
    current: props.page,
    size: 1,
    total: 1,
  });
  // This id can be replaced with the actual query params passed to fetchEvents.
  const queryId = getQueryId(props);
  const key =
    props.format === "calendar" ? getKeyFromDateRange(dateRange) : currentPage;

  const { isLoading: loading, data } = useQuery(
    [queryId, key],
    () => fetchEvents(props, currentPage, dateRange),
    { keepPreviousData: true, staleTime: Infinity }
  );

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (data) {
        setEvents(data.events);
        setFilteredEvents(data.events);
        setLlPage(data.page);
        // preload and disc-cache event images @todo replace big with actual
        // Photo crop should be defined in the base parent.
        // Or each component is responsible for pre-fetching their images.
        data.events.forEach((event) => {
          const src = event.event.photo_url.replace("/huge/", `/big/`);
          const img = new Image();
          img.src = src;
        });
      }

      // Perhaps use callback here?
      // Use Date to prefetch next prev month's events.
      if (props.format === "calendar") {
        let lastMonthDateRange = getLastMonth(dateRange);
        queryClient.prefetchQuery(
          [queryId, getKeyFromDateRange(lastMonthDateRange)],
          () => fetchEvents(props, 0, lastMonthDateRange),
          { staleTime: Infinity }
        );

        let nextMonthDateRange = getNextMonth(dateRange);
        queryClient.prefetchQuery(
          [queryId, getKeyFromDateRange(nextMonthDateRange)],
          () => fetchEvents(props, 0, nextMonthDateRange),
          { staleTime: Infinity }
        );
      }

      // Perhaps use callback here?
      // Use pagination to prefetch next page.
      if (props.format !== "calendar") {
        // prefetch pagination data next page
        const isUsingPagination = isNotHidden(props.hidepagination);
        if (llPage.current && isUsingPagination) {
          const morePages = llPage.current < llPage.total;
          const nextPage = llPage.current + 1;
          if (morePages) {
            queryClient.prefetchQuery(
              [queryId, nextPage],
              () => fetchEvents(props, nextPage, dateRange),
              { staleTime: Infinity }
            );
          }
        }
      }
    }
    return function cleanup() {
      mounted = false;
    };
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [llPage, data, loading, dateRange]); // this was key, data, loading changed to llPage

  return { isLoading: loading, data, llPage, filteredEvents, events, key };
}
