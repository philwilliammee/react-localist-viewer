import React, { SyntheticEvent, useState } from "react";
import PropTypes from "prop-types";
import { isHidden } from "../../../helpers/common";
import { EventImageCropTypes, HideType } from "../../../../types/types";
import "./EventImage.scss";

interface EventImageProps {
  photoUrl: string;
  title: string;
  hideimages?: HideType;
  photoCrop?: EventImageCropTypes;
}

const EventImage = (props: EventImageProps) => {
  const { hideimages, photoUrl, title, photoCrop } = props;
  const [src, setImg] = useState(photoUrl);

  const photo = src.replace("/huge/", `/${photoCrop}/`);

  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    // fall back image url
    setImg(
      "https://localist-images.azureedge.net/photos/383704/huge/280b45456aa9d4e5eb4e4de5828d4d1dc0772e63.jpg"
    );
  };
  if (isHidden(hideimages)) {
    return <></>;
  }
  return (
    <img
      className="rlv-event-image"
      alt={title}
      height="150"
      src={photo}
      loading="lazy"
      onError={handleError}
    />
  );
};

EventImage.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  hideimages: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  photoCrop: PropTypes.oneOf(["huge", "big", "big_square"]),
};
EventImage.defaultProps = {
  hideimages: null,
  photoCrop: "big",
};

export default EventImage;
