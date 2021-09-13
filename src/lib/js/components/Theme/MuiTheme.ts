import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2d668e",
    },
    secondary: {
      main: "#b31b1b",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "system-ui",
      "BlinkMacSystemFont",
      "Avenir Next",
      "Segoe UI",
      "Roboto",
      "Helvetica",
      "Neue",
      "sans-serif",
    ].join(","),
    h1: {
      fontFamily: "Georgia, serif",
    },
    h2: {
      fontFamily: "Georgia, serif",
      fontSize: "30px",
    },
    h3: {
      fontFamily: "Georgia, serif",
      fontSize: "24px",
    },
    h4: {
      fontFamily: "Georgia, serif",
      fontSize: "px18",
    },
    h5: {
      fontFamily: "Georgia, serif",
      fontSize: "16px",
    },
    h6: {
      fontFamily: "Georgia, serif",
    },
  },
});

export default theme;
