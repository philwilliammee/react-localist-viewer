import React from "react";
import buildEventWrapperFilters from "../../../helpers/buildEventWrapperFilters";
import { removeElement, addUniqueElement } from "../../../helpers/common";
import {
  getTypeIds,
  getGroupId,
  getDepartmentIds,
} from "../../../helpers/displayEvent";
import FilterButton from "../../atoms/FilterButton";
import { Department, EventElement, FilterBy } from "../../../../types/types";
import { Grid, Typography } from "@mui/material";

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
    <Typography component="div" className="rlv-event-filter-by">
      <Grid className="events-filters" container spacing={1}>
        <Grid item key="filterAll">
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
        </Grid>
        {filterButtons
          ? filterButtons.map((obj) => {
              const { id, name } = obj;
              const filterId = `filter${id}`;
              return (
                <Grid item key={id}>
                  <FilterButton
                    filterId={filterId}
                    active={active}
                    name={name}
                    clickHandler={() => {
                      applyFilter(obj);
                      setActive(filterId);
                    }}
                  />
                </Grid>
              );
            })
          : ""}
      </Grid>
    </Typography>
  );
};

export default EventFilters;
