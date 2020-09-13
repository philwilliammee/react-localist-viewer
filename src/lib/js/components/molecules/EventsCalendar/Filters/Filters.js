import React, { useContext, useState } from "react";
import EventsContext from "../../../../context/EventsContext";
import CheckBox from "../../../atoms/forms/CheckBox";
import "./Filters.scss";
import { isNested } from "../../../../helpers/common";

/**
 * @todo optimize this
 * @todo filters should only apply to the selected month
 * @todo onEach page change filters should reset.
 * departments may be a good one.
 */
const Filters = () => {
  const { events, setFilteredEvents } = useContext(EventsContext);
  const [checkedItems, setCheckedItems] = useState(new Map());
  const eventTypesFull = [];
  const eventKeywordsFull = [];
  const eventGroupNamesFull = [];
  if (!events && events.length > 0) {
    return "";
  }
  events.forEach((event) => {
    // some events don't have types
    if (isNested(event, "event", "filters", "event_types")) {
      event.event.filters.event_types.forEach((type) => {
        eventTypesFull.push(type.name);
      });
    }

    // if (isNested(event, "event", "keywords")) {
    //   event.event.keywords.forEach((keyword) => {
    //     eventKeywordsFull.push(keyword);
    //   });
    // }
    eventKeywordsFull.push(event.event.experience);

    if (isNested(event, "event", "group_name")) {
      eventGroupNamesFull.push(event.event.group_name);
    }
  });

  const eventTypes = [...new Set(eventTypesFull)];
  const eventKeywords = [...new Set(eventKeywordsFull)];
  const eventGroupNames = [...new Set(eventGroupNamesFull)];

  const handleChange = (e) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    setCheckedItems(new Map(checkedItems.set(item, isChecked)));
    filterEvents();
  };

  // Working but needs to set and get filtered events.
  const filterEvents = () => {
    let isItemChecked = false;
    const filteredEvents = [...events].filter((event) => {
      let foundItem = false;
      checkedItems.forEach((value, key) => {
        if (value) {
          isItemChecked = true;
          if (key === event.event.experience) {
            // if (key in event.event.keywords) {
            foundItem = true;
          } else if (key === event.event.group_name) {
            foundItem = true;
          } else {
            if (isNested(event, "event", "filters", "event_types")) {
              event.event.filters.event_types.forEach((type) => {
                if (key === type.name) {
                  foundItem = true;
                }
              });
            }
          }
        }
      });
      return foundItem;
    });
    if (isItemChecked) {
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
        <h4>Narrow Your Results</h4>
      </div>

      <div className="filter-groups padded">
        <h5>Group Name</h5>
        <div className="filter-group">
          <ul>
            {eventGroupNames.map((type, id) => {
              return (
                <li key={type}>
                  <label>
                    <CheckBox
                      name={type}
                      checked={checkedItems.get(type)}
                      onChange={handleChange}
                    />
                    {" " + type}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
        <hr />
        <h5>Types</h5>
        <div className="filter-group">
          <ul>
            {eventTypes.map((type, id) => {
              return (
                <li key={type}>
                  <label>
                    <CheckBox
                      name={type}
                      checked={checkedItems.get(type)}
                      onChange={handleChange}
                    />
                    {" " + type}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
        <hr />
        <h5>Experience</h5>
        <div className="filter-group">
          <ul>
            {eventKeywords.map((type, id) => {
              return (
                <li key={type}>
                  <label>
                    <CheckBox
                      name={type}
                      checked={checkedItems.get(type)}
                      onChange={handleChange}
                    />
                    {" " + type}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="reset">
        <button
          onClick={() => {
            handleResetFilters();
          }}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
