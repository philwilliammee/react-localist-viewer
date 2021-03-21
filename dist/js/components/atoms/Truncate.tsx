import React from "react";
import PropTypes from "prop-types";
import { getTruncDesc } from "../../helpers/displayEvent";
import { isHidden } from "../../helpers/common";
import { EventEvent } from "../../../types/types";

interface Props {
  event: EventEvent;
  truncatedescription: string;
  hidedescription?: "true" | "false" | 1 | 0;
  readMore?: string;
}

const Truncate = (props: Props) => {
  const { hidedescription, event, truncatedescription, readMore } = props;
  if (isHidden(hidedescription)) {
    return <></>;
  }
  return (
    <>
      {getTruncDesc(event, truncatedescription)} {readMore}
    </>
  );
};

Truncate.propTypes = {
  event: PropTypes.object.isRequired,
  truncatedescription: PropTypes.string.isRequired,
  // hidedescription: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  //   .isRequired,
  hidedescription: PropTypes.oneOf(["true", "false", 1, 0, ""]),
  readMore: PropTypes.string,
};

Truncate.defaultProps = {
  readMore: "",
};

export default Truncate;
