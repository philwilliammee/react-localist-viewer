import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";
import Truncate from "../lib/js/components/atoms/Truncate/Truncate";
import { singleEvent } from "./assets/testData";
import { EventEvent } from "../lib/types/types";
import { HideSelect } from "./assets/utilities";

const TruncateStories = {
  title: "Atoms/Truncate ",
  component: Truncate,
  argTypes: {
    hidedescription: HideSelect,
  },
};

// @todo fix this omg this is ugly. Why pass the whole event?
const Template: Story<ComponentProps<typeof Truncate>> = (args) => (
  <Truncate {...args} />
);

const eventData: EventEvent = { ...singleEvent.event };
export const Example = Template.bind({});
Example.args = {
  description: eventData.description,
  truncatedescription: "25",
  hidedescription: "false",
  readMore: "📖",
};

export default TruncateStories as Meta;
