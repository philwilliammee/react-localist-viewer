import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";
import EventThumbnail from "../lib/js/components/atoms/EventThumbnail";
import { EventImageCropSelect, HideSelect } from "./assets/utilities";

const EventThumbnailStories = {
  title: "Atoms/EventThumbnail ",
  component: EventThumbnail,
  argTypes: {
    hideimages: HideSelect,
    photoCrop: EventImageCropSelect,
  },
};

const Template: Story<ComponentProps<typeof EventThumbnail>> = (args) => (
  <EventThumbnail {...args} />
);

export const Default = Template.bind({});
Default.args = {
  photoUrl:
    "https://localist-images.azureedge.net/photos/36161910627031/huge/768e911bf7e8b9c4951a06d15fc5902fdb573410.jpg",
  title: "the photo title",
  hideimages: 0,
  photoCrop: "huge",
};

export default EventThumbnailStories as Meta;
