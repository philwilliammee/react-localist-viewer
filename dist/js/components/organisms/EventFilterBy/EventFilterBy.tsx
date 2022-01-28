import React, { useContext, useState } from "react";
import buildEventWrapperFilters from "../../../helpers/buildEventWrapperFilters";
import {
  getTypeIds,
  getDepartmentIds,
} from "../../../helpers/displayEvent";
import FilterButton from "../../atoms/FilterButton";
import { Department, EventElement, FilterBy } from "../../../../types/types";
import { Grid } from "@mui/material";
import EventsContext from "../../../context/EventsContext";

// @todo whatever is selected in filterBy should show as a tag in
interface Props {
  filterby: FilterBy;
  events: EventElement[];
}

const EventFilters = (props: Props) => {
  const { filterby, events } = props;
  const [active, setActive] = useState("filter-1");
  const { setFilteredEvents } = useContext(EventsContext);

  if (filterby === "none") {
    return <></>;
  }

  const filterButtons = buildEventWrapperFilters(events, filterby);

  const applyFilter = (obj: Department) => {
    const filteredEvents = events.filter((event: EventElement) => {
      const ids = getTypeIds(event.event);
      const departmentIds = getDepartmentIds(event.event);
      const groupId = event.event.group_id;
      if (obj.name === "All Events") {
        return true;
      } else if (filterby === "type" && ids.includes(obj.id)) {
        return true;
      } else if (filterby === "dept" && departmentIds.includes(obj.id)) {
        return true;
      } else if (filterby === "group" && groupId === obj.id) {
        return true;
      } else {
        return false;
      }
    });
    setFilteredEvents(filteredEvents);
  };

  return (
    <Grid className="rlv-event-filter-by" container spacing={1}>
      {filterButtons.map((obj) => {
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
      })}
    </Grid>
  );
};

export default EventFilters;
