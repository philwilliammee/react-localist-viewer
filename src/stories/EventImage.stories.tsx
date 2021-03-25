import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";
import EventImage from "../lib/js/components/atoms/EventImage";
import { EventImageCropSelect, HideSelect } from "./assets/utilities";

const EventImageStories = {
  title: "Atoms/EventImage ",
  component: EventImage,
  argTypes: {
    hideimages: HideSelect,
    photoCrop: EventImageCropSelect,
  },
};

const Template: Story<ComponentProps<typeof EventImage>> = (args) => (
  <EventImage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  photoUrl:
    "https://localist-images.azureedge.net/photos/36161910627031/huge/768e911bf7e8b9c4951a06d15fc5902fdb573410.jpg",
  title: "the photo title",
  hideimages: 0,
  photoCrop: "huge",
};

export default EventImageStories as Meta;
