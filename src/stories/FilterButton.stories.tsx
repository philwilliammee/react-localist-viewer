import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";
import FilterButton from "../lib/js/components/atoms/FilterButton";

const FilterButtonStories = {
  title: "Atoms/FilterButton ",
  component: FilterButton,
};

// @todo fix this omg this is ugly. Why pass the whole event?
const Template: Story<ComponentProps<typeof FilterButton>> = (args) => (
  <div className="cwd-events-style">
    <div className="cwd-component">
      <div className="events">
        <div className="events-filters-wrap">
          <ul className="events-filters">
            <li>
              <FilterButton {...args} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  name: "Filter Button",
  clickHandler: () => {
    alert("clicked");
  },
  filterId: "active-id",
  active: "active-id",
};

export default FilterButtonStories as Meta;
