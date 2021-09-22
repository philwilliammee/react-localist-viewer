import React from "react";
import Proptypes from "prop-types";
import { EventElement, EventEvent } from "../../../../types/types";
import {
  currentDay,
  daysInMonth,
  firstDayOfMonth,
  lastDayOfMonth,
} from "./dateUtils";
import { Moment } from "moment";
import { getEventKey, getEventStart } from "../../../helpers/displayEvent";
import { Button, IconButton, useTheme, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface Props {
  dateContext: Moment;
  events: EventElement[];
  setSelectedDay: (day: number) => void;
  selectedDay: number | null;
  handleEventSelect: (eventEvent: EventEvent) => void;
}

const MonthView = (props: Props) => {
  const theme = useTheme();
  const { dateContext, events, selectedDay, handleEventSelect } = props;
  const onDayClick = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    day: number
  ) => {
    props.setSelectedDay(day);
  };

  let blanks: JSX.Element[] = [];
  for (let i = 0; i < firstDayOfMonth(dateContext); i++) {
    blanks.push(
      <td key={`${i}-empty-slot`} className="emptySlot">
        {""}
      </td>
    );
  }

  let daysInMonthArray: React.ReactNode[] = [];
  for (let d = 1; d <= daysInMonth(dateContext); d++) {
    let className = d === currentDay(dateContext) ? "day current-day" : "day";
    let selectedClass = d === selectedDay ? " selected-day " : "";
    // Find all events for today

    const todaysEvents = events.filter((event) => {
      const eventDate = new Date(getEventStart(event.event));
      /** @todo handle this dateContext is just a month but events are calendar month*/
      if (eventDate.getMonth() === dateContext.month()) {
        return eventDate.getDate() === d;
      }
      return false;
    });
    daysInMonthArray.push(
      <td key={d} className={className + selectedClass}>
        <Grid flexDirection="column">
          <Grid container flexDirection="row-reverse">
            <IconButton
              size="small"
              onClick={(e) => {
                onDayClick(e, d);
              }}
              aria-label="close dialog"
              className="day-btn"
              sx={{
                borderRadius: "50%",
                border: "none",
                paddingBottom: "4px",
                paddingTop: "4px",
                "&:hover": {
                  backgroundColor: theme.palette.grey[100],
                },
              }}
            >
              {d}
            </IconButton>
          </Grid>
          {todaysEvents?.map((event) => {
            const key = getEventKey(event.event);
            return (
              <div key={key}>
                <Button
                  size="small"
                  variant="contained"
                  onClick={(e) => handleEventSelect(event.event)}
                  fullWidth
                  sx={{
                    padding: "2px 5px",
                    height: theme.spacing(3),
                  }}
                >
                  <Typography
                    component="span"
                    variant="button"
                    noWrap
                    textAlign="left"
                    fontSize="small"
                    sx={{
                      overflow: "hidden",
                      display: "block",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {event.event.title}
                  </Typography>
                </Button>
              </div>
            );
          })}
        </Grid>
      </td>
    );
  }

  let endBlanks: JSX.Element[] = [];
  for (let i = lastDayOfMonth(dateContext); i < 6; i++) {
    endBlanks.push(
      <td key={`${i}-end-empty-slot`} className="emptySlot">
        {""}
      </td>
    );
  }

  var totalSlots = [...blanks, ...daysInMonthArray, ...endBlanks];
  let rows: React.ReactNode[] = [];
  let cells: React.ReactNode[] = [];

  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row);
    } else {
      let insertRow = cells.slice();
      rows.push(insertRow);
      cells = [];
      cells.push(row);
    }
    if (i === totalSlots.length - 1) {
      let insertRow = cells.slice();
      rows.push(insertRow);
    }
  });

  let trElems = rows.map((d: React.ReactNode, i: number) => {
    return <tr key={`${i}-days`}>{d}</tr>;
  });
  return (
    <Box
      component="table"
      className="rlv-month-view table compact calendar"
      sx={{
        border: "1px solid",
        borderColor: theme.palette.divider,
        tableLayout: "fixed",
        width: "100%",
        "& thead th": {
          textAlign: "center",
        },
        "& .day": {
          height: "152px",
          overflowX: "hidden",
          overflowY: "auto",
        },
        "& .current-day": {
          backgroundColor: theme.palette.action.focus,
        },
        "& .selected-day": {
          backgroundColor: theme.palette.action.selected,
        },
      }}
    >
      <Box component="thead">
        <tr>
          <Weekdays />
        </tr>
      </Box>
      <tbody>{trElems}</tbody>
    </Box>
  );
};

// The days of the week seems like this could be a constant
const Weekdays = React.memo(function TableHeader() {
  return (
    <>
      <Box component="th" className="week-day" aria-label="Sunday" scope="col">
        Sun
      </Box>
      <Box component="th" className="week-day" aria-label="Monday" scope="col">
        Mon
      </Box>
      <Box component="th" className="week-day" aria-label="Tuesday" scope="col">
        Tue
      </Box>
      <Box
        component="th"
        className="week-day"
        aria-label="Wednesday"
        scope="col"
      >
        Wed
      </Box>
      <Box
        component="th"
        className="week-day"
        aria-label="Thursday"
        scope="col"
      >
        Thur
      </Box>
      <Box component="th" className="week-day" aria-label="Friday" scope="col">
        Fri
      </Box>
      <Box
        component="th"
        className="week-day"
        aria-label="Saturday"
        scope="col"
      >
        Sat
      </Box>
    </>
  );
});

MonthView.propTypes = {
  trElems: Proptypes.node,
};

export default MonthView;
