/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { fetchEvents } from "./js/services/apiInterface";
import Heading from "./js/components/organisms/Heading";
import Paginate from "./js/components/organisms/Paginate/Paginate";
import LocalistView from "./js/components/organisms/LocalistView";
import EventFilters from "./js/components/organisms/EventFilterBy";
import { getQueryId, isHidden, isNotHidden } from "./js/helpers/common";
import EventsContext from "./js/context/EventsContext";
import { AppProps, EventElement, ViewComponentProps } from "./types/types";
import { useQuery } from "react-query";
import {
  getKeyFromDateRange,
  initDateRange,
} from "./js/components/molecules/Calendar/dateUtils";
import { queryClient } from "./query";
import { Box } from "@mui/system";

const dateRange = initDateRange();

/**
 * Localist Component
 */
const Localist = (props: AppProps) => {
  const { events, setEvents, filteredEvents, setFilteredEvents } = useContext(
    EventsContext
  );
  const [llPage, setLlPage] = useState({
    current: props.page,
    size: 1,
    total: 1,
  });
  const [currentPage, setCurrentPage] = useState(props.page);
  const queryId = getQueryId(props);
  let key =
    props.format === "calendar" ? getKeyFromDateRange(dateRange) : currentPage;
  const { isLoading: loading, data } = useQuery(
    [queryId, key],
    () => fetchEvents(props as ViewComponentProps, currentPage, dateRange),
    { keepPreviousData: true, staleTime: Infinity }
  );

  let wrapperClassArray = props?.wrapperclass?.split(" ");
  if (isHidden(props.hideimages) && wrapperClassArray) {
    wrapperClassArray.push("no-thumbnails");
  }
  const classes = ["events-listing"];
  wrapperClassArray = wrapperClassArray?.concat(classes);
  const listClassArray = props?.listclass?.split(" ");
  listClassArray?.push("events-list");

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (data) {
        // There has got to be a better way to set these.
        const itemClassArray =
          props?.itemclass?.split(" ").concat(["event-node"]) || [];
        data.events.forEach((event: EventElement) => {
          event.event.itemClassArray = [...itemClassArray];
        });

        // Used by calendar only.
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
  }, [llPage, data, loading]); // this was key, data, loading changed to llPage

  function handlePageClick(event: React.ChangeEvent<unknown>, page: number) {
    setCurrentPage(page);
  }

  return (
    <Box className="rlv-localist">
      <Heading
        heading={props.heading || ""}
        readmore={props.readmore || ""}
        url={props.url || ""}
      />
      <EventFilters
        key={currentPage}
        events={events}
        filterby={props.filterby}
      />
      <LocalistView
        // removed key for filters.
        {...props}
        events={filteredEvents}
        page={currentPage || 1}
        loading={loading}
        wrapperClassArray={wrapperClassArray || []}
        listClassArray={listClassArray || []}
        hidedescription={props.hidedescription || ""}
        hideimages={props.hideimages || ""}
        hideaddcal={props.hideaddcal || ""}
        wrapperclass={props.wrapperclass || ""}
        listclass={props.listclass || ""}
        itemclass={props.itemclass || ""}
      />
      <Paginate
        hidepagination={props.hidepagination || ""}
        total={llPage.total}
        handlePageClick={handlePageClick}
      />
    </Box>
  );
};

export default Localist;
