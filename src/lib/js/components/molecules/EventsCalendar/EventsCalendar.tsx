import React, { useContext, useEffect, useState } from "react";
import { Calendar, Event, momentLocalizer } from "react-big-calendar";
import AgendaInner from "./AgendaList/AgendaInner";
import CalendarToolbar from "./CalendarToolBar";
import moment from "moment";
// import localistApiConnector from "../../../services/localistApiConnector";
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
import { ViewComponentProps, EventEvent, EventElement } from "lib/types/types";
import { useQuery } from "react-query";
import { fetchEvents } from "lib/localist";
import { queryClient } from "lib/App";
import { lastWeekOfMonth, weekOfMonth } from "./utils";

let localizer = momentLocalizer(moment);

let EventsCalendar = (props: ViewComponentProps) => {
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
  const [key, setKey] = useState(0);
  const [dateRange, setDateRange] = useState({
    start: weekOfMonth(moment().startOf("month")),
    end: lastWeekOfMonth(moment().endOf("month")),
  });
  const { isLoading, error, data } = useQuery(
    ["events", dateRange.start.format("YYYY-MM-DD")],
    () => fetchEvents(props as ViewComponentProps, 0, dateRange),
    { keepPreviousData: true, staleTime: Infinity }
  );

  useEffect(() => {
    if (!error && dateRange.start) {
      // this is dumb just pass it to the component.
      // dateRange
      let newDateRange = {
        start: weekOfMonth(
          dateRange.start.clone().endOf("week").subtract(1, "month")
        ),
        end: lastWeekOfMonth(
          dateRange.end.clone().startOf("week").subtract(1, "month")
        ),
      };
      console.log("NEW DATE RANGE");
      console.log(newDateRange);

      queryClient.prefetchQuery(
        ["events", newDateRange.start.format("YYYY-MM-DD")],
        () => fetchEvents(props as ViewComponentProps, 0, newDateRange)
      );

      let nextDateRange = {
        start: weekOfMonth(
          dateRange.start.clone().endOf("week").add(1, "month")
        ),
        end: lastWeekOfMonth(
          dateRange.end.clone().startOf("week").add(1, "month")
        ),
      };
      console.log("NEXT DATE RANGE");
      console.log(newDateRange);

      queryClient.prefetchQuery(
        ["events", nextDateRange.start.format("YYYY-MM-DD")],
        () => fetchEvents(props as ViewComponentProps, 0, nextDateRange)
      );
      // pre-fetch next data
    }
  }, []);

  if (!error && !isLoading && data?.events) {
    setEvents(data.events);
    setFilteredEvents(data.events);
  }

  const components = {
    toolbar: CalendarToolbar,
    list: {
      event: AgendaInner,
    },
  };

  // Do events get iterated in main app? Don't reiterate!
  const flatEvents: Event[] = filteredEvents.map((event) => {
    return {
      id: event.event.id,
      title: event.event.title,
      start: new Date(getEventStart(event.event)),
      end: new Date(getEventEnd(event.event)),
      allDay: isAllDay(event.event),
    };
  });

  const handleRangeChange = (dateRange: any) => {
    if (!dateRange.start || !dateRange.end) {
      console.log("error in date range");
      console.log(dateRange);
      return;
    }
    const dateRangeStart = dateRange.start;
    const dateRangeEnd = dateRange.end;
    if (data) {
      setDisplayedDateRange({
        start: moment(dateRangeStart),
        end: moment(dateRangeEnd),
      });
    }

    setDateRange({
      start: moment(dateRangeStart),
      end: moment(dateRangeEnd),
    });

    // const start = moment(dateRangeStart)
    //   .subtract(1, "month")
    //   .startOf("month")
    //   .format("YYYY-MM-DD hh:mm");
    // const end = moment(dateRangeEnd)
    //   .add(1, "month")
    //   .endOf("month")
    //   .format("YYYY-MM-DD hh:mm");

    // fetchEvents(props, 1, start, end);
    // const currentPage = key + 1;
    // console.log(currentPage);
    // props.setCurrentPage(currentPage);
    console.log(dateRangeStart);
    let newKey = moment(dateRangeStart).valueOf();
    // newKey = hashCode(dateRangeStart);
    // console.log(newKey);
    setKey(newKey);
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
