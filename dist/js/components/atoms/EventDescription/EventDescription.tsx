import React from "react";
import { isHidden } from "../../../helpers/common";
import { HideType } from "../../../../types/types";
import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface EventDescriptionProps {
  description: string;
  title: string;
  url: string;
  hidedescription?: HideType;
}
const EventDescription = (props: EventDescriptionProps) => {
  const { description, title, url, hidedescription } = props;

  if (isHidden(hidedescription)) {
    return <></>;
  }

  return (
    <Box className="rlv-event-description" sx={{ wordBreak: "break-word" }}>
      <Typography component="p">
        {description}{" "}
        <Link
          className="read-more more"
          href={url}
          rel="noreferrer noopener"
          target="_blank"
        >
          read more
          <span className="visually-hidden"> about {title}</span>
        </Link>
      </Typography>
    </Box>
  );
};

export default EventDescription;
