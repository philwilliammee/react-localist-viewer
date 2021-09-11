import React, { useCallback, useContext, useEffect, useState } from "react";
import moment from "moment";
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

    [props, setEvents, setFilteredEvents, data]
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
  }, [dateRange]);

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

  const title = (
    <>
      <span className="label-month">{dateContext.format("MMMM")}</span>{" "}
      {view === "day" ? <span className="label-day">{selectedDay}, </span> : ""}
      <span className="label-year">{dateContext.format("Y")}</span>
    </>
  );

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
              {title}
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
              ""
            )}
            {view === "list" ? (
              <AgendaList
                // Only show events for the month.
                events={filteredEvents.filter((event: EventElement) => {
                  return (
                    moment(getEventStart(event.event)).month() ===
                    dateContext.month()
                  );
                })}
                hideaddcal="true"
                hidedescription="false"
                hideimages="true"
                truncatedescription="200"
                setShowDialog={setShowDialog}
                setEventSelected={setEventSelected}
                dateContext={dateContext}
              />
            ) : (
              ""
            )}
            {view === "day" ? (
              <AgendaList
                // Only show events for the month.
                events={filteredEvents.filter((event: EventElement) => {
                  return (
                    moment(getEventStart(event.event)).date() ===
                    (selectedDay || moment().date())
                  );
                })}
                hideaddcal="true"
                hidedescription="false"
                hideimages="true"
                truncatedescription="200"
                setShowDialog={setShowDialog}
                setEventSelected={setEventSelected}
                dateContext={dateContext}
              />
            ) : (
              ""
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Calendar;
