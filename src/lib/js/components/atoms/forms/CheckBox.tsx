import React from "react";
import PropTypes from "prop-types";
import {
  Checkbox as MuiCheckbox,
  CheckboxProps,
  FormControlLabel,
} from "@material-ui/core";

interface Props {
  name: string;
  label: string;
  color: CheckboxProps["color"];
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Checkbox = ({ name, color, label, checked = false, onChange }: Props) => (
  // <input type={type} name={name} checked={checked} onChange={onChange} />
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
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
