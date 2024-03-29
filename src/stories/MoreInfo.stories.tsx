import React, { ComponentProps } from "react";
import MoreInfo from "../lib/js/components/molecules/MoreInfo";
import { Story, Meta } from "@storybook/react";
import { singleEvent } from "./assets/testData";
import { EventEvent } from "../lib/types/types";

const MoreInfoStories = {
  title: "Molecules/MoreInfo ",
  component: MoreInfo,
};

// @todo fix this omg this is ugly. Why pass the whole event?
const Template: Story<ComponentProps<typeof MoreInfo>> = (args) => (
  <MoreInfo {...args} />
);

const eventData: EventEvent = { ...singleEvent.event };
export const Default = Template.bind({});
Default.args = {
  event: eventData,
};

export default MoreInfoStories as Meta;
