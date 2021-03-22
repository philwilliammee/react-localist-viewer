import { HideType } from "../../lib/types/types";
import { EventImageCropTypes } from "../../lib/types/types";

interface HideSelectInterface {
  type: "select";
  options: HideType[];
}

export const HideSelect = {
  control: {
    type: "select",
    options: [0, "true", 1, "false", ""],
  } as HideSelectInterface,
};

interface ImageType {
  type: "select";
  options: EventImageCropTypes[];
}

export const EventImageCropSelect = {
  control: {
    type: "select",
    options: ["huge", "big", "big_square"],
  } as ImageType,
};
