import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";
import EventTitle from "../lib/js/components/atoms/EventTitle";

const EventTitleStories = {
  title: "Atoms/EventTitle ",
  component: EventTitle,
};

const Template: Story<ComponentProps<typeof EventTitle>> = (args) => (
  <EventTitle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "The Event Title",
  url: "/?path=/story/atoms-modaldialog--event-inner",
};

export default EventTitleStories as Meta;
