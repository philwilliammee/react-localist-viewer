import React, { useCallback, useContext, useEffect, useState } from "react";
import { Calendar, Event, momentLocalizer } from "react-big-calendar";
import AgendaInner from "./AgendaList/AgendaInner";
import CalendarToolbar from "./CalendarToolBar";
import moment from "moment";
import { fetchEvents } from "../../../services/localistApiConnector";
import {
  getEventStart,
  getEventEnd,
  isAllDay,
} from "../../../helpers/displayEvent";
import AgendaList from "./AgendaList/AgendaList";
import EventsContext from "../../../context/EventsContext";
import EventModal from "../../atoms/ModalDialog";
import "./calendar.css"; // react-big-calendar/lib/css/react-big-calendar.css
import EventDetails from "../EventDetails";
import Filters from "./Filters";
import Grid from "../../atoms/Grid";
import {
  DateRangeEvent,
  DisplayedDateRange,
  EventEvent,
  ViewComponentProps,
} from "../../../../types/types";
import { useQuery } from "react-query";
import {
  getKeyFromDateRange,
  getLastMonth,
  getNextMonth,
  initDateRange,
  lastWeekOfMonth,
  weekOfMonth,
} from "./dateUtils";
import { queryClient } from "../../../../App";

const queryId = "events";
let localizer = momentLocalizer(moment);

export interface FlatEvent extends Event {
  id: number;
}

let EventsCalendar = (props: any) => {
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

  const [dateRange, setDateRange] = useState(initDateRange());
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

  const components = {
    toolbar: CalendarToolbar,
    list: {
      event: AgendaInner,
    },
  };

  // Put events in Big Calendar Structure
  const flatEvents: FlatEvent[] = filteredEvents.map((event) => {
    return {
      id: event.event.id,
      title: event.event.title,
      start: new Date(getEventStart(event.event)),
      end: new Date(getEventEnd(event.event)),
      allDay: isAllDay(event.event),
    };
  });

  const handleRangeChange = (dateRange: DateRangeEvent | Date[]) => {
    let dateRangeStart: moment.Moment;
    let dateRangeEnd: moment.Moment;

    if ("start" in dateRange) {
      dateRangeStart = moment(dateRange.start);
      dateRangeEnd = moment(dateRange.end);
    } else {
      // Since day list filters events we just uses the whole month
      dateRangeStart = weekOfMonth(moment(dateRange[0]).startOf("month"));
      dateRangeEnd = lastWeekOfMonth(moment(dateRange[0]).endOf("month"));
    }

    if (dateRangeEnd.isSameOrBefore(dateRangeStart)) {
      console.warn("Invalid Date Range");
      return;
    }

    const newDateRange: DisplayedDateRange = {
      start: dateRangeStart,
      end: dateRangeEnd,
    };

    setDisplayedDateRange(newDateRange);
    setDateRange(newDateRange);
  };

  const handleEventSelect = (event: EventEvent) => {
    setEventSelected(event);
    setShowDialog(true);
  };

  const handleEventPress = (
    event: EventEvent,
    e: React.KeyboardEvent<HTMLElement>
  ) => {
    if (e.key === " " || e.key === "Enter") {
      handleEventSelect(event);
    }
  };

  return (
    <>
      {/* @todo only have modal on page once */}
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
          {
            // @todo fix this
            // @ts-ignore: next line
            <Calendar
              events={flatEvents}
              views={{
                month: true,
                day: true,
                list: AgendaList,
              }}
              step={240}
              showMultiDayTimes
              components={components}
              localizer={localizer}
              defaultDate={new Date(moment().startOf("month").toDate())}
              defaultView="month"
              style={{ height: "calc(100vh - 300px)", minHeight: "500px" }}
              onRangeChange={handleRangeChange}
              onSelectEvent={handleEventSelect}
              onKeyPressEvent={handleEventPress}
              //tooltipAccessor={(event)=>{return event.title}}
            />
          }
        </Grid>
      </Grid>
    </>
  );
};

export default EventsCalendar;
