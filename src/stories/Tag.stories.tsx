// YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Meta, Story } from "@storybook/react";
import Tag from "lib/js/components/atoms/Tag";
import Theme from "lib/js/components/Theme";

const TagStories = {
  title: "Atoms/Tag ",
  component: Tag,
};

const Template: Story<ComponentProps<typeof Tag>> = (args) => (
  <Theme>
    <Tag>A Styled Tag</Tag>
  </Theme>
);

export const Default = Template.bind({});

export default TagStories as Meta;
