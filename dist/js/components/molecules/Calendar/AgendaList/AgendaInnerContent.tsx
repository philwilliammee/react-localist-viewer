import React from "react";
import PropTypes from "prop-types";
import { getEventTime, getClassItem } from "../../../../helpers/displayEvent";
import Truncate from "../../../atoms/Truncate";
import Time from "../../../atoms/Time";
import { Department, EventEvent, HideType } from "../../../../../types/types";
import EventImage from "../../../atoms/EventImage/EventImage";
// import "./AgendaInnerContent.scss";
import { Box } from "@mui/system";

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

  const tagStr = (eventTypes: Department[]) => {
    let spanStr;
    if (eventTypes) {
      spanStr = eventTypes.map((element: Department) => {
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
    <Box
      className={`rlv-agenda-inner-content ${classList}`}
      sx={{
        "& .events .field": {
          clear: "both",
        },

        "& .events time": {
          width: "auto",
          minHeight: 0,
          margin: "0 0 1em",
        },

        "& .events time .month": {
          float: "left",
          fontSize: "15px",
          lineHeight: "1",
          fontWeight: "400",
          padding: "9px 12px",
          textTransform: "uppercase",
        },

        "& .events time .day": {
          float: "left",
          fontSize: "15px",
          lineHeight: "1",
          fontWeight: "400",
          padding: "9px 12px",
        },

        "& .events h3": {
          width: "100%",
          fontSize: "21px",
          lineHeight: "1.4",
          marginBottom: "0.25em",
          fontFamily:
            "Iowan Old Style, Georgia, Athelas, Baskerville, Sitka Display, Constansia, serif",
        },

        "& .events .meta": {
          color: "#767676",
          fontSize: "13px",
          fontWeight: "400",
        },

        "& .events a": {
          display: "inline-block",
          width: "100%",
          textDecoration: "none",
          color: "#000",
          transition: "background 0.15s, box-shadow 0.15s",
        },

        "& .events a:hover h3, .events a:focus h3": {
          textDecoration: "underline",
          color: "#127cb5",
        },

        "& .events a:active h3": {
          color: "#000",
        },

        "& .events a:hover, .events a:focus": {
          background: "rgba(0, 0, 0, 0.05)",
          boxShadow: "0 0 0 15px rgba(0, 0, 0, 0.05)",
        },

        "& .events a:active": {
          background: "rgba(0, 0, 0, 0.09)",
          boxShadow: "0 0 0 15px rgba(0, 0, 0, 0.09)",
        },

        "& .inline-events-type": {
          float: "none",
          padding: "2px 8px 1px",
          background: "#fcf3e1",
          borderRadius: "4px",
          textDecoration: "none !important",
          color: "#000",
          marginLeft: "10px",
        },

        "& img": {
          float: "left",
          margin: "0 20px 0px 0px",
          objectFit: "cover",
          objectPosition: "100% 0",
          width: "200px",
          height: "150px",
        },
      }}
    >
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
                description={event.description}
                hidedescription="false"
                truncatedescription="300"
                readMore="read more"
              />
            </p>
          </div>
        </a>
      </div>
    </Box>
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
