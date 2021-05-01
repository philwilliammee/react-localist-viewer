import React from "react";
import PropTypes from "prop-types";
import { getEventTime, getClassItem } from "../../../../helpers/displayEvent";
import Truncate from "../../../atoms/Truncate";
import Time from "../../../atoms/Time";
import { EventEvent, HideType } from "../../../../../types/types";
import EventImage from "../../../atoms/EventImage/EventImage";

interface Props {
  hideaddcal: HideType;
  truncatedescription: string;
  hidedescription: HideType;
  hideimages: HideType;
  hidetime: boolean;
  setShowDialog: (bool: boolean) => void;
  setEventSelected: (event: EventEvent) => void;
  event: EventEvent;
}

const AgendaInnerContent = (props: Props) => {
  const {
    // calendarEvent,
    hideimages,
    hidetime,
    setShowDialog,
    setEventSelected,
    event,
  } = props;

  /**
   *
   * @param {obj} eventTypes
   * @return {string} Html string
   */
  const tagStr = (eventTypes: any) => {
    let spanStr;
    if (eventTypes) {
      spanStr = eventTypes.map((element: any) => {
        return (
          <span key={element.id} className="inline-events-type">
            {element.name}
          </span>
        );
      });
    }
    return spanStr;
  };

  const handleOnClick = () => {
    setEventSelected(event);
    setShowDialog(true);
  };

  const eventTime = getEventTime(event);
  const classList = getClassItem(event);
  return (
    <div className={classList}>
      <div className="events">
        <a
          href={`#${event.id}`}
          className="group-link-wrapper field-group-link"
          onClick={handleOnClick}
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
                event={event}
                hidedescription="false"
                truncatedescription="300"
                readMore="read more"
              />
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

AgendaInnerContent.propTypes = {
  hideaddcal: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  truncatedescription: PropTypes.string.isRequired,
  hidedescription: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  hideimages: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  hidetime: PropTypes.bool,
  setShowDialog: PropTypes.func.isRequired,
  setEventSelected: PropTypes.func.isRequired,
};

AgendaInnerContent.defaultProps = {
  hidetime: false,
};

export default AgendaInnerContent;
