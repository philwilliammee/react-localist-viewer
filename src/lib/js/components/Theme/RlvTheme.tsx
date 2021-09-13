import React, { ReactElement } from "react";
import "./RlvTheme.css";

interface Props {
  children?: React.ReactChild;
}

export default function RlvTheme({ children }: Props): ReactElement {
  return <div className="rlv-theme">{children}</div>;
}
