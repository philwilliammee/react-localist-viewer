import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";
import Heading from "../lib/js/components/organisms/Heading";

const HeadingStories = {
  title: "Organisms/Heading ",
  component: Heading,
};

const Template: Story<ComponentProps<typeof Heading>> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});
Default.args = {
  heading: "The Heading variant=h2",
  readmore: "read more »",
  url: "/?path=/story/react-localist-viewer-localist-app--standard",
};

export default HeadingStories as Meta;
