import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";
import Paginate from "../lib/js/components/organisms/Paginate/Paginate";
import { HideSelect } from "./assets/utilities";
import Theme from "lib/js/components/Theme";

const PaginateStories = {
  title: "Organisms/Paginate ",
  component: Paginate,
  argTypes: {
    hidepagination: HideSelect,
  },
};

// @todo fix this omg this is ugly. Why pass the whole event?
const Template: Story<ComponentProps<typeof Paginate>> = (args) => (
  <Theme>
    <Paginate {...args} />
  </Theme>
);

export const Default = Template.bind({});
Default.args = {
  hidepagination: 0,
  total: 3,
  handlePageClick: () => {},
};

export default PaginateStories as Meta;
