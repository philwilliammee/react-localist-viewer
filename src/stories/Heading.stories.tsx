import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";
import Heading from "lib/js/components/organisms/Heading";

const HeadingStories = {
  title: "Organisms/Heading ",
  component: Heading,
};

// @todo fix this omg this is ugly. Why pass the whole event?
const Template: Story<ComponentProps<typeof Heading>> = (args) => (
  <div className="cwd-events-style">
    <div className="cwd-component">
      <Heading {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  heading: "The Heading variant=h2",
  readmore: "read more »",
  url: "/?path=/story/react-localist-viewer-localist-app--standard",
};

export default HeadingStories as Meta;
