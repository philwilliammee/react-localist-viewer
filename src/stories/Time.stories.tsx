import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";
import Time from "../lib/js/components/atoms/Time";
import { singleEvent } from "./assets/testData";
import { EventEvent } from "../lib/types/types";

const TimeStories = {
  title: "Atoms/Time ",
  component: Time,
};

// @todo fix this omg this is ugly. Why pass the whole event?
const Template: Story<ComponentProps<typeof Time>> = (args) => (
  <Time {...args} />
);

const eventData: EventEvent = { ...singleEvent.event };
export const Default = Template.bind({});
Default.args = {
  event: eventData,
};

export default TimeStories as Meta;
