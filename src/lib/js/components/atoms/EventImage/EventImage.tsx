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
