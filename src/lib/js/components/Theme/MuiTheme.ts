import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
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
      fontFamily: "freight-sans-pro, sans-serif, Georgia, serif",
    },
    h2: {
      fontFamily: "freight-sans-pro, sans-serif, Georgia, serif",
      fontSize: "30px",
    },
    h3: {
      fontFamily: "freight-sans-pro, sans-serif, Georgia, serif",
      fontSize: "24px",
    },
    h4: {
      fontFamily: "freight-sans-pro, sans-serif, Georgia, serif",
      fontSize: "18px",
    },
    h5: {
      fontFamily: "freight-sans-pro, sans-serif, Georgia, serif",
      fontSize: "16px",
    },
    h6: {
      fontFamily: "freight-sans-pro, sans-serif, Georgia, serif",
    },
  },
});

export default theme;
