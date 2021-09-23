import React from "react";
import PropTypes from "prop-types";
import AddCal from "../AddCal/AddCal";
import { EventEvent } from "../../../../types/types";
import EventImage from "../../atoms/EventImage/EventImage";

import "./EventInner.scss";
import MoreInfo from "../MoreInfo";
import Tag from "../../atoms/Tag";
import EventDateTime from "../../atoms/EventDateTime";
import EventLocation from "../../atoms/EventLocation";
import { getEventDate, getEventFullTime } from "../../../helpers/displayEvent";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";

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
    <div>
      {event.tags.map((tag, id) => {
        return <Tag key={`${tag}-${id}`}>{tag}</Tag>;
      })}
    </div>

    <div className="field field-name-summary summary">
      <div className="rlv-event-image-wrapper">
        <EventImage
          photoUrl={event.photo_url}
          title={event.title}
          hideimages={"false"}
          photoCrop="big"
        />
      </div>
      <span dangerouslySetInnerHTML={{ __html: event.description }} />
    </div>
    <div className="clear" />
    <MoreInfo event={event} />
    <Box>
      <AddCal event={event} hideaddcal="false" />
    </Box>
  </Stack>
);

EventInner.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventInner;
