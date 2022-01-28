import React, { useContext, useState } from "react";
import EventsContext from "../../../../context/EventsContext";
import CheckBox from "../../../atoms/forms/CheckBox";
import { isNested } from "../../../../helpers/common";
import { Button, List, ListItem, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";

const Filters = () => {
  const { events, setFilteredEvents } = useContext(EventsContext);
  const [checkedItems, setCheckedItems] = useState(new Map());
  const theme = useTheme();
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
      <Box bgcolor="background.default" mr={theme.spacing(2)}>
        <Box
          className="filter-groups"
          sx={{
            padding: theme.spacing(1),
          }}
        >
          {hasGroupNames ? (
            <>
              <Typography variant="h4">Group Name</Typography>
              <Box
                sx={{
                  maxHeight: "275px",
                  overflowY: "auto",
                }}
              >
                <List>
                  {eventGroupNames.map((group, id) => {
                    const filterLength = eventGroupNames.filter((fullType) => {
                      return fullType === group;
                    }).length;
                    const label = `${group} (${filterLength})`;
                    return (
                      <ListItem key={group}>
                        <CheckBox
                          name={group}
                          label={label}
                          color={"primary"}
                          checked={checkedItems.get(group)}
                          onChange={handleChange}
                          sx_label={{}}
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
              {hasTypes ? <hr /> : ""}
            </>
          ) : (
            ""
          )}
          {hasTypes ? (
            <>
              <Typography variant="h4">Types</Typography>
              <Box
                sx={{
                  maxHeight: "275px",
                  overflowY: "auto",
                }}
              >
                <List>
                  {eventTypes.map((type, id) => {
                    const filterLength = eventTypesFull.filter((fullType) => {
                      return fullType === type;
                    }).length;
                    const label = `${type} (${filterLength})`;
                    return (
                      <ListItem key={type}>
                        <CheckBox
                          name={type}
                          label={label}
                          color={"primary"}
                          checked={checkedItems.get(type)}
                          onChange={handleChange}
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
              {hasKeywords ? <hr /> : ""}
            </>
          ) : (
            ""
          )}
          {hasKeywords ? (
            <>
              <Typography variant="h4">Keywords</Typography>
              <Box
                sx={{
                  maxHeight: "275px",
                  overflowY: "auto",
                }}
              >
                <List>
                  {eventKeywords.map((keyword, id) => {
                    const filterLength = eventKeywordsFull.filter(
                      (fullType) => {
                        return fullType === keyword;
                      }
                    ).length;
                    const label = `${keyword} (${filterLength})`;
                    return (
                      <ListItem key={keyword}>
                        <CheckBox
                          name={keyword}
                          label={label}
                          color={"primary"}
                          checked={checkedItems.get(keyword)}
                          onChange={handleChange}
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
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
                fullWidth
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            ""
          )}
        </Box>
      </Box>
    </div>
  );
};

export default Filters;
