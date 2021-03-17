import React, { ComponentProps } from "react";

import { Story } from "@storybook/react";
import Time from "lib/js/components/atoms/Time";
import { singleEvent } from "./assets/testData";
import { EventEvent } from "lib/types/types";

const TimeStories = {
  title: "Atoms/Time ",
  component: Time,
};

// @todo fix this omg this is ugly. Why pass the whole event?
const Template: Story<ComponentProps<typeof Time>> = (args) => (
  <div className="cwd-events-style">
    <div className="events-modern-standard ">
      <div className="cwd-component">
        <div className="events">
          {" "}
          <Time {...args} />{" "}
        </div>
      </div>
    </div>
  </div>
);

const eventData: EventEvent = { ...singleEvent.event };
export const Default = Template.bind({});
Default.args = {
  event: eventData,
};

export default TimeStories;
