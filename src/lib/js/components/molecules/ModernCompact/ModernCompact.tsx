import React from "react";
import PropTypes from "prop-types";
import { getEventTime, getClassItem } from "../../../helpers/displayEvent";
import AddCal from "../AddCal/AddCal";
import EventThumbnail from "../../atoms/EventThumbnail";
import Truncate from "../../atoms/Truncate/Truncate";
import Time from "../../atoms/Time";
import { InnerProps, StandardProps } from "../../../../types/types";

import "./ModernCompact.scss";

const ModernCompactInner = (props: InnerProps) => {
  const { event, hideimages } = props;
  const eventTime = getEventTime(event);
  const classList = getClassItem(event);
  return (
    <div className={classList}>
      <div className="events">
        <a
          href={event.fieldDestinationUrl?.uri || ""}
          className="group-link-wrapper field-group-link"
        >
          <EventThumbnail
            photoUrl={event.fieldEventImage?.url || ""}
            title={event.title || ""}
            hideimages={hideimages}
            photoCrop="big"
          />
          <Time event={event} />
          <div className="field title">
            <h3>{event.title}</h3>
          </div>
          <div className="field meta">
            <p>
              {eventTime}
              {event.fieldEventLocation ? `, ${event.fieldEventLocation}` : ""}
            </p>
          </div>
          <div className="field field-name-summary summary">
            <p>
              <Truncate {...props} />
            </p>
          </div>
        </a>
        <AddCal {...props} />
      </div>
    </div>
  );
};

ModernCompactInner.propTypes = {
  event: PropTypes.object.isRequired,
  truncatedescription: PropTypes.string.isRequired,
  hideaddcal: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  hideimages: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  hidedescription: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

const ModernCompact = (props: StandardProps) => {
  const { events, listClassArray, wrapperClassArray } = props;
  const wrapperClassList = wrapperClassArray.join(" ");
  const listClassList = listClassArray.join(" ");
  return (
    <section className="rlv-modern-compact modern" title="Events List">
      <div className="events-main-body">
        <div className={`rlv-component cwd-card-grid ${wrapperClassList}`}>
          <div className={listClassList}>
            {events.length > 0 ? (
              events.map((event) => {
                return (
                  <ModernCompactInner
                    key={event.entityId}
                    event={event}
                    // display={event.display}
                    {...props}
                  />
                );
              })
            ) : (
              <p>There are no upcomming events.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

ModernCompact.propTypes = {
  events: PropTypes.array,
  filterby: PropTypes.string.isRequired,
  truncatedescription: PropTypes.string,
  wrapperclass: PropTypes.string,
  listclass: PropTypes.string,
  hideimages: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  hideaddcal: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  hidedescription: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  wrapperClassArray: PropTypes.array,
  listClassArray: PropTypes.array,
};

ModernCompact.defaultProps = {
  events: [],
  truncatedescription: "150",
  wrapperclass: "",
  listclass: "",
  wrapperClassArray: [],
  listClassArray: [],
};
export default ModernCompact;
