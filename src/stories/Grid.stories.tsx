import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";
import Grid from "lib/js/components/atoms/Grid";

const GridStories = {
  title: "Atoms/Grid ",
  component: Grid,
  subcomponents: { Grid },
};

const containerArgs = {
  container: true,
  children: <Grid></Grid>,
  style: { border: "solid 1px #eee" },
};

const childArgs = {
  col: 6,
  style: {
    border: "solid 1px #eee",
    backgroundColor: `#777`,
  },
};

const cols = [3, 3, 3, 3, 4, 4, 4, 6, 6, 7, 5, 12];

const ItemsGrid: Story<ComponentProps<typeof Grid>> = (args) => (
  <Grid {...containerArgs}>
    <Grid {...args}>Col</Grid>
    {cols.map((col, i) => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      return (
        <Grid
          key={i}
          col={col}
          style={{
            border: "solid 1px #eee",
            backgroundColor: `#${randomColor}`,
          }}
        >
          Col {col}
        </Grid>
      );
    })}
  </Grid>
);

export const GridItems = ItemsGrid.bind({});
GridItems.args = childArgs;

export default GridStories as Meta;
