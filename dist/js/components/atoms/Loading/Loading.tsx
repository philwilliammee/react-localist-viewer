import React, { ReactElement } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";
import theme from "../../Theme/MuiTheme";

export default function Loading(): ReactElement {
  return (
    <Box
      className="rlv-loading"
      sx={{
        textAlign: "center",
        margin: "auto",
        padding: theme.spacing(8),
      }}
    >
      <CircularProgress />
    </Box>
  );
}
