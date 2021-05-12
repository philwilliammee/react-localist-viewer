import React, { ReactElement } from "react";
import "./Loading.scss";

export default function Loading(): ReactElement {
  return (
    <div className="rlv-loading">
      <span className="fa fa-spin fa-cog" />
    </div>
  );
}
