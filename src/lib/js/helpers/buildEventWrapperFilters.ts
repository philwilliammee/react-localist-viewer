import { getGroupName, getGroupId } from "./displayEvent";

import { addUniqueObj } from "./common";
import { Department, EventElement, FilterBy } from "../../types/types";
import { NodeEvent } from "types/graphql";

/**
 * Gets the filter types from events.
 *  Creates an array of objects used to build buttons.
 * @param {obj} event The localist event.
 */
const buildEventWrapperFilters = (events: NodeEvent[], filterby: FilterBy) => {
  if (filterby === "none") {
    return "";
  }
  const filters: any = [];
  events.forEach((event) => {
    if (filterby === "type" && event.fieldTags && event.fieldTags.length) {
      event.fieldTags.forEach((tag) => {
        const name = tag?.entity?.entityLabel || "";
        const id = tag?.targetId || -1;
        addUniqueObj(filters, { id, name });
      });
    }
  });
  return filters;
};

export default buildEventWrapperFilters;
