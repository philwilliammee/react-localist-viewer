import React from "react";
import PropTypes from "prop-types";
import { isHidden } from "../../../helpers/common";
import { HideType } from "../../../../types/types";
import "./EventDescription.scss";

interface EventDescriptionProps {
  description: string;
  title: string;
  url: string;
  hidedescription?: HideType;
}
const EventDescription = (props: EventDescriptionProps) => {
  const { description, title, url, hidedescription } = props;

  if (isHidden(hidedescription) && isHidden(hidedescription)) {
    return <></>;
  }

  const descriptionLink = (
    <a
      className="read-more more"
      href={url}
      rel="noreferrer noopener"
      target="_blank"
    >
      {" "}
      read more
      <span className="visually-hidden"> about {title}</span>
    </a>
  );

  return (
    <div className="rlv-event-description">
      <p>
        {isHidden(hidedescription) ? "" : description}
        {isHidden(hidedescription) ? "" : descriptionLink}
      </p>
    </div>
  );
};

EventDescription.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  hidedescription: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EventDescription.defaultProps = {
  hidedescription: "false",
};

export default EventDescription;
