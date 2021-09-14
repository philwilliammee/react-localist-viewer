import React from "react";
import { Grid as MuiGrid } from "@mui/material";

export type GridCol = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridProps {
  container?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  col?: GridCol;
}

/**
 * View CWD FlexBox Grid https://iws-preview.hosting.cornell.edu/ama39/cssf/style.html#section-59
 */
const Grid = (props: GridProps) => {
  if (props.container) {
    return (
      <MuiGrid container className="rlv-flex-grid" style={props.style}>
        {props.children}
      </MuiGrid>
    );
  }
  return (
    <MuiGrid
      style={props.style}
      className={`rlv-flex-${props.col}`}
      item
      md={props.col}
      xs={12}
    >
      {props.children}
    </MuiGrid>
  );
};

export default Grid;
