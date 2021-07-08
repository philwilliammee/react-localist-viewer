import React, { ReactElement } from "react";
import "./Loading.scss";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Loading(): ReactElement {
  return (
    <div className="rlv-loading">
      <CircularProgress />
    </div>
  );
}
