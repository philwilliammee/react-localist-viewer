import React, { useContext, useEffect, useState } from "react";
import { Calendar, Event, momentLocalizer } from "react-big-calendar";
import AgendaInner from "../src/lib/js/components/molecules/EventsCalendar/AgendaList/AgendaInner";
import CalendarToolbar from "../src/lib/js/components/molecules/EventsCalendar/CalendarToolBar";
import moment from "moment";
// import localistApiConnector from "../../../services/localistApiConnector";
import {
  getEventStart,
  getEventEnd,
  isAllDay,
} from "../src/lib/js/helpers/displayEvent";
import AgendaList from "../src/lib/js/components/molecules/EventsCalendar/AgendaList/AgendaList";
import EventsContext from "../src/lib/js/context/EventsContext";
import EventModal from "../src/lib/js/components/atoms/ModalDialog";
import "./calendar.css"; // react-big-calendar/lib/css/react-big-calendar.css
import EventDetails from "../src/lib/js/components/molecules/EventDetails";
import Filters from "../src/lib/js/components/molecules/EventsCalendar/Filters";
import Grid from "../src/lib/js/components/atoms/Grid";
import {
  ViewComponentProps,
  EventEvent,
  DisplayedDateRange,
} from "lib/types/types";
import { useQuery } from "react-query";
import { fetchEvents } from "lib/localist";
import { queryClient } from "lib/App";
import { lastWeekOfMonth, weekOfMonth } from "./utils";

let localizer = momentLocalizer(moment);

function getKeyFromDateRange(dateRange: DisplayedDateRange) {
  return dateRange.start.format("YYYY-MM-DD");
}

const queryName = "events";

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

  const [dateRange, setDateRange] = useState({
    start: weekOfMonth(moment().startOf("month")),
    end: lastWeekOfMonth(moment().endOf("month")),
  });

  console.log(dateRange);
  const key = getKeyFromDateRange(dateRange);
  // const [key, setKey] = useState(dateRange.start.format("YYYY-MM-DD"));
  const { isLoading, error, data } = useQuery(
    [queryName, key],
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

      queryClient.prefetchQuery(
        [queryName, getKeyFromDateRange(newDateRange)],
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
        [queryName, getKeyFromDateRange(nextDateRange)],
        () => fetchEvents(props as ViewComponentProps, 0, nextDateRange)
      );
      // pre-fetch next data
    }
  }, [key]);

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
    // console.log(dateRangeStart);
    // let newKey = dateRange.start.format("YYYY-MM-DD");
    // newKey = hashCode(dateRangeStart);
    // console.log(newKey);
    // setKey(newKey);
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
