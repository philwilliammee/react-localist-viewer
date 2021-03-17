// YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story } from "@storybook/react";
import App from "lib/App";

const AppStories = {
  title: "React-Localist-Viewer/Localist App",
  component: App,
};

const Template: Story<ComponentProps<typeof App>> = (args) => <App {...args} />;

export const Page = Template.bind({});
Page.args = {
  depts: "4888",
  entries: "100",
  daysahead: "300",
  format: "calendar",
  group: "",
  keyword: "",
  heading: "Localist-Viewer",
  filterby: "none",
  calendarurl: "https://events.cornell.edu/api/2.1/events",
  apikey: "KLhy2GtuSAGirYGY",
  hideaddcal: "true",
  hidedescription: "",
  truncatedescription: "250",
  hideimages: "",
  hidepagination: "true",
  wrapperclass: "",
  listclass: "",
  itemclass: "",
  readmore: "",
  url: "https://philwilliammee.github.io/react-localist-viewer/",
};

export default AppStories;
