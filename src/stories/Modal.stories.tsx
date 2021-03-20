// YourComponent.stories.tsx

import React, { ComponentProps } from "react";
import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";

import ModalDialog from "lib/js/components/atoms/ModalDialog";
import { Default as EventInnerStoriesDefault } from "./EventDetails.stories";
import { EventEvent } from "lib/types/types";
import { singleEvent } from "./assets/testData";

export const actionsData = {
  setShowDialog: action("pin-task"),
  onArchiveTask: action("archive-task"),
};

const ModalStories = {
  title: "Atoms/ModalDialog ",
  component: ModalDialog,
  actions: { argTypesRegex: "^on[A-Z].*" },
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

export default ModalStories as Meta;
