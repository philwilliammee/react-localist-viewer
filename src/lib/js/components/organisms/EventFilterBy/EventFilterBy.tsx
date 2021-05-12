import React from "react";
import PropTypes from "prop-types";
import buildEventWrapperFilters from "../../../helpers/buildEventWrapperFilters";
import { removeElement, addUniqueElement } from "../../../helpers/common";
import {
  getTypeIds,
  getGroupId,
  getDepartmentIds,
} from "../../../helpers/displayEvent";
import FilterButton from "../../atoms/FilterButton";
import { Department, EventElement, FilterBy } from "../../../../types/types";
import "./EventFilterBy.scss";

interface Props {
  handleEventFilter: (events: EventElement[], objName: string) => void;
  filterby: FilterBy;
  events: EventElement[];
  active: string;
  setActive: (active: string) => void;
}

/**
 * @param {obj} props The props.
 */
const EventFilters = (props: Props) => {
  const { handleEventFilter, filterby, events, active, setActive } = props;
  const filterButtons = buildEventWrapperFilters(events, filterby);

  if (filterby === "none") {
    return <></>;
  }

  const applyFilter = (obj: Department) => {
    events.forEach((event: EventElement) => {
      const ids = getTypeIds(event.event);
      const departmentIds = getDepartmentIds(event.event);
      const groupId = getGroupId(event.event);
      if (obj.name === "filterAll") {
        event.event.itemClassArray = removeElement(
          event.event.itemClassArray,
          "fadeOut"
        );
      } else if (filterby === "type" && ids.includes(obj.id)) {
        event.event.itemClassArray = removeElement(
          event.event.itemClassArray,
          "fadeOut"
        );
      } else if (filterby === "dept" && departmentIds.includes(obj.id)) {
        event.event.itemClassArray = removeElement(
          event.event.itemClassArray,
          "fadeOut"
        );
      } else if (filterby === "group" && groupId === obj.id) {
        event.event.itemClassArray = removeElement(
          event.event.itemClassArray,
          "fadeOut"
        );
      } else {
        addUniqueElement(event.event.itemClassArray, "fadeOut");
      }
    });
    handleEventFilter(events, obj.name);
  };

  return (
    <div className="rlv-event-filter-by">
      <h3 className="hidden">Show:</h3>
      <ul className="events-filters">
        <li key="filterAll">
          <FilterButton
            filterId="filterAll"
            active={active}
            name="All Events"
            clickHandler={() => {
              const obj: Department = { id: -1, name: "filterAll" };
              applyFilter(obj);
              setActive("filterAll");
            }}
          />
        </li>
        {filterButtons
          ? filterButtons.map((obj) => {
              const { id, name } = obj;
              const filterId = `filter${id}`;
              return (
                <li key={id}>
                  <FilterButton
                    filterId={filterId}
                    active={active}
                    name={name}
                    clickHandler={() => {
                      applyFilter(obj);
                      setActive(filterId);
                    }}
                  />
                </li>
              );
            })
          : ""}
      </ul>
    </div>
  );
};

EventFilters.propTypes = {
  // Filterby shape [{id:integer, name:string}...]
  handleEventFilter: PropTypes.func.isRequired,
  filterby: PropTypes.string.isRequired,
  events: PropTypes.array.isRequired,
  active: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default EventFilters;
