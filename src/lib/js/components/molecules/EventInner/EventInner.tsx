import React from "react";
import AddCal from "../AddCal/AddCal";
import { EventEvent } from "../../../../types/types";
import MoreInfo from "../MoreInfo";
import EventDateTime from "../../atoms/EventDateTime";
import EventLocation from "../../atoms/EventLocation";
import { getEventDate, getEventFullTime } from "../../../helpers/displayEvent";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import Tags from "../Tags";
import InlineImage from "../InlineImage/InlineImage";

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
    <InlineImage
      photoUrl={event.photo_url}
      title={event.title}
      hideimages="false" //@todo pass this prop from parent
      photoCrop="big"
      description={event.description_text}
      hidedescription="false" //@todo pass this prop from parent
      truncatedescription={null} //@todo pass this prop from parent
      readMore="Read More" //@todo pass this prop from parent
    />
    <MoreInfo event={event} />
    <Box>
      <AddCal event={event} hideaddcal="false" />
    </Box>
  </Stack>
);

export default EventInner;
