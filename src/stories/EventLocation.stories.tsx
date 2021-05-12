import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";
import EventLocation from "../lib/js/components/atoms/EventLocation/EventLocation";

const EventLocationStories = {
  title: "Atoms/EventLocation ",
  component: EventLocation,
};

const Template: Story<ComponentProps<typeof EventLocation>> = (args) => (
  <EventLocation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  locationName: "The <h4> Location Name",
};

export default EventLocationStories as Meta;
