import React from "react";
import PropTypes from "prop-types";
import {
  Checkbox as MuiCheckbox,
  CheckboxProps,
  FormControlLabel,
} from "@mui/material";

interface Props {
  name: string;
  label: string;
  color: CheckboxProps["color"];
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Checkbox = ({ name, color, label, checked = false, onChange }: Props) => (
  <FormControlLabel
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
