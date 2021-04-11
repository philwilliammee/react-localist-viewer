import React from "react";
import PropTypes from "prop-types";

interface FilterButtonProps {
  name: string;
  clickHandler: () => void;
  filterId: string;
  active?: string;
}
const FilterButton = (props: FilterButtonProps) => {
  const { filterId, active, clickHandler, name } = props;
  return (
    <button
      id={filterId}
      className={`filter-btn ${active === filterId ? "active" : ""}`}
      type="button"
      onClick={clickHandler}
    >
      {name}
    </button>
  );
};
FilterButton.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  filterId: PropTypes.string.isRequired,
  active: PropTypes.string,
};

FilterButton.defaultProps = {
  active: "",
};

export default FilterButton;
