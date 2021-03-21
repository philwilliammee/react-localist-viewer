import React from "react";
import PropTypes from "prop-types";

export type GridCol = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridProps {
  container?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  col?: GridCol;
}

/**
 * Implements CWD FlexBox Grid
 * https://iws-preview.hosting.cornell.edu/ama39/cssf/style.html#section-59
 */
const Grid = (props: GridProps) => {
  if (props.container) {
    return (
      <div className="flex-grid" style={props.style}>
        {props.children}
      </div>
    );
  }
  return (
    <div style={props.style} className={`flex-${props.col}`}>
      {props.children}
    </div>
  );
};

Grid.propTypes = {
  container: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.object,
  col: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
};

Grid.defaultProps = {
  col: 12,
};

export default Grid;
