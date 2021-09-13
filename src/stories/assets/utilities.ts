import { HideType } from "../../lib/types/types";
import { EventImageCropTypes } from "../../lib/types/types";

interface HideSelectInterface {
  type: "select";
  labels: HideType[];
}

export const HideSelect = {
  control: {
    type: "select",
    labels: [0, "true", 1, "false", ""],
  } as HideSelectInterface,
};

interface ImageType {
  type: "select";
  labels: EventImageCropTypes[];
}

export const EventImageCropSelect = {
  control: {
    type: "select",
    labels: ["huge", "big", "big_square"],
  } as ImageType,
};
