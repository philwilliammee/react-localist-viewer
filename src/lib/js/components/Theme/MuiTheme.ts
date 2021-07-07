import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
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
      fontSize: 30,
    },
    h3: {
      fontFamily: "Georgia, serif",
      fontSize: 24,
    },
    h4: {
      fontFamily: "Georgia, serif",
      fontSize: 18,
    },
    h5: {
      fontFamily: "Georgia, serif",
      fontSize: 16,
    },
    h6: {
      fontFamily: "Georgia, serif",
    },
  },
});

export default theme;
