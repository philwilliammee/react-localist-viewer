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

const child = () => <div>Modal Dialog</div>;

export const Default = Template.bind({});
Default.args = {
  showDialog: true,
  setShowDialog: () => {},
  children: child,
};

export default ModalStories;
