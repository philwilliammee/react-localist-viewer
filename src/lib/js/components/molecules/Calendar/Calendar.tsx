import React, { useContext, useState } from "react";
import moment, { Moment } from "moment";
import { getLastMonth, getNextMonth, initDateRange } from "./dateUtils";
import EventsContext from "../../../context/EventsContext";
import { EventElement, EventEvent, ViewProps } from "../../../../types/types";
import MonthView from "./MonthView";
import EventModal from "../../atoms/ModalDialog";
import Grid from "../../atoms/Grid";
import Filters from "./Filters";
import AgendaList from "./AgendaList";
import { getEventStart } from "../../../helpers/displayEvent";
import Toolbar from "./ToolBar";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import EventInner from "../EventInner/EventInner";
import useApi from "lib/js/hooks/useApi";
// import useCalendarApi from "lib/js/hooks/useCalendarApi";

const Calendar = (props: ViewProps) => {
  const {
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
  const { filteredEvents } = useApi(props, 1, dateRange);

  const nextMonth = () => {
    const newDateContext = moment(dateContext).clone().add(1, "month");
    const newDateRange = getNextMonth(dateRange);
    // Why are we doing all three of these?
    setDateContext(newDateContext);
    setDateRange(newDateRange);
    setDisplayedDateRange(newDateRange);
  };

  const prevMonth = () => {
    const newDateContext = moment(dateContext).clone().subtract(1, "month");
    const newDateRange = getLastMonth(dateRange);
    // Why are we doing all three of these?
    setDateContext(newDateContext);
    setDateRange(newDateRange);
    setDisplayedDateRange(newDateRange);
  };

  const today = () => {
    const newDateContext = moment();
    const newDateRange = initDateRange();
    setSelectedDay(newDateContext.date());
    // Why are we doing all three of these?
    setDateContext(newDateContext);
    setDateRange(newDateRange);
    setDisplayedDateRange(newDateRange);
  };

  const showModal = (event: EventEvent) => {
    setEventSelected(event);
    setShowDialog(true);
  };

  const handleDateClick = (date: number) => {
    setSelectedDay(date);
    setView("day");
  };

  // If it is a day view only show results for that day.
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

  // @todo refactor this into standalone component view and add tests.
  // @todo make mobile toolbar.
  return (
    <div className="rlv-calendar">
      <EventModal
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        aria-label="Selected Event"
        title={eventSelected.title}
      >
        {eventSelected ? <EventInner event={eventSelected} /> : ""}
      </EventModal>

      <Grid container>
        <Grid col={3}>
          <Filters />
        </Grid>
        <Grid col={9}>
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
            <Box
              className="month-view"
              sx={{
                "table td, table th": {
                  borderWidth: "1px",
                  fontSize: "body1.fontSize",
                },
                td: {
                  verticalAlign: "top",
                },
              }}
            >
              <MonthView
                events={filteredEvents || []}
                dateContext={dateContext}
                setSelectedDay={handleDateClick}
                selectedDay={selectedDay}
                handleEventSelect={showModal}
              />
            </Box>
          ) : (
            //list or day view
            <AgendaList
              {...props}
              setShowDialog={setShowDialog}
              events={getListEvents()}
            />
          )}
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
    <Typography variant="h2">
      <span className="label-month">{props.dateContext.format("MMMM")}</span>{" "}
      {props.view === "day" ? (
        <span className="label-day">{props.selectedDay}, </span>
      ) : (
        ""
      )}
      <span className="label-year">{props.dateContext.format("Y")}</span>
    </Typography>
  );
};

export default Calendar;
