import { Typography, useTheme } from "@mui/material";
import React, { ReactElement } from "react";

interface Props {
  children?: React.ReactChild;
}

export default function Tag({ children }: Props): ReactElement {
  const theme = useTheme();
  if (!children) {
    return <></>;
  }
  return (
    <Typography
      component="span"
      className="rlv-tag"
      fontSize={theme.typography.body2.fontSize}
      p={1}
      sx={{
        backgroundColor: theme.palette.info.light,
        color: theme.palette.info.contrastText,
        borderRadius: theme.shape.borderRadius,
      }}
    >
      {children}
    </Typography>
  );
}
