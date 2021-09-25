import * as React from "react";
import {
  getAbbrMonth,
  getEventStartDayString,
  getEventTime,
  getEventEndTime,
  getClassItem,
} from "../../../helpers/displayEvent";
import { EventElement, EventEvent } from "../../../../types/types";
import { Grid, Stack, Typography } from "@mui/material";
import EventLocation from "../../atoms/EventLocation";
import EventDateTime from "../../atoms/EventDateTime";
import EventTitle from "../../atoms/EventTitle";

const InlineCompactInner = ({ event }: { event: EventEvent }) => {
  const endTime = getEventEndTime(event);
  const abbrMonth = getAbbrMonth(event);
  const eventDay = getEventStartDayString(event);
  const eventEndTime = endTime ? ` - ${endTime}` : "";
  const eventTimeString = getEventTime(event) + eventEndTime;
  const classList = getClassItem(event);

  return (
    <Grid container className={classList}>
      <Grid
        item
        sx={{
          borderLeft: "4px solid",
          borderLeftColor: "secondary.main",
          borderRight: "1px solid",
          borderRightColor: "divider",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          alignContent="center"
          width="50px"
          height="100%"
        >
          <Typography component="div" textAlign="center">
            <Typography
              component="div"
              variant="overline"
              fontWeight="light"
              lineHeight="1"
            >
              {abbrMonth}
            </Typography>
            <Typography component="div" fontWeight="bold" lineHeight="1">
              {eventDay}
            </Typography>
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <EventTitle variant="h5" title={event.title} url={event.localist_url} />
        <EventDateTime hideTime={false} timeFormat={eventTimeString} />
        <EventLocation locationName={event.location_name} />
      </Grid>
    </Grid>
  );
};

interface InlineCompactProps {
  events: EventElement[];
  wrapperclass?: string;
  listclass?: string;
}

const InlineCompact = (props: InlineCompactProps) => {
  const { events, wrapperclass } = props;

  if (events.length === 0) {
    return <p>There are no upcoming events.</p>;
  }

  return (
    <Stack
      spacing={3}
      component="section"
      className={`rlv-inline-compact ${wrapperclass}`}
    >
      {events.map((event) => {
        return (
          <InlineCompactInner
            key={event.event.event_instances[0].event_instance.id}
            event={event.event}
          />
        );
      })}
    </Stack>
  );
};

export default InlineCompact;
