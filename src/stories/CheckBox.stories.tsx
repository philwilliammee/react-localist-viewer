// YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story } from "@storybook/react";
import Checkbox from "lib/js/components/atoms/forms/CheckBox";

//👇 This default export determines where your story goes in the story list
const CheckBoxStories = {
  title: "Atoms/Checkbox ",
  component: Checkbox,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Checkbox>> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: "checkbox",
  name: "form-name",
  checked: false,
  onChange: () => {
    alert("clicked");
  },
};

export default CheckBoxStories;
