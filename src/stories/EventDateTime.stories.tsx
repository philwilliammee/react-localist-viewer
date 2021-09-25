import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";
import EventDateTime from "../lib/js/components/atoms/EventDateTime";
import { singleEvent } from "./assets/testData";
import { EventEvent } from "../lib/types/types";
import {
  getEventStartMonthDayString,
  getEventStartEndTimes,
} from "lib/js/helpers/displayEvent";

const EventDateTimeStories = {
  title: "Atoms/EventDateTime ",
  component: EventDateTime,
};

// @todo fix this omg this is ugly. Why pass the whole event?
const Template: Story<ComponentProps<typeof EventDateTime>> = (args) => (
  <EventDateTime {...args} />
);

const eventData: EventEvent = { ...singleEvent.event };
export const Default = Template.bind({});
Default.args = {
  dateFormat: getEventStartMonthDayString(eventData),
  timeFormat: getEventStartEndTimes(eventData),
};

export default EventDateTimeStories as Meta;
