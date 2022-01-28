import React from "react";
import { getTruncDesc } from "../../../helpers/displayEvent";
import { createMarkup, isHidden } from "../../../helpers/common";
import { HideType } from "../../../../types/types";
import { Typography } from "@mui/material";

interface Props {
  description?: string;
  truncatedescription: string | null;
  hidedescription: HideType;
  readMore?: string;
}

const Truncate = (props: Props) => {
  const { hidedescription, description, truncatedescription, readMore } = props;

  if (isHidden(hidedescription) || !description) {
    return <></>;
  }

  let htmlString = getTruncDesc(description, truncatedescription, readMore);
  const markup = createMarkup(htmlString);

  return (
    <Typography
      component="span"
      className="rlv-truncate"
      sx={{ wordBreak: "break-word" }}
      dangerouslySetInnerHTML={markup}
    />
  );
};

export default Truncate;
