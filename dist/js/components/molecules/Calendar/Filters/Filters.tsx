import React, { useContext, useState } from "react";
import EventsContext from "../../../../context/EventsContext";
import CheckBox from "../../../atoms/forms/CheckBox";
import "./Filters.scss";
import { isNested } from "../../../../helpers/common";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

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

  const hasGroupNames = eventGroupNames.length;
  const hasTypes = eventTypes.length;
  const hasKeywords = eventKeywords.length;

  return (
    <div id="rlv-filters">
      <Typography variant="subtitle2">
        Check the boxes below to broaden your results.
      </Typography>
      <Box bgcolor="background.default" mr={1}>
        <div className="filter-groups padded">
          {hasGroupNames ? (
            <>
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
                        (
                        {
                          eventGroupNamesFull.filter((fullType) => {
                            return fullType === group;
                          }).length
                        }
                        )
                      </li>
                    );
                  })}
                </ul>
              </div>
              {hasTypes ? <hr /> : ""}
            </>
          ) : (
            ""
          )}
          {hasTypes ? (
            <>
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
                        (
                        {
                          eventTypesFull.filter((fullType) => {
                            return fullType === type;
                          }).length
                        }
                        )
                      </li>
                    );
                  })}
                </ul>
              </div>
              {hasKeywords ? <hr /> : ""}
            </>
          ) : (
            ""
          )}
          {hasKeywords ? (
            <>
              <Typography variant="h4">Keywords</Typography>
              <div className="filter-group">
                {}
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
                        />{" "}
                        (
                        {
                          eventKeywordsFull.filter((fullType) => {
                            return fullType === keyword;
                          }).length
                        }
                        )
                      </li>
                    );
                  })}
                </ul>
              </div>
            </>
          ) : (
            ""
          )}
          {hasGroupNames || hasTypes || hasKeywords
            ? ""
            : "No Filters Available"}

          {hasGroupNames || hasTypes || hasKeywords ? (
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
          ) : (
            ""
          )}
        </div>
      </Box>
    </div>
  );
};

export default Filters;
