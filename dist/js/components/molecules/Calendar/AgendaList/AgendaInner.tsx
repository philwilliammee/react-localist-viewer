import React from "react";
import PropTypes from "prop-types";
import AgendaInnerContent from "./AgendaInnerContent";

const AgendaListView = (props: any) => {
  return <AgendaInnerContent {...props} event={props.event} />;
};

AgendaListView.propTypes = {
  event: PropTypes.object.isRequired,
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
