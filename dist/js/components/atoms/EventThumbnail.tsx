import React from "react";
import PropTypes from "prop-types";
import { isHidden } from "../../helpers/common";
import { EventImageCropTypes, HideType } from "../../../types/types";
import EventImage from "./EventImage/EventImage";

interface EventThumbnailProps {
  photoUrl: string;
  title: string;
  hideimages?: HideType;
  photoCrop?: EventImageCropTypes;
}

const EventThumbnail = (props: EventThumbnailProps) => {
  const { hideimages, photoUrl, title, photoCrop } = props;
  if (isHidden(hideimages)) {
    return <></>;
  }
  return (
    <div className="group-image">
      <EventImage
        hideimages={hideimages}
        photoUrl={photoUrl}
        title={title}
        photoCrop={photoCrop}
      />
    </div>
  );
};

EventThumbnail.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  hideimages: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  photoCrop: PropTypes.oneOf(["huge", "big", "big_square"]),
};
EventThumbnail.defaultProps = {
  hideimages: null,
  photoCrop: "big",
};

export default EventThumbnail;
