// YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story } from "@storybook/react";
import App from "lib/App";

const AppStories = {
  title: "React-Localist-Viewer/Localist App",
  component: App,
};

// all templates should be wrapped in events-listing cwd-events-style
const Template: Story<ComponentProps<typeof App>> = (args) => (
  <div className="events-listing cwd-events-style">
    <App {...args} />
  </div>
);

export const Calendar = Template.bind({});
Calendar.args = {
  depts: "4888",
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

export const Standard = Template.bind({});
Standard.args = {
  depts: "4888",
  entries: "3",
  daysahead: "300",
  format: "standard",
  group: "",
  keyword: "",
  heading: "Localist-Viewer Standard",
  filterby: "dept",
  calendarurl: "https://events.cornell.edu/api/2.1/events",
  apikey: "KLhy2GtuSAGirYGY",
  hideaddcal: "",
  hidedescription: "",
  truncatedescription: "250",
  hideimages: "",
  hidepagination: "",
  wrapperclass: "flex-grid",
  listclass: "flex-7",
  itemclass: "",
  readmore: "",
  url: "https://philwilliammee.github.io/react-localist-viewer/",
};

export const ModernCompact = Template.bind({});
ModernCompact.args = {
  depts: "4888",
  entries: "3",
  daysahead: "300",
  format: "modern_compact",
  group: "",
  keyword: "",
  heading: "Localist-Viewer Standard",
  filterby: "none",
  calendarurl: "https://events.cornell.edu/api/2.1/events",
  apikey: "KLhy2GtuSAGirYGY",
  hideaddcal: "",
  hidedescription: "",
  truncatedescription: "250",
  hideimages: "",
  hidepagination: "",
  wrapperclass: "cwd-card-grid three-card",
  listclass: "cards",
  itemclass: "card",
  readmore: "Read More ➡️",
  url: "https://philwilliammee.github.io/react-localist-viewer/",
};
export const ModernStandard = Template.bind({});
ModernStandard.args = {
  apikey: "KLhy2GtuSAGirYGY",
  calendarurl: "https://events.cornell.edu/api/2.1/events",
  daysahead: "300",
  depts: "4888",
  entries: "3",
  filterby: "none",
  format: "modern_standard",
  group: "",
  heading: "Localist-Viewer Modern Standard",
  hideaddcal: "",
  hidedescription: "",
  hideimages: "",
  hidepagination: "",
  itemclass: "",
  keyword: "",
  listclass: "flex-7",
  readmore: "Read More ➡️",
  truncatedescription: "900",
  url: "https://philwilliammee.github.io/react-localist-viewer/",
  wrapperclass: "flex-grid",
};

export const InlineCompact = Template.bind({});
InlineCompact.args = {
  apikey: "KLhy2GtuSAGirYGY",
  calendarurl: "https://events.cornell.edu/api/2.1/events",
  daysahead: "300",
  depts: "4888",
  entries: "3",
  filterby: "none",
  format: "inline_compact",
  group: "",
  heading: "Localist-Viewer Inline Compact",
  hideaddcal: "",
  hidedescription: "",
  hideimages: "",
  hidepagination: 1,
  itemclass: "",
  keyword: "",
  listclass: "",
  readmore: "",
  truncatedescription: "250",
  url: "https://philwilliammee.github.io/react-localist-viewer/",
  wrapperclass: "",
};

export default AppStories;
