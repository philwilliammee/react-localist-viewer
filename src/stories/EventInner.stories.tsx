import React, { ComponentProps } from "react";
import EventInner from "../lib/js/components/molecules/EventInner/EventInner";
import { Story, Meta } from "@storybook/react";
import { singleEvent } from "./assets/testData";
import { EventEvent } from "../lib/types/types";

const EventInnerStories = {
  title: "Molecules/EventInner ",
  component: EventInner,
};

// @todo fix this omg this is ugly. Why pass the whole event?
const Template: Story<ComponentProps<typeof EventInner>> = (args) => (
  <EventInner {...args} />
);

const eventData: EventEvent = { ...singleEvent.event };
export const Default = Template.bind({});
Default.args = {
  event: eventData,
};

export default EventInnerStories as Meta;
