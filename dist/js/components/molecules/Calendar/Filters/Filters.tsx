import React, { useContext, useState } from "react";
import EventsContext from "../../../../context/EventsContext";
import CheckBox from "../../../atoms/forms/CheckBox";
import "./Filters.scss";
import { isNested } from "../../../../helpers/common";
import { Button, Typography } from "@mui/material";
// import moment from "moment";

/**
 * @todo optimize this it has a lot of re-renders
 * onEach page key change filters reset.
 * departments may be a good one.
 * Some oddities with date range.
 * Is nested should be able to be removed.
 */
const Filters = () => {
  const { events, setFilteredEvents } = useContext(EventsContext);
  const [checkedItems, setCheckedItems] = useState(new Map());
  const eventTypesFull: string[] = [];
  const eventKeywordsFull: string[] = [];
  const eventGroupNamesFull: string[] = [];
  if (!events) {
    return <></>;
  }

  events.forEach((event) => {
    // if (
    //   moment(event.event.first_date).isBetween(
    //     displayedDateRange.start,
    //     displayedDateRange.end
    //   ) ||
    //   moment(event.event.first_date).isSame(displayedDateRange.start)
    // ) {
    // some events don't have types
    if (isNested(event, "event", "filters", "event_types")) {
      event.event.filters.event_types.forEach((type) => {
        eventTypesFull.push(type.name);
      });
    }

    if (isNested(event, "event", "keywords")) {
      event.event.keywords.forEach((keyword) => {
        eventKeywordsFull.push(keyword);
      });
    }
    // eventKeywordsFull.push(event.event.experience);

    if (isNested(event, "event", "group_name")) {
      eventGroupNamesFull.push(event.event?.group_name || "");
    }
    //}
  });

  const eventTypes = [...new Set(eventTypesFull)].sort();
  const eventKeywords = [...new Set(eventKeywordsFull)].sort();
  const eventGroupNames = [...new Set(eventGroupNamesFull)].sort();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    setCheckedItems(new Map(checkedItems.set(item, isChecked)));
    filterEvents();
  };

  // Working but needs to set and get filtered events.
  const filterEvents = () => {
    const filteredEvents = [...events].filter((event) => {
      if (checkedItems.get(event.event.group_name)) {
        return true;
      }

      if (isNested(event, "event", "filters", "event_types")) {
        const foundEventTypesName = event.event.filters.event_types.find(
          (type) => checkedItems.get(type.name)
        );
        if (foundEventTypesName) {
          return true;
        }
      }

      const foundKeyword = event.event.keywords.find((element) =>
        checkedItems.get(element)
      );

      return false || foundKeyword;
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
        <Typography variant="h4">Group Name</Typography>
        <div className="filter-group">
          <ul>
            {eventGroupNames.map((group, id) => {
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
        <Typography variant="h4">Types</Typography>
        <div className="filter-group">
          <ul>
            {eventTypes.map((type, id) => {
              return (
                <li key={type}>
                  <CheckBox
                    name={type}
                    label={type}
                    color={"primary"}
                    checked={checkedItems.get(type)}
                    onChange={handleChange}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <hr />
        <Typography variant="h4">Keywords</Typography>
        <div className="filter-group">
          <ul>
            {eventKeywords.map((keyword, id) => {
              return (
                <li key={keyword}>
                  <CheckBox
                    name={keyword}
                    label={keyword}
                    color={"primary"}
                    checked={checkedItems.get(keyword)}
                    onChange={handleChange}
                  />
                </li>
              );
            })}
          </ul>
        </div>
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
