import React, { ReactElement } from "react";
import "./Tag.scss";

interface Props {
  children?: React.ReactChild;
}

export default function Tag({ children }: Props): ReactElement {
  if (!children) {
    return <></>;
  }
  return <span className="rlv-tag">{children}</span>;
}
