import React from "react";
import PropTypes from "prop-types";
import {
  Checkbox as MuiCheckbox,
  CheckboxProps,
  FormControlLabel,
  Theme,
} from "@mui/material";
import { SxProps } from "@mui/system";

interface Props {
  name: string;
  label: string;
  color: CheckboxProps["color"];
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sx_label?: SxProps<Theme>;
}
const Checkbox = ({
  name,
  color,
  label,
  checked = false,
  onChange,
  sx_label,
}: Props) => (
  <FormControlLabel
    sx={sx_label ? { sx_label } : {}}
    control={
      <MuiCheckbox
        onChange={onChange}
        checked={checked}
        color={color}
        name={name}
        inputProps={{}}
      />
    }
    label={label}
  />
);

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
