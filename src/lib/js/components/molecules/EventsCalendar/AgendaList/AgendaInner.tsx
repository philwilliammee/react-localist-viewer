// @ts-nocheck
import React, { useContext } from "react";
import EventsContext from "../../../../context/EventsContext";
import PropTypes from "prop-types";
import AgendaInnerContent from "./AgendaInnerContent";

const AgendaListView = (props) => {
  const { calendarEvent } = props;
  const { events } = useContext(EventsContext);
  const event = events.find((e) => e.event.id === calendarEvent.id).event;

  if (!event || event.id === -1) {
    return <></>;
  }

  return <AgendaInnerContent {...props} event={event} />;
};

AgendaListView.propTypes = {
  calendarEvent: PropTypes.object.isRequired,
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

AgendaListView.defaultProps = {
  hidetime: false,
};

export default AgendaListView;
