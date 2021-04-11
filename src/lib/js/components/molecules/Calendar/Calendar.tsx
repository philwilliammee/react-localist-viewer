import React, {
  Children,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import moment, { Moment } from "moment";
import "./calendar.scss";
import {
  currentDay,
  daysInMonth,
  firstDayOfMonth,
  getKeyFromDateRange,
  getLastMonth,
  getNextMonth,
  initDateRange,
  lastDayOfMonth,
} from "../EventsCalendar/dateUtils";
import EventsContext from "lib/js/context/EventsContext";
import {
  DisplayedDateRange,
  EventEvent,
  ViewComponentProps,
} from "lib/types/types";
import { queryClient } from "lib/query";
import { useQuery } from "react-query";
import { fetchEvents } from "lib/js/services/localistApiConnector";
import MonthView from "./MonthView";
import { getEventStart } from "../../../helpers/displayEvent";
import EventDetails from "../EventDetails";
import EventModal from "../../atoms/ModalDialog";

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
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
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
  };

  const prevMonth = () => {
    const newDateContext = moment(dateContext).clone().subtract(1, "month");
    const newDateRange = getLastMonth(dateRange);
    setDateContext(newDateContext);
    setDateRange(newDateRange);
  };

  const handleEventSelect = (event: EventEvent) => {
    console.log(event);
    setEventSelected(event);
    setShowDialog(true);
  };

  const title = (
    <>
      <span className="label-month">{dateContext.format("MMMM")}</span>{" "}
      <span className="label-year">{dateContext.format("Y")}</span>
    </>
  );

  return (
    <>
      <EventModal
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        aria-label="Selected Event"
      >
        {eventSelected ? <EventDetails event={eventSelected} /> : ""}
      </EventModal>
      <div className="calendar-container">
        <Toolbar nextMonth={nextMonth} prevMonth={prevMonth}>
          {title}
        </Toolbar>
        <MonthView
          events={data?.events || []}
          dateContext={dateContext}
          setSelectedDay={setSelectedDay}
          selectedDay={selectedDay}
          handleEventSelect={handleEventSelect}
        />
      </div>
    </>
  );
};

interface ToolBarProps {
  children: React.ReactChild;
  prevMonth: Function;
  nextMonth: Function;
}

const Toolbar = (props: ToolBarProps) => {
  const { prevMonth, nextMonth, children } = props;
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
        <button>Month</button>
        <button>Day</button>
        <button>List</button>
      </div>
    </div>
  );
};

export default Calendar;
