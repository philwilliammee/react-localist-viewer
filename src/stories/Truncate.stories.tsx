import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";
import Truncate from "lib/js/components/atoms/Truncate";
import { singleEvent } from "./assets/testData";
import { EventEvent } from "lib/types/types";

const TruncateStories = {
  title: "Atoms/Truncate ",
  component: Truncate,
} as Meta;

// @todo fix this omg this is ugly. Why pass the whole event?
const Template: Story<ComponentProps<typeof Truncate>> = (args) => (
  <div className="cwd-events-style">
    <div className="events-modern-standard ">
      <div className="cwd-component">
        <div className="events">
          {" "}
          <Truncate {...args} />{" "}
        </div>
      </div>
    </div>
  </div>
);

const eventData: EventEvent = { ...singleEvent.event };
export const Example = Template.bind({});
Example.args = {
  event: eventData,
  truncatedescription: "25",
  hidedescription: "false",
  readMore: "📖",
};

export default TruncateStories;
