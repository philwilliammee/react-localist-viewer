import React from "react";
import PropTypes from "prop-types";

interface EventDateProps {
  date: string;
}
const EventDate = (props: EventDateProps) => {
  const { date } = props;
  return (
    <h4 className="meta date">
      <span className="fulldate">{date}</span>
    </h4>
  );
};

EventDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default EventDate;
