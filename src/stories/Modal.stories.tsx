// YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story } from "@storybook/react";

import ModalDialog from "lib/js/components/atoms/ModalDialog";

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

export default ModalStories;
