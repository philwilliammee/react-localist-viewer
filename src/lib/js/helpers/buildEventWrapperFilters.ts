import { addUniqueObj } from "./common";
import { Department, EventElement, FilterBy } from "../../types/types";

/**
 * Gets the filter types from events.
 *  Creates an array of objects used to build buttons.
 * @param {obj} event The localist event.
 */
const buildEventWrapperFilters = (
  events: EventElement[],
  filterby: FilterBy
) => {
  if (filterby === "none") {
    return [];
  }
  const filters: Department[] = [
    {
      id: -1,
      name: "All Events",
    },
  ];
  events.forEach((eventObj) => {
    const { event } = eventObj;
    if (filterby === "type" && event.filters.event_types) {
      const types = event.filters.event_types;
      types.forEach((type) => {
        const { id, name } = type;
        addUniqueObj(filters, { id, name });
      });
    } else if (filterby === "dept" && event.filters.departments) {
      const { departments } = event.filters;
      departments.forEach((department) => {
        const { id, name } = department;
        addUniqueObj(filters, { id, name });
      });
    } else if (filterby === "group") {
      const groupName = event.group_name;
      const groupId = event.group_id;
      if (groupName && groupId) {
        addUniqueObj(filters, { id: groupId, name: groupName });
      }
    }
  });
  return filters;
};

export default buildEventWrapperFilters;
