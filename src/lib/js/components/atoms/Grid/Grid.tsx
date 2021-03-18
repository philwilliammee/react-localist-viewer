import React from "react";
import PropTypes from "prop-types";

interface Props {
  container?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  col?: number;
}

/**
 * Implements CWD FlexBox Grid
 * https://iws-preview.hosting.cornell.edu/ama39/cssf/style.html#section-59
 */
const Grid = (props: Props) => {
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
  col: PropTypes.number,
};

Grid.defaultProps = {
  col: 12,
};

export default Grid;
