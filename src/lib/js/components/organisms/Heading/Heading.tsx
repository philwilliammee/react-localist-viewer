import React from "react";
import PropTypes from "prop-types";
import "./Heading.scss";
import { Typography } from "@material-ui/core";

interface Props {
  heading: string;
  readmore: string;
  url: string;
}

const Heading = (props: Props) => {
  const { heading, readmore, url } = props;
  const renderHeading = heading ? (
    <Typography variant="h2">{heading}</Typography>
  ) : (
    ""
  );
  const renderReadmore = !readmore || !url ? "" : <a href={url}>{readmore}</a>;
  return (
    <div className="rlv-heading">
      {renderHeading}
      {renderReadmore}
    </div>
  );
};

Heading.propTypes = {
  heading: PropTypes.string.isRequired,
  readmore: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Heading;
