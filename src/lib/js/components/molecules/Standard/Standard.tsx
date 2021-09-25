import React from "react";
import {
  getEventTime,
  getStartDateStringMonthYear,
  getClassItem,
  getEventStart,
} from "../../../helpers/displayEvent";
import AddCal from "../AddCal/AddCal";
import {
  EventElement,
  EventEvent,
  FilterBy,
  Format,
  HideType,
} from "../../../../types/types";
import EventTitle from "../../atoms/EventTitle";
import EventLocation from "../../atoms/EventLocation";
import EventIcon from "@mui/icons-material/Event";
import InlineImage from "../InlineImage/InlineImage";
import { Box } from "@mui/system";
import { Stack, Typography, useTheme } from "@mui/material";
import moment from "moment";

interface StandardInnerProps {
  event: EventEvent;
  filterby: FilterBy;
  truncatedescription?: string;
  hideaddcal: HideType;
  hidedescription: HideType;
  hideimages: HideType;
}

const StandardInner = (props: StandardInnerProps) => {
  const { event, truncatedescription, hidedescription, hideimages } = props;
  const classList = getClassItem(event);
  return (
    <div className="views-row">
      <Stack className={classList} spacing={1} mb={3}>
        <EventTitle title={event.title} url={event.localist_url} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <EventLocation locationName={event.location_name} />
          <Typography variant="subtitle1">{getEventTime(event)}</Typography>
        </Box>
        <InlineImage
          photoUrl={event.photo_url}
          title={event.title}
          hideimages={hideimages}
          photoCrop="big"
          description={event.description_text}
          hidedescription={hidedescription}
          truncatedescription={truncatedescription}
        />
        <AddCal {...props} />
      </Stack>
    </div>
  );
};

interface StandardProps {
  events: EventElement[];
  filterby: FilterBy;
  format: Format;
  truncatedescription?: string;
  thumbnail?: string;
  wrapperClassArray: string[];
  listClassArray: string[];
  hideaddcal: HideType;
  hidedescription: HideType;
  hideimages: HideType;
}
const Standard = (props: StandardProps) => {
  const {
    events,
    filterby,
    hideaddcal,
    truncatedescription,
    hidedescription,
    hideimages,
    listClassArray,
    wrapperClassArray,
  } = props;
  const theme = useTheme();
  let lastMonth = "";
  let lastDay = "";

  const getMonth = (event: EventEvent) => {
    const month = getStartDateStringMonthYear(event);
    if (lastMonth !== month) {
      lastMonth = month;
      return (
        <Typography
          component="h3"
          sx={{
            textAlign: "center",
            color: theme.palette.secondary.contrastText,
            padding: theme.spacing(1),
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(1),
            background: theme.palette.secondary.dark,
          }}
        >
          {month}
        </Typography>
      );
    }
    return "";
  };

  const getEventStartDayString = (event: EventEvent) => {
    const displayDate = moment(getEventStart(event)).format("M/DD/YYYY");
    if (lastDay !== displayDate) {
      lastDay = displayDate;
      return (
        <Typography
          component="h4"
          className="day-header"
          color="text.primary"
          marginBottom={2}
        >
          <EventIcon
            className="event-icon"
            sx={{
              fontSize: "inherit",
              marginRight: 1,
            }}
          />
          {displayDate}
        </Typography>
      );
    }
    return "";
  };
  const wrapperClassList = wrapperClassArray.join(" ");
  const listClassList = listClassArray.join(" ");
  return (
    <section className={`rlv-standard ${wrapperClassList}`}>
      <div className={`events-list ${listClassList}`}>
        {events.length > 0 ? (
          events.map((event) => {
            return (
              <div key={event.event.event_instances[0].event_instance.id}>
                {getMonth(event.event)}
                {getEventStartDayString(event.event)}
                <StandardInner
                  event={event.event}
                  filterby={filterby}
                  hideaddcal={hideaddcal}
                  truncatedescription={truncatedescription}
                  hidedescription={hidedescription}
                  hideimages={hideimages}
                />
              </div>
            );
          })
        ) : (
          <p>There are no upcoming events.</p>
        )}
      </div>
    </section>
  );
};

export default Standard;
