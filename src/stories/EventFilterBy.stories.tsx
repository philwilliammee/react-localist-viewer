import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";
import EventFilterBy from "../lib/js/components/organisms/EventFilterBy/EventFilterBy";
import { EventElement } from "../lib/types/types";
import { componentData } from "./assets/testData";

const EventFilterByStories = {
  title: "Organisms/EventFilterBy ",
  component: EventFilterBy,
  argTypes: {
    hidedescription: ["group", "dept", "type", "none"],
  },
};

// @todo fix this omg this is ugly. Why pass the whole event?
const Template: Story<ComponentProps<typeof EventFilterBy>> = (args) => (
  <EventFilterBy {...args} />
);

const eventsData: EventElement[] = componentData.events;
export const Example = Template.bind({});
Example.args = {
  handleEventFilter: () => {},
  filterby: "dept",
  events: eventsData,
  active: "filterAll",
  setActive: () => {},
};

export default EventFilterByStories as Meta;
