import { isNotHidden } from "../helpers/common";
import { useState, useContext, useEffect } from "react";
import { AppProps, EventElement, ViewComponentProps } from "../../types/types";
import { useQuery } from "react-query";
import { fetchEvents } from "../services/apiInterface";
import { getQueryId } from "../helpers/common";
import {
  getKeyFromDateRange,
  initDateRange,
} from "../components/molecules/Calendar/dateUtils";
import EventsContext from "../context/EventsContext";
import { queryClient } from "lib/query";

const dateRange = initDateRange();

export default function useApi(props: AppProps, currentPage?: number) {
  const { setEvents, setFilteredEvents } = useContext(EventsContext);
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
    () => fetchEvents(props as ViewComponentProps, currentPage, dateRange),
    { keepPreviousData: true, staleTime: Infinity }
  );

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (data) {
        // There has got to be a better way to set these.
        // There is a better way pass this in the main component props and apply it to each event.
        const itemClassArray = props?.itemclass?.split(" ") || [];
        data.events.forEach((event: EventElement) => {
          event.event.itemClassArray = [...itemClassArray];
        });

        setFilteredEvents(data.events);
        setEvents(data.events);
        setLlPage(data.page);
      }

      // prefetch pagination data next page
      const isUsingPagination = isNotHidden(props.hidepagination);
      if (props.format !== "calendar" && llPage.current && isUsingPagination) {
        const morePages = llPage.current < llPage.total;
        const nextPage = llPage.current + 1;
        if (morePages) {
          queryClient.prefetchQuery(
            [queryId, nextPage],
            () => fetchEvents(props as ViewComponentProps, nextPage, dateRange),
            { staleTime: Infinity }
          );
        }
      }
    }
    return function cleanup() {
      mounted = false;
    };
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [llPage, data, loading]); // this was key, data, loading changed to llPage

  return { isLoading: loading, data, llPage };
}
