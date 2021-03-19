import React, { ComponentProps } from "react";
import EventInner from "../lib/js/components/molecules/EventDetails/EventInner";
import { Story, Meta } from "@storybook/react";
import { singleEvent } from "./assets/testData";
import { EventEvent } from "lib/types/types";

const EventInnerStories = {
  title: "Molecules/EventInner ",
  component: EventInner,
} as Meta;

// @todo fix this omg this is ugly. Why pass the whole event?
const Template: Story<ComponentProps<typeof EventInner>> = (args) => (
  <div className="cwd-events-style">
    <div className="events-modern-standard ">
      <div className="cwd-component">
        <div className="events">
          <EventInner {...args} />
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

export default EventInnerStories;