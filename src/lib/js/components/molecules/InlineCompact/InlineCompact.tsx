import React from "react";
import PropTypes from "prop-types";
import {
  getAbbrMonth,
  getDay,
  getEventTime,
  getEventEndTime,
  getClassItem,
} from "../../../helpers/displayEvent";
import { EventElement } from "../../../../types/types";
import "./InlineCompact.scss";
import RoomIcon from "@material-ui/icons/Room";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { NodeEvent } from "types/graphql";

const InlineCompactInner = ({ event }: { event: NodeEvent }) => {
  const eventTime = getEventTime(event);
  const endTime = getEventEndTime(event);

  const renderEventLocation = (locationName?: string) => {
    if (!locationName) {
      return "";
    }
    return (
      <div className="event-location">
        <RoomIcon className="room-icon" />
        {locationName}
      </div>
    );
  };
  const classList = getClassItem(event);
  return (
    <div className={`rlv-inline-compact views-row ${classList}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2 event-month-and-day">
            <div>
              <span className="event-month">{getAbbrMonth(event)}</span>
              <span className="event-day">{getDay(event)}</span>
            </div>
          </div>
          <div className="col-sm-8 event-title-and-location">
            <div className="event-title">
              <a href={event.fieldDestinationUrl?.uri || ""} hrefLang="en">
                {event.title}
              </a>
            </div>
            <div className="event-times">
              <AccessTimeIcon className="access-time-icon" />
              {eventTime}
              {endTime ? ` - ${endTime}` : ""}
            </div>
            {renderEventLocation(event.title || "")}
          </div>
        </div>
      </div>
    </div>
  );
};

InlineCompactInner.propTypes = {
  event: PropTypes.object.isRequired,
};

interface InlineCompactProps {
  events: EventElement[];
  wrapperclass?: string;
  listclass?: string;
}
const InlineCompact = (props: InlineCompactProps) => {
  const { events, listclass, wrapperclass } = props;

  return (
    <section className="modern" id="eventsInlineCompact" title="Events List">
      <div className="events-main-body">
        <div className={`rlv-component compact events-listing ${wrapperclass}`}>
          <div className={`events-list view-content ${listclass}`}>
            {events.length > 0 ? (
              events.map((event) => {
                return (
                  <InlineCompactInner
                    key={event.event.entityId}
                    event={event.event}
                  />
                );
              })
            ) : (
              <p>There are no upcoming events.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

InlineCompact.propTypes = {
  events: PropTypes.array,
  wrapperclass: PropTypes.string,
  listclass: PropTypes.string,
};

InlineCompact.defaultProps = {
  events: [],
  wrapperclass: "",
  listclass: "",
};
export default InlineCompact;
