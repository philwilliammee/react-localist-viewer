import React from "react";
import PropTypes from "prop-types";

// @todo shouldn't these go in atoms?

interface EventTitleProps {
  title: string;
  url: string;
}

const EventTitle = (props: EventTitleProps) => {
  const { title, url } = props;
  return (
    <h3>
      <a rel="noreferrer noopener" target="_blank" href={url}>
        {title}
      </a>
    </h3>
  );
};

EventTitle.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default EventTitle;
