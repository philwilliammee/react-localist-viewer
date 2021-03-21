import { HideType } from "../../lib/types/types";

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
