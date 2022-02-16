import React from "react";
import {
  Checkbox as MuiCheckbox,
  CheckboxProps,
  FormControlLabel,
} from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

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
  sx_label = [],
}: Props) => (
  <FormControlLabel
    sx={[...(Array.isArray(sx_label) ? sx_label : [sx_label])]}
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

export default Checkbox;
