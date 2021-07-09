import React from "react";
import PropTypes from "prop-types";
import AddCal from "../AddCal/AddCal";
import EventImage from "../../atoms/EventImage/EventImage";

import "./EventInner.scss";
import MoreInfo from "../MoreInfo";
import Tag from "../../atoms/Tag";
import EventDate from "../../atoms/EventDateTime";
import { NodeEvent } from "types/graphql";

interface Props {
  event: NodeEvent;
}

const EventInner = ({ event }: Props) => (
  <section className="rlv-event-inner event-details">
    <div>
      <h3>{event.title}</h3>
      <div>
        <EventDate event={event} hideTime={false} />
        <Tag>{event.fieldEventLocation || ""}</Tag>
      </div>
      <div className="field field-name-summary summary">
        <div className="rlv-event-image-wrapper">
          <EventImage
            photoUrl={event.fieldEventImage?.url as string}
            title={event.title || ""}
            hideimages={"false"}
            photoCrop="big"
          />
        </div>
        <span
          dangerouslySetInnerHTML={{
            __html: event.fieldShortDescription?.processed || "",
          }}
        />
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
