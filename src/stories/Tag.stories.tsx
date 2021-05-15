// YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Meta, Story } from "@storybook/react";
import Tag from "lib/js/components/atoms/Tag";

const TagStories = {
  title: "Atoms/Tag ",
  component: Tag,
};

const Template: Story<ComponentProps<typeof Tag>> = (args) => (
  <div className="cwd-events-style">
    {" "}
    <Tag>Tag</Tag>
  </div>
);

export const Default = Template.bind({});

export default TagStories as Meta;
