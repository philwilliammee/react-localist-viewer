import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";
import EventLocation from "lib/js/components/atoms/EventLocation";

const EventLocationStories = {
  title: "Atoms/EventLocation ",
  component: EventLocation,
};

const Template: Story<ComponentProps<typeof EventLocation>> = (args) => (
  <div className="cwd-events-style">
    <section className="standard">
      <div className="events-listing">
        <EventLocation {...args} />
      </div>
    </section>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  locationName: "The <h4> Location Name",
};

export default EventLocationStories as Meta;
