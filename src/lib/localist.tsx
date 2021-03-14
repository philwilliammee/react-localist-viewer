/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import localistApiConnector from "./js/services/localistApiConnector";
import Heading from "./js/components/organisms/heading";
import Paginate from "./js/components/organisms/paginate";
import LocalistView from "./js/components/organisms/localist_view";
import EventFilters from "./js/components/organisms/event_filterby";
import { isHidden } from "./js/helpers/common";
import EventsContext from "./js/context/EventsContext";
import {
  AppProps,
  DisplayedDateRange,
  EventElement,
  Events,
  ViewComponentProps,
} from "./types/types";
import { useQuery } from "react-query";

export async function fetchEvents(
  props: ViewComponentProps,
  currentPage = 0,
  displayedDateRange: DisplayedDateRange
) {
  let start, end;
  if (props.format === "calendar") {
    start = displayedDateRange.start.clone().format("YYYY-MM-DD hh:mm");
    end = displayedDateRange.end.clone().format("YYYY-MM-DD hh:mm");
  }

  console.log(start, end);
  const { data }: { data: Events } = await localistApiConnector({
    ...props,
    page: currentPage,
    start,
    end,
  });
  // console.log("use query");
  // console.log(data);
  return data;
}

/**
 * Localist Component
 * @todo reset filters on pagination load.
 * @todo implement class lists for all components.
 */
const Localist = (props: AppProps) => {
  const {
    events,
    setEvents,
    setFilteredEvents,
    displayedDateRange,
  } = useContext(EventsContext);
  const [llPage, setLlPage] = useState({
    current: props.page,
    size: 1,
    total: 1,
  });
  const [currentPage, setCurrentPage] = useState(props.page);
  const [filter, setFilter] = useState("filterAll");
  const isLoading = false;
  // const [loading, setLoading] = useState(true);
  // https://react-query.tanstack.com/examples/pagination
  // const { isLoading, error, data } = useQuery(
  //   ["events", currentPage],
  //   () => {
  //     console.log("WHY ARE YOU HERE!!!");
  //     console.log(currentPage);
  //     return fetchEvents(
  //       props as ViewComponentProps,
  //       currentPage,
  //       displayedDateRange
  //     );
  //   },
  //   { keepPreviousData: true, staleTime: Infinity }
  // );

  // console.log(isLoading, error, data, isFetching);

  let wrapperClassArray = props?.wrapperclass?.split(" ");

  if (isHidden(props.hideimages) && wrapperClassArray) {
    wrapperClassArray.push("no-thumbnails");
  }
  const classes = ["events-listing"];
  wrapperClassArray = wrapperClassArray?.concat(classes);
  const listClassArray = props?.listclass?.split(" ");
  listClassArray?.push("events-list");

  // useEffect(() => {
  //   if (!error && data?.events) {
  //     // this is dumb just pass it to the component.
  //     const itemClassArray =
  //       props?.itemclass?.split(" ").concat(["event-node"]) || [];
  //     data.events.forEach((event: EventElement) => {
  //       event.event.itemClassArray = [...itemClassArray];
  //     });

  //     // Used by calendar only.
  //     // setFilteredEvents(data.events);
  //     // setEvents(data.events);
  //     // setLlPage(data.page);

  //     // pre-fetch next data
  //   }
  // }, [currentPage, data]);

  // if (error) {
  //   return <>Error fetching data</>;
  // }

  function handlePageClick(data: { selected: number }) {
    const newPage = data.selected + 1;
    setCurrentPage(newPage);
  }

  function handleEventFilter(events: EventElement[], filter: string) {
    setFilter(filter);
    setEvents(events);
  }

  return (
    <div>
      <Heading
        heading={props.heading || ""}
        readmore={props.readmore || ""}
        url={props.url || ""}
      />
      <EventFilters
        key={currentPage}
        events={events}
        handleEventFilter={handleEventFilter}
        active={filter}
        setActive={setFilter}
        filterby={props.filterby}
      />
      <LocalistView
        key={filter}
        {...props}
        events={events}
        page={currentPage || 1}
        loading={isLoading}
        wrapperClassArray={wrapperClassArray || []}
        listClassArray={listClassArray || []}
        hidedescription={props.hidedescription || ""}
        hideimages={props.hideimages || ""}
        hideaddcal={props.hideimages || ""}
        wrapperclass={props.wrapperclass || ""}
        listclass={props.listclass || ""}
        itemclass={props.itemclass || ""}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage || 0}
      />
      <Paginate
        hidepagination={props.hidepagination || ""}
        total={llPage.total}
        handlePageClick={handlePageClick}
      />
    </div>
  );
};

Localist.propTypes = {
  calendarurl: PropTypes.string.isRequired,
  entries: PropTypes.string,
  daysahead: PropTypes.string,
  depts: PropTypes.string,
  group: PropTypes.string,
  keyword: PropTypes.string,
  format: PropTypes.oneOf([
    "standard",
    "compact",
    "modern_compact",
    "modern_standard",
    "inline_compact",
    "calendar",
  ]),
  apikey: PropTypes.string,
  truncatedescription: PropTypes.string.isRequired,
  heading: PropTypes.string,
  hidedescription: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hideimages: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hideaddcal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hidepagination: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  filterby: PropTypes.oneOf(["group", "dept", "type", "none"]),
  wrapperclass: PropTypes.string,
  listclass: PropTypes.string,
  itemclass: PropTypes.string,
  page: PropTypes.number,
  readmore: PropTypes.string,
  url: PropTypes.string,
};

Localist.defaultProps = {
  depts: "0",
  group: "0",
  keyword: "",
  entries: "3",
  format: "standard",
  apikey: "",
  daysahead: "365",
  heading: "",
  filterby: "group",
  hidedescription: "false",
  hideimages: "false",
  hidepagination: "true",
  hideaddcal: "false",
  wrapperclass: "",
  listclass: "",
  itemclass: "",
  page: 1,
  readmore: "",
  url: "",
};

export default Localist;
