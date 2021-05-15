import React, { ReactElement } from "react";
import "./Theme.css";

interface Props {
  children?: React.ReactChild;
}

export default function Theme({ children }: Props): ReactElement {
  return <div className="rlv-theme">{children}</div>;
}
