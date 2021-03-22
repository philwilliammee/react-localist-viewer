import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";
import EventDescription from "lib/js/components/atoms/EventDescription";
import { HideSelect } from "./assets/utilities";

const EventDescriptionStories = {
  title: "Atoms/EventDescription ",
  component: EventDescription,
  argTypes: {
    hidedescription: HideSelect,
  },
};

const Template: Story<ComponentProps<typeof EventDescription>> = (args) => (
  <EventDescription {...args} />
);

export const Default = Template.bind({});

Default.args = {
  description: "Some plain text usually pre truncated",
  title: "the event title",
  url: "/?path=/docs/atoms-modaldialog--default",
  hidedescription: "false",
};

export default EventDescriptionStories as Meta;
