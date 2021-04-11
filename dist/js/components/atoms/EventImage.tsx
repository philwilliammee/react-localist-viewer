import React from "react";
import PropTypes from "prop-types";
import { isHidden } from "../../helpers/common";
import { EventImageCropTypes, HideType } from "../../../types/types";

interface EventImageProps {
  photoUrl: string;
  title: string;
  hideimages?: HideType;
  photoCrop?: EventImageCropTypes;
}

const EventImg = (props: EventImageProps) => {
  const { hideimages, photoUrl, title, photoCrop } = props;
  const photo = photoUrl.replace("/huge/", `/${photoCrop}/`);
  if (isHidden(hideimages)) {
    return <></>;
  }
  return <img alt={title} height="150" src={photo} loading="lazy" />;
};

EventImg.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  hideimages: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  photoCrop: PropTypes.oneOf(["huge", "big", "big_square"]),
};
EventImg.defaultProps = {
  hideimages: null,
  photoCrop: "big",
};

export default EventImg;
