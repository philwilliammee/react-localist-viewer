import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { singleEvent } from "./assets/testData";
import { EventEvent } from "lib/types/types";
import AgendaInnerContent from "lib/js/components/molecules/EventsCalendar/AgendaList/AgendaInnerContent";

const AgendaInnerContentStories = {
  title: "Molecules/AgendaInnerContent",
  component: AgendaInnerContent,
};

// @todo fix this omg this is ugly. Why pass the whole event?
const Template: Story<ComponentProps<typeof AgendaInnerContent>> = (args) => (
  <div className="cwd-events-style">
    <div className="events-modern-standard ">
      <div className="cwd-component">
        <div className="events">
          <AgendaInnerContent {...args} />
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

export default AgendaInnerContentStories as Meta;
