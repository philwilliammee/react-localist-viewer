import React from "react";
import PropTypes from "prop-types";

/**
 * Implements CWD FlexBox Grid
 * https://iws-preview.hosting.cornell.edu/ama39/cssf/style.html#section-59
 *
 * @param {any} props
 */
const Grid = (props) => {
  if (props.container) {
    return (
      <div className="flex-grid" style={props.style}>
        {props.children}
      </div>
    );
  }
  return <div className={`flex-${props.width}`}>{props.children}</div>;
};

Grid.propTypes = {
  container: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.object,
  width: PropTypes.number,
};

Grid.defaultProps = {
  width: 12,
};

export default Grid;
