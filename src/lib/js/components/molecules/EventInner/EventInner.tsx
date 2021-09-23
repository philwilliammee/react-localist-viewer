import React from "react";
import AddCal from "../AddCal/AddCal";
import { EventEvent } from "../../../../types/types";
import EventImage from "../../atoms/EventImage/EventImage";
import MoreInfo from "../MoreInfo";
import EventDateTime from "../../atoms/EventDateTime";
import EventLocation from "../../atoms/EventLocation";
import { getEventDate, getEventFullTime } from "../../../helpers/displayEvent";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Tags from "../Tags";

interface Props {
  event: EventEvent;
}

const EventInner = ({ event }: Props) => (
  <Stack component="section" className="rlv-event-inner" spacing={1}>
    <EventDateTime
      dateFormat={getEventDate(event)}
      timeFormat={getEventFullTime(event)}
      hideTime={false}
    />

    <EventLocation locationName={event.location_name} />

    <Tags tags={event.tags} />

    <Typography
      color="text.primary"
      sx={{
        "img.rlv-event-image": {
          float: "left",
          margin: "0 20px 0px 0px",
          objectFit: "cover",
          objectPosition: "100% 0",
        },
      }}
    >
      <EventImage
        photoUrl={event.photo_url}
        title={event.title}
        hideimages={"false"}
        photoCrop="big"
      />
      <span dangerouslySetInnerHTML={{ __html: event.description }} />
    </Typography>
    {/* clear fix */}
    <Box
      sx={{
        clear: "both",
        display: "table",
      }}
    />
    <MoreInfo event={event} />
    <Box>
      <AddCal event={event} hideaddcal="false" />
    </Box>
  </Stack>
);

export default EventInner;
