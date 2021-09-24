import { themes } from "@storybook/theming";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { StylesProvider } from "@mui/styles";
// this will have to be removed when we upgrade to emotion 11.
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import theme from "../src/lib/js/components/Theme/MuiTheme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // docs: {
  //   theme: themes.dark,
  // },
  backgrounds: {
    default: "light",
  },
};

const withThemeProvider = (Story, context) => {
  return (
    <EmotionThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Story {...context} />
        </ThemeProvider>
      </StylesProvider>
    </EmotionThemeProvider>
  );
};

export const decorators = [withThemeProvider];
