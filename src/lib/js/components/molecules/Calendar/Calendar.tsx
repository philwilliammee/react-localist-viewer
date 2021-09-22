import React, { useCallback, useContext, useEffect, useState } from "react";
import moment, { Moment } from "moment";
import "./calendar.scss";
import {
  getKeyFromDateRange,
  getLastMonth,
  getNextMonth,
  initDateRange,
} from "./dateUtils";
import EventsContext from "../../../context/EventsContext";

import {
  DisplayedDateRange,
  EventElement,
  EventEvent,
  ViewComponentProps,
} from "../../../../types/types";
import { queryClient } from "../../../../query";
import { useQuery } from "react-query";
import { fetchEvents } from "../../../services/apiInterface";
import MonthView from "./MonthView";
import EventDetails from "../EventDetails";
import EventModal from "../../atoms/ModalDialog";
import Grid from "../../atoms/Grid";
import Filters from "./Filters";
import AgendaList from "./AgendaList";
import { getEventStart } from "../../../helpers/displayEvent";
import { Props } from "../../../components/organisms/LocalistView";
import Toolbar from "./ToolBar";
import { getQueryId } from "../../../helpers/common";

const Calendar = (props: Props) => {
  const queryId = getQueryId(props);
  const {
    setEvents,
    filteredEvents,
    setFilteredEvents,
    showDialog,
    setShowDialog,
    eventSelected,
    setEventSelected,
    setDisplayedDateRange,
  } = useContext(EventsContext);
  const [dateContext, setDateContext] = useState(moment());
  const [dateRange, setDateRange] = useState(initDateRange());
  const [selectedDay, setSelectedDay] = useState<number>(moment().date());
  const [view, setView] = useState<"month" | "day" | "list">("month");
  const key = getKeyFromDateRange(dateRange);
  // @todo all of this should be moved up to the main component.
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

  const nextMonth = () => {
    const newDateContext = moment(dateContext).clone().add(1, "month");
    const newDateRange = getNextMonth(dateRange);
    setDateContext(newDateContext);
    setDateRange(newDateRange);
    setDisplayedDateRange(newDateRange); // I don't believe this is used anymore
  };

  const prevMonth = () => {
    const newDateContext = moment(dateContext).clone().subtract(1, "month");
    const newDateRange = getLastMonth(dateRange);
    setDateContext(newDateContext);
    setDateRange(newDateRange);
    setDisplayedDateRange(newDateRange); // I don't believe this is used anymore
  };

  const today = () => {
    const newDateContext = moment();
    const newDateRange = initDateRange();
    setSelectedDay(newDateContext.date());
    setDateContext(newDateContext);
    setDateRange(newDateRange);
    setDisplayedDateRange(newDateRange); // I don't believe this is used anymore
  };

  const handleEventSelect = (event: EventEvent) => {
    setEventSelected(event);
    setShowDialog(true);
  };

  const handleDateClick = (date: number) => {
    setSelectedDay(date);
    setView("day");
  };

  const getListEvents = () => {
    if (view === "day") {
      return filteredEvents.filter(
        (event: EventElement) =>
          moment(getEventStart(event.event)).date() ===
          (selectedDay || moment().date())
      );
    }
    return filteredEvents;
  };

  return (
    <div className="calendar-container">
      <EventModal
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        aria-label="Selected Event"
      >
        {eventSelected ? <EventDetails event={eventSelected} /> : ""}
      </EventModal>

      <Grid container>
        <Grid col={3}>
          <Filters key={key} />
        </Grid>
        <Grid col={9}>
          <div>
            <Toolbar
              setView={setView}
              nextMonth={nextMonth}
              prevMonth={prevMonth}
              view={view}
              today={today}
            >
              <ToolBarTitle
                dateContext={dateContext}
                view={view}
                selectedDay={selectedDay}
              />
            </Toolbar>
            {view === "month" ? (
              <div className="month-view">
                <MonthView
                  events={filteredEvents || []}
                  dateContext={dateContext}
                  setSelectedDay={handleDateClick}
                  selectedDay={selectedDay}
                  handleEventSelect={handleEventSelect}
                />
              </div>
            ) : (
              //list or day view
              <AgendaList
                events={getListEvents()}
                setShowDialog={setShowDialog}
                setEventSelected={setEventSelected}
                dateContext={dateContext}
                truncatedescription={props.truncatedescription}
                hidedescription={props.hidedescription}
                hideimages={props.hideimages}
                hideaddcal={props.hideaddcal}
                wrapperClassArray={props.wrapperClassArray}
                listClassArray={props.listClassArray}
              />
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

interface ToolBarTitleProps {
  view: "month" | "day" | "list";
  dateContext: Moment;
  selectedDay?: number;
}
const ToolBarTitle = (props: ToolBarTitleProps) => {
  return (
    <>
      <span className="label-month">{props.dateContext.format("MMMM")}</span>{" "}
      {props.view === "day" ? (
        <span className="label-day">{props.selectedDay}, </span>
      ) : (
        ""
      )}
      <span className="label-year">{props.dateContext.format("Y")}</span>
    </>
  );
};

export default Calendar;
