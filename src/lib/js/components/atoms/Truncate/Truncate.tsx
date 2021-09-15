import React from "react";
import PropTypes from "prop-types";
import { getTruncDesc } from "../../../helpers/displayEvent";
import { createMarkup, isHidden } from "../../../helpers/common";
import { HideType } from "../../../../types/types";

import "./Truncate.scss";

interface Props {
  description?: string;
  truncatedescription: string;
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

  return <span className="rlv-truncate" dangerouslySetInnerHTML={markup} />;
};

Truncate.propTypes = {
  description: PropTypes.string.isRequired,
  truncatedescription: PropTypes.string.isRequired,
  hidedescription: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  readMore: PropTypes.string,
};

Truncate.defaultProps = {
  readMore: "",
};

export default Truncate;
