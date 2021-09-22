import React from "react";
import { Button } from "@mui/material";
import theme from "../../Theme/MuiTheme";

interface FilterButtonProps {
  name: string;
  clickHandler: () => void;
  filterId: string;
  active?: string;
}
const FilterButton = (props: FilterButtonProps) => {
  const { filterId, active, clickHandler, name } = props;
  return (
    <Button
      variant="contained"
      id={filterId}
      className={`rlv-filter-button filter-btn ${
        active === filterId ? "active" : ""
      }`}
      type="button"
      onClick={clickHandler}
      sx={{
        "&.active": {
          background: theme.palette.action.active,
        },
      }}
    >
      {name}
    </Button>
  );
};

export default FilterButton;
