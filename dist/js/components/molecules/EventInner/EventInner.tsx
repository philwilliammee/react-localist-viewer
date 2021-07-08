import React from "react";
import PropTypes from "prop-types";
import AddCal from "../AddCal/AddCal";
import { EventEvent } from "../../../../types/types";
import EventImage from "../../atoms/EventImage/EventImage";

import "./EventInner.scss";
import MoreInfo from "../MoreInfo";
import Tag from "../../atoms/Tag";
import EventDate from "../../atoms/EventDateTime";

interface Props {
  event: EventEvent;
}

const EventInner = ({ event }: Props) => (
  <section className="rlv-event-inner event-details">
    <div>
      <h3>{event.title}</h3>
      <div>
        <EventDate event={event} hideTime={false} />
        <Tag>{event.location_name}</Tag>
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
      <p>
        <AddCal event={event} hideaddcal="false" />
      </p>
    </div>
  </section>
);

EventInner.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventInner;
