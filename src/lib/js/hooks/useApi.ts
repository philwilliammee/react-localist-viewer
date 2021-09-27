import * as React from "react";
import { isNotHidden } from "../helpers/common";
import { useContext, useEffect } from "react";
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
  dateRange: DisplayedDateRange,
  setLlPage: React.Dispatch<
    React.SetStateAction<{
      current: number;
      size: number;
      total: number;
    }>
  >,
  llPage: {
    current: number;
    size: number;
    total: number;
  }
) {
  const { setEvents, setFilteredEvents } = useContext(EventsContext);

  // This id can be replaced with the actual query params passed to fetchEvents.
  const queryId = getQueryId(props);
  const key =
    props.format === "calendar" ? getKeyFromDateRange(dateRange) : currentPage;

  const { isLoading, data } = useQuery(
    [queryId, key],
    () => fetchEvents(props, currentPage, dateRange),
    { keepPreviousData: true, staleTime: Infinity }
  );

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (data && !isLoading) {
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
      const isUsingPagination = isNotHidden(props.hidepagination);
      if (props.format !== "calendar" && isUsingPagination) {
        // prefetch pagination data next page
        const nextPage = currentPage + 1;
        //const morePages = currentPage < llPage.total;
        queryClient.prefetchQuery(
          [queryId, nextPage],
          () => fetchEvents(props, nextPage, dateRange),
          { staleTime: Infinity }
        );
      }
    }
    return function cleanup() {
      mounted = false;
    };
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [key, data, isLoading]); // this was key, data, loading changed to llPage

  return { isLoading };
}
