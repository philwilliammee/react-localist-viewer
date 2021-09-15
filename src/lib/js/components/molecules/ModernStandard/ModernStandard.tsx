import React from "react";
import PropTypes from "prop-types";
import { getEventTime, getClassItem } from "../../../helpers/displayEvent";
import AddCal from "../AddCal/AddCal";
import Truncate from "../../atoms/Truncate/Truncate";
import Time from "../../atoms/Time";
import { Department, InnerProps, StandardProps } from "../../../../types/types";
import EventImage from "../../atoms/EventImage/EventImage";
import "./ModernStandard.scss";

export const ModernStandardInner = (props: InnerProps) => {
  const { event, hideimages, hidetime } = props;

  /**
   *
   * @param {obj} eventTypes An array of events.
   * @return {string} Html string
   */
  const tagStr = (eventTypes: Department[]) => {
    let spanStr;
    if (eventTypes) {
      spanStr = eventTypes.map((element) => {
        return (
          <span key={element.id} className="inline-events-type">
            {element.name}
          </span>
        );
      });
    }
    return spanStr;
  };

  const eventTime = getEventTime(event);
  const classList = getClassItem(event);
  return (
    <div className={`rlv-modern-standard ${classList}`}>
      <div className="events">
        <a
          href={event.localist_url}
          className="group-link-wrapper field-group-link"
        >
          {hidetime ? "" : <Time event={event} />}
          <div className="field title">
            <h3>{event.title}</h3>
          </div>
          <div className="field meta">
            <p>
              {hidetime ? "" : eventTime}
              {event.location_name ? `, ${event.location_name}` : ""}
              {tagStr(event.filters.event_types)}
            </p>
          </div>
          <div className="field field-name-summary summary">
            <p>
              <EventImage
                photoUrl={event.photo_url}
                title={event.title}
                hideimages={hideimages}
                photoCrop="big"
              />
              <Truncate
                description={props.event.description}
                {...props}
                readMore="read more"
              />
            </p>
          </div>
        </a>
        <AddCal {...props} />
      </div>
    </div>
  );
};

ModernStandardInner.propTypes = {
  event: PropTypes.object.isRequired,
  hideaddcal: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  truncatedescription: PropTypes.string.isRequired,
  hidedescription: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  hideimages: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  hidetime: PropTypes.bool,
};

ModernStandardInner.defaultProps = {
  hidetime: false,
};

const ModernStandard = (props: StandardProps) => {
  const { events, listClassArray, wrapperClassArray } = props;
  const wrapperClassList = wrapperClassArray.join(" ");
  const listClassList = listClassArray.join(" ");
  return (
    <section className="events-modern-standard modern" title="Events List">
      <div>
        <div className={`rlv-component cwd-card-grid ${wrapperClassList}`}>
          <div className={listClassList}>
            {events.length > 0 ? (
              events.map((event) => {
                return (
                  <ModernStandardInner
                    key={event.event.event_instances[0].event_instance.id}
                    event={event.event}
                    {...props}
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

ModernStandard.propTypes = {
  events: PropTypes.array,
  filterby: PropTypes.string.isRequired,
  hideaddcal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  truncatedescription: PropTypes.string,
  hideimages: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hidedescription: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  wrapperClassArray: PropTypes.array,
  listClassArray: PropTypes.array,
};

ModernStandard.defaultProps = {
  events: [],
  hideaddcal: "false",
  truncatedescription: "250",
  hideimages: "false",
  wrapperClassArray: [],
  listClassArray: [],
  hidedescription: "false",
};
export default ModernStandard;
