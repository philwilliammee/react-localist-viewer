import React, { SyntheticEvent, useState } from "react";
import { isHidden } from "../../../helpers/common";
import { EventImageCropTypes, HideType } from "../../../../types/types";
import { Box } from "@mui/system";

interface EventImageProps {
  photoUrl: string;
  title: string;
  hideimages?: HideType;
  photoCrop?: EventImageCropTypes;
}

const EventImage = (props: EventImageProps) => {
  const { hideimages, photoUrl, title, photoCrop } = props;
  const [src, setImg] = useState(photoUrl);

  if (isHidden(hideimages)) {
    return <></>;
  }

  const photo = src.replace("/huge/", `/${photoCrop}/`);
  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    // fall back image url
    setImg(
      "https://brand.cornell.edu/assets/images/logos/cornell-insignia-red.svg"
    );
  };

  return (
    <Box
      component="img"
      className="rlv-event-image"
      alt={title}
      src={photo}
      loading="lazy"
      onError={handleError}
      sx={{
        width: "200px",
        opacity: 0,
        animation: "fade-in 0.3s ease-out forwards",
        "@keyframes fade-in": {
          from: {
            opacity: 0,
          },

          to: {
            opacity: 1,
          },
        },
      }}
    />
  );
};

export default EventImage;
