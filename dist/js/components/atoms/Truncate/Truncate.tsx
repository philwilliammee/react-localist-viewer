import React from "react";
import PropTypes from "prop-types";
import { getTruncDesc } from "../../../helpers/displayEvent";
import { isHidden } from "../../../helpers/common";
import { EventEvent, HideType } from "../../../../types/types";

import "./Truncate.scss";

interface Props {
  event: EventEvent;
  truncatedescription: string;
  hidedescription: HideType;
  readMore?: string;
}

const Truncate = (props: Props) => {
  const { hidedescription, event, truncatedescription, readMore } = props;
  if (isHidden(hidedescription)) {
    return <></>;
  }
  return (
    <span className="rlv-truncate">
      {getTruncDesc(event, truncatedescription)}{" "}
      {truncatedescription ? readMore : ""}
    </span>
  );
};

Truncate.propTypes = {
  event: PropTypes.object.isRequired,
  truncatedescription: PropTypes.string.isRequired,
  hidedescription: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  readMore: PropTypes.string,
};

Truncate.defaultProps = {
  readMore: "",
};

export default Truncate;
