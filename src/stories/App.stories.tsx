// YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Meta, Story } from "@storybook/react";
import App from "../lib/App";
import { HideSelect } from "./assets/utilities";

const AppStories = {
  title: "React-Localist-Viewer/Localist App",
  component: App,

  argTypes: {
    hideaddcal: HideSelect,
    hidedescription: HideSelect,
    hideimages: HideSelect,
    hidepagination: HideSelect,
  },
};

const Template: Story<ComponentProps<typeof App>> = (args) => <App {...args} />;

export const Calendar = Template.bind({});
Calendar.args = {
  depts: "4888",
  api: "localist",
  entries: "100",
  daysahead: "300",
  format: "calendar",
  group: "",
  keyword: "",
  heading: "Localist-Viewer Calendar",
  filterby: "none",
  calendarurl: "https://events.cornell.edu/api/2.1/events",
  apikey: "KLhy2GtuSAGirYGY",
  hideaddcal: "true",
  hidedescription: "",
  truncatedescription: "250",
  hideimages: "",
  hidepagination: "",
  wrapperclass: "",
  listclass: "",
  itemclass: "",
  readmore: "",
  url: "https://philwilliammee.github.io/react-localist-viewer/",
};

export const DrupalApiCalendar = Template.bind({});
DrupalApiCalendar.args = {
  ...Calendar.args,
  api: "drupal",
  heading: "Drupal API Calendar",
  calendarurl: "https://psw-test-cd-demo.pantheonsite.io/graphql",
};

export const WordPressApiCalendar = Template.bind({});
WordPressApiCalendar.args = {
  ...Calendar.args,
  api: "wordpress",
  heading: "Wordpress API Calendar",
  calendarurl: "https://api-test-cihmid.pantheonsite.io/graphql",
};

export const Standard = Template.bind({});
Standard.args = {
  ...Calendar.args,
  entries: "3",
  format: "standard",
  heading: "Localist-Viewer Standard",
  filterby: "dept",
  wrapperclass: "flex-grid",
  listclass: "flex-7",
};

export const ModernCompact = Template.bind({});
ModernCompact.args = {
  ...Calendar.args,
  entries: "3",
  format: "modern_compact",
  heading: "Localist-Viewer Modern Compact",
  filterby: "none",
  wrapperclass: "cwd-card-grid three-card",
  listclass: "cards",
  itemclass: "card",
  readmore: "Read More ➡️",
};
export const ModernStandard = Template.bind({});
ModernStandard.args = {
  ...Calendar.args,
  entries: "3",
  format: "modern_standard",
  heading: "Localist-Viewer Modern Standard",
  listclass: "flex-7",
  readmore: "Read More ➡️",
  truncatedescription: "900",
  wrapperclass: "flex-grid",
};

export const InlineCompact = Template.bind({});
InlineCompact.args = {
  ...Calendar.args,
  entries: "3",
  format: "inline_compact",
  heading: "Localist-Viewer Inline Compact",
  hidepagination: 1,
  truncatedescription: "250",
};

export const Cards = Template.bind({});
Cards.args = {
  ...Calendar.args,
  entries: "9",
  format: "cards",
  heading: "Localist-Viewer Cards",
  hidepagination: 1,
  truncatedescription: "250",
};

export default AppStories as Meta;
