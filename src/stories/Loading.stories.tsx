import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";
import Loading from "../lib/js/components/atoms/Loading";

const LoadingStories = {
  title: "Atoms/Loading ",
  component: Loading,
};

// @todo fix this omg this is ugly. Why pass the whole event?
const Template: Story<ComponentProps<typeof Loading>> = (args) => <Loading />;

export const Default = Template.bind({});

export default LoadingStories as Meta;
