import React, { useCallback, useContext, useEffect, useState } from "react";
import moment from "moment";
import "./calendar.scss";
import {
  getKeyFromDateRange,
  getLastMonth,
  getNextMonth,
  initDateRange,
} from "./dateUtils";
import EventsContext from "lib/js/context/EventsContext";
import {
  DisplayedDateRange,
  EventElement,
  EventEvent,
  ViewComponentProps,
} from "lib/types/types";
import { queryClient } from "lib/query";
import { useQuery } from "react-query";
import { fetchEvents } from "lib/js/services/localistApiConnector";
import MonthView from "./MonthView";
import EventDetails from "../EventDetails";
import EventModal from "../../atoms/ModalDialog";
import Grid from "../../atoms/Grid";
import Filters from "./Filters";
import AgendaList from "./AgendaList";
import { getEventStart } from "lib/js/helpers/displayEvent";

const queryId = "events";

const Calendar = (props: any) => {
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

interface ToolBarProps {
  children: React.ReactChild;
  prevMonth: Function;
  nextMonth: Function;
  setView: (view: "month" | "day" | "list") => void;
}

const Toolbar = (props: ToolBarProps) => {
  const { prevMonth, nextMonth, children, setView } = props;
  return (
    <div className="toolbar">
      <div className="links">
        <button
          onClick={(e) => {
            prevMonth();
          }}
        >
          <i className="prev fa fa-fw fa-chevron-left"></i> Back
        </button>
        <button
          onClick={(e) => {
            nextMonth();
          }}
        >
          Next <i className="prev fa fa-fw fa-chevron-right"></i>
        </button>
      </div>
      <div className="header-title">
        <h3>{children}</h3>
      </div>
      <div className="view">
        <button
          onClick={() => {
            setView("month");
          }}
        >
          Month
        </button>
        <button
          onClick={() => {
            setView("day");
          }}
        >
          Day
        </button>
        <button
          onClick={() => {
            setView("list");
          }}
        >
          List
        </button>
      </div>
    </div>
  );
};

export default Calendar;
