import React from "react";
import PropTypes from "prop-types";
import "./EventTitle.scss";
import { Link, Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";

// @todo shouldn't these go in atoms?

interface EventTitleProps {
  title: string;
  url: string;
  variant?: Variant;
}

const EventTitle = (props: EventTitleProps) => {
  const { title, url, variant } = props;
  return (
    <Typography
      component="h3"
      variant={variant || "h3"}
      className="rlv-event-title"
    >
      <Link rel="noreferrer noopener" target="_blank" href={url}>
        {title}
      </Link>
    </Typography>
  );
};

EventTitle.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default EventTitle;
