// YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story } from "@storybook/react";

import ModalDialog from "lib/js/components/atoms/ModalDialog";
import { Default as EventInnerStoriesDefault } from "./EventDetails.stories";
import { EventEvent } from "lib/types/types";
import { singleEvent } from "./assets/testData";

const ModalStories = {
  title: "Atoms/ModalDialog ",
  component: ModalDialog,
};

const Template: Story<ComponentProps<typeof ModalDialog>> = (args) => {
  return <ModalDialog {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  showDialog: true,
  setShowDialog: () => {},
  children: <div>Modal Dialog Content</div>,
};

const eventData: EventEvent = { ...singleEvent.event };
export const EventInner = Template.bind({});
EventInner.args = {
  showDialog: true,
  setShowDialog: () => {},
  children: <EventInnerStoriesDefault event={eventData} />,
};

export default ModalStories;