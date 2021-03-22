import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";
import reactLocalistViewerTheme from "./ReactLocalistViewerTheme";

addons.setConfig({
  theme: reactLocalistViewerTheme,
});
