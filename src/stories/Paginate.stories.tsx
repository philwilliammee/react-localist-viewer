import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";
import Paginate from "../lib/js/components/organisms/Paginate/Paginate";
import { HideSelect } from "./assets/utilities";

const PaginateStories = {
  title: "Organisms/Paginate ",
  component: Paginate,
  argTypes: {
    hidepagination: HideSelect,
  },
};

// @todo fix this omg this is ugly. Why pass the whole event?
const Template: Story<ComponentProps<typeof Paginate>> = (args) => (
  <Paginate {...args} />
);

export const Default = Template.bind({});
Default.args = {
  hidepagination: 0,
  total: 3,
  handlePageClick: (event: React.ChangeEvent<unknown>, page: number) => {},
};

export default PaginateStories as Meta;
