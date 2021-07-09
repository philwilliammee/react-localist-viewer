import React, { useContext, useState } from "react";
import EventsContext from "../../../../context/EventsContext";
import CheckBox from "../../../atoms/forms/CheckBox";
import "./Filters.scss";
import { isNested } from "../../../../helpers/common";
import { Button, Typography } from "@material-ui/core";
import moment from "moment";
import { getEventDate } from "lib/js/helpers/displayEvent";

/**
 * @todo optimize this it has a lot of re-renders
 * onEach page key change filters reset.
 * departments may be a good one.
 * Some oddities with date range.
 * Is nested should be able to be removed.
 */
const Filters = () => {
  const { events, setFilteredEvents, displayedDateRange } = useContext(
    EventsContext
  );
  const [checkedItems, setCheckedItems] = useState(new Map());
  const eventTypesFull: string[] = [];
  if (!events) {
    return <></>;
  }

  events.forEach((event) => {
    // some events don't have types
    event?.fieldTags?.forEach((type) => {
      if (type?.entity?.entityLabel) {
        eventTypesFull.push(type?.entity?.entityLabel);
      }
    });
  });

  const eventTypes = [...new Set(eventTypesFull)].sort();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    setCheckedItems(new Map(checkedItems.set(item, isChecked)));
    filterEvents();
  };

  // Working but needs to set and get filtered events.
  const filterEvents = () => {
    const filteredEvents = [...events].filter((event) => {
      const foundEventTypesName = event?.fieldTags?.find((type) =>
        checkedItems.get(type?.entity?.entityLabel)
      );
      if (foundEventTypesName) {
        return true;
      }

      return false;
    });

    if (filteredEvents.length) {
      setFilteredEvents(filteredEvents);
    } else {
      setFilteredEvents([...events]);
    }
  };

  const handleResetFilters = () => {
    checkedItems.forEach((value, key, map) => map.set(key, false));
    setFilteredEvents([...events]);
  };

  return (
    <div id="calendarFilters">
      <div className="heading">
        <Typography variant="subtitle2">
          Check the boxes below to broaden your results.
        </Typography>
      </div>

      <div className="filter-groups padded">
        <Typography variant="h4">Tags</Typography>
        <div className="filter-group">
          <ul>
            {eventTypes.map((group, id) => {
              return (
                <li key={group}>
                  <CheckBox
                    name={group}
                    label={group}
                    color={"primary"}
                    checked={checkedItems.get(group)}
                    onChange={handleChange}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <hr />
      </div>
      <div className="reset">
        <Button
          variant="contained"
          onClick={() => {
            handleResetFilters();
          }}
        >
          Reset Filters
        </Button>
      </div>
    </div>
  );
};

export default Filters;
