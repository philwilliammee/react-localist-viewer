import { EventImageCropTypes, HideType } from "../../../../types/types";
import * as React from "react";
import { Typography } from "@mui/material";
import EventImage from "../../atoms/EventImage";
import { Box } from "@mui/system";
import Truncate from "../../atoms/Truncate";

interface Props {
  photoUrl: string;
  title: string;
  hideimages?: HideType;
  photoCrop?: EventImageCropTypes;
  description: string;
  hidedescription?: HideType;
  truncatedescription?: string | null;
  readMore?: string;
}

const InlineImage = (props: Props) => {
  const {
    photoUrl,
    title,
    hideimages,
    photoCrop,
    description,
    hidedescription,
    truncatedescription,
    readMore,
  } = props;
  return (
    <>
      <Typography
        color="text.primary"
        sx={{
          "img.rlv-event-image": {
            float: "left",
            margin: "0 20px 0px 0px",
            objectFit: "cover",
            objectPosition: "100% 0",
          },
        }}
      >
        <EventImage
          photoUrl={photoUrl}
          title={title}
          hideimages={hideimages}
          photoCrop={photoCrop}
        />

        <Truncate
          description={description}
          hidedescription={hidedescription || "false"}
          truncatedescription={truncatedescription || null}
          readMore={readMore || undefined}
        />
      </Typography>
      {/* clear fix */}
      <Box
        sx={{
          clear: "both",
          display: "table",
        }}
      />
    </>
  );
};

export default InlineImage;
