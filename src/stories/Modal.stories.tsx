// YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story } from "@storybook/react";

import ModalDialog from "lib/js/components/atoms/ModalDialog";

//👇 This default export determines where your story goes in the story list
const CheckBoxStories = {
  title: "React-Localist-Viewer/ModalDialog ",
  component: ModalDialog,
};

//👇 We create a “template” of how args map to rendering
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

export default CheckBoxStories;
