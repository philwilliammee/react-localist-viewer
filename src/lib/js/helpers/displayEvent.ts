import { EventEvent, Department } from "./../../types/types";
import moment from "moment";
import truncate from "text-clipper";

/**
 * @file A collection of functions for working with event objects.
 */

/**
 * Gets time from dateTime.
 *
 * @param {dateTime} dateTime A valid date time.
 *
 * @return {string} The 12 hour string: "1:00 p.m".
 */
const getTimeFromDateTime = (dateTime: Date): string => {
  const time = moment(dateTime).format("h:mm a");
  return time;
};

/**
 * Gets full month day  from dateTime.
 *
 * @param {dateTime} dateTime A valid datetime.
 *
 * @return {string} The abbreviated month and day "Jan 1".
 */
const getMonthDayFromDateTime = (dateTime: Date): string => {
  const monthDay = moment(dateTime).format("MMMM D");
  return monthDay;
};

/**
 * Gets day  from dateTime.
 *
 * @param {dateTime} dateTime A valid date time.
 *
 * @return {string} The abbreviated day "1".
 */
const getDayFromDateTime = (dateTime: Date): string => {
  const day = moment(dateTime).format("D");
  return day;
};

/**
 * Some events don't have end dates/times but the end date/time must come after the start date
 * So we default to the start date.
 * @param {EventEvent} event
 * @returns {Date}
 */
export const getEventEnd = (event: EventEvent): Date => {
  return event.event_instances[0].event_instance.end || event.last_date;
};

/**
 * Get event start date.
 * @param {EventEvent} event A localist event obj
 * @return {Date} Date string.
 */
export const getEventStart = (event: EventEvent): Date => {
  return event.event_instances[0].event_instance.start;
};

/**
 * The logic for determining the type of date string.
 *
 * @param {EventEvent} event The localist event.
 * @param {Format} format
 *
 * @return {string} The date string.
 */
export const getStartDateStringMonthDayYear = (event: EventEvent): string => {
  const dateTime = getEventStart(event);
  let eventDate = moment(dateTime).format("M/DD/YYYY");
  return eventDate;
};

/**
 *
 * @param {EventEvent} event The localist event.
 * @return {string} The event start date.
 */
export const getEventDate = (event: EventEvent): string => {
  const startDateTime = getEventStart(event);
  const eventStartDate = getMonthDayFromDateTime(startDateTime);
  return eventStartDate;
};

/**
 * Truncates the description text.
 *   Does not support html.
 *
 * @param {EventEvent} event the event object.
 * @param {number} excerptLength The length of the excerpt.
 *
 * @return {string} The truncated description string
 */
export const getTruncDesc = (
  description_text: string,
  excerptLength?: number | string | null,
  readMore?: string
): string => {
  if (!description_text) {
    return "";
  }
  let description = description_text;
  if (excerptLength) {
    const maxLength =
      typeof excerptLength == "string"
        ? parseInt(excerptLength, 10)
        : excerptLength;
    const ellipsis = readMore ? "... " + readMore : "...";
    description = truncate(description_text, maxLength, {
      html: true,
      maxLines: 5,
      indicator: ellipsis,
    });
  }
  return description;
};

/**
 *
 * @param {EventEvent} event The localist event.
 * @return {string} The day of the event.
 */
export const getDay = (event: EventEvent): string => {
  const startDateTime = getEventStart(event);
  const date = getDayFromDateTime(startDateTime);
  return date;
};

export const getEventEndTime = (event: EventEvent) => {
  const endTime = getEventEnd(event);
  let time = "";
  // Some end times are null if so it will return start date.
  // If its the start date don't return a end time.
  if (endTime !== getEventStart(event)) {
    time = getTimeFromDateTime(endTime);
  }
  return time;
};

export const isAllDay = (event: EventEvent) => {
  if (event.event_instances[0].event_instance.all_day) {
    return true;
  }
  return false;
};

/**
 * Checks if event is all day and returns appropriate start time.
 * @param {EventEvent} event The event obj.
 * @return {string} the eventTime string.
 */
export const getEventTime = (event: EventEvent): string => {
  let eventTime = "";
  if (isAllDay(event)) {
    eventTime = "all day";
  } else {
    const startDate = getEventStart(event);
    eventTime = getTimeFromDateTime(startDate);
  }
  return eventTime;
};

/**
 * Checks if event is all day and returns appropriate start time.
 * @param {EventEvent} event The event obj.
 * @return {string} the eventTime string.
 */
export const getEventStartEndTimes = (event: EventEvent): string => {
  let eventTime = "";
  if (isAllDay(event)) {
    eventTime = "all day";
  } else {
    const startDate = getEventStart(event);
    let stopTime = getEventEndTime(event);
    stopTime = stopTime ? ` - ${stopTime}` : "";
    eventTime = getTimeFromDateTime(startDate) + stopTime;
  }
  return eventTime;
};

/**
 *
 * @param {EventEvent} event The localist event
 * @return {string} The group name.
 */
export const getGroupName = (event: EventEvent): string => {
  let groupName = "";
  if (typeof event.group_name !== "undefined") {
    groupName = event.group_name || "";
  }
  return groupName;
};

/**
 *
 * @param {EventEvent} event The localist event
 * @return {number} The group Id.
 */
export const getGroupId = (event: EventEvent): number => {
  let groupId = 0;
  if (typeof event.group_name !== "undefined") {
    groupId = event.group_id || -1;
  }
  return groupId;
};

/**
 * The event type ids.
 * @param {EventEvent} event The event object.
 * @return {array} An array of event type ids.
 */
export const getTypeIds = (event: EventEvent): Array<any> => {
  let types: number[] = [];
  if (typeof event.filters.event_types !== "undefined") {
    types = event.filters.event_types.map((type) => {
      return type.id;
    });
  }
  return types;
};

/**
 * The events departments id
 * @param {EventEvent} event The event object.
 *
 * @return {array} The department id.
 */
export const getDepartmentIds = (event: EventEvent): Array<any> => {
  let departments: number[] = [];
  if (typeof event.filters.departments !== "undefined") {
    departments = event.filters.departments.map((dept) => {
      return dept.id;
    });
  }
  return departments;
};

/**
 * The events department id
 * @param {EventEvent} event The event object.
 *
 * @return {number|undefined} The department id.
 */
export const getDepartment = (event: EventEvent): number | undefined => {
  let department;
  if (typeof event.filters.departments !== "undefined") {
    department = event.filters.departments[0].id;
  }
  return department;
};

/**
 * An array of the filters event types.
 * @todo departments are an array get all of the departments.
 * @param {EventEvent} event The localist Event.
 * @return {Department[]} The filter text.
 */
export const getFiltersType = (event: EventEvent): Department[] => {
  return event.filters.event_types;
};

/**
 * Get an array of the filters departments.
 * @todo departments are an array get all of the departments.
 * @param {EventEvent} event The localist Event.
 * @return {Department[]} The filter text.
 */
export const getFiltersDepartments = (event: EventEvent): Department[] => {
  return event.filters.departments;
};

/**
 * Gets the appropriate event type.
 * @todo add support for multiple filter types.
 * @param {EventEvent} event The localist Event.
 * @param {string} prefCategory The preferred category filter.
 * @return {Department[] | string[]} An array or a string if only one.
 */
export const getEventType = (
  event: EventEvent,
  prefCategory: string
): Department[] | string[] => {
  const department = getDepartment(event);
  const groupName = getGroupName(event);
  let eventTypes: Department[] | string[] = [];
  if (typeof event.filters.event_types !== "undefined") {
    eventTypes = getFiltersType(event);
  }
  if (prefCategory === "dept" && department !== 0) {
    eventTypes = getFiltersDepartments(event);
  }
  if (prefCategory === "group" && groupName !== "") {
    eventTypes = [groupName];
  }
  return eventTypes;
};

/**
 * Gets the appropriate event type.
 * @todo add support for multiple filter types.
 * @param {EventEvent} event The localist Event.
 * @return {string | null} A string of event types or null
 */
export const getEventTypeString = (event: EventEvent): string | null => {
  if (typeof event.filters.event_types !== "undefined") {
    return event.filters.event_types.map((type) => type.name).join(", ");
  }
  return null;
};

/**
 * Gets the appropriate event type.
 * @todo add support for multiple filter types.
 * @param {EventEvent} event The localist Event.
 * @return {string | null} A string of event types or null
 */
export const getEventDepartmentsString = (event: EventEvent): string | null => {
  if (typeof event.filters.departments !== "undefined") {
    return event.filters.departments.map((type) => type.name).join(", ");
  }
  return null;
};

/**
 * Gets start date in compact format.
 * @param {event} event The event.
 * @return {string} The MMM D".
 */
export const getEventDateCompact = (event: EventEvent): string => {
  const startDateTime = getEventStart(event);
  const eventDateCompact = moment(startDateTime).format("MMM D");
  return eventDateCompact;
};

/**
 * Gets start date in standard format.
 * @param {event} event The event.
 * @return {string} The MMMM YYYY".
 */
export const getStartDateStringMonthYear = (event: EventEvent): string => {
  const startDateTime = getEventStart(event);
  const eventMonthHeader = moment(startDateTime).format("MMMM YYYY");
  return eventMonthHeader;
};

/**
 * Gets start date in standard format.
 * @param {event} event The event.
 * @return {string} The MMM".
 */
export const getAbbrMonth = (event: EventEvent): string => {
  const startDateTime = getEventStart(event);
  const abbrMonth = moment(startDateTime).format("MMM");
  return abbrMonth;
};

/**
 * If event has a class array return it as a string.
 * @param {event} event The event.
 * @return {string | undefined}
 */
export const getClassItem = (event: EventEvent): string | undefined => {
  if ("itemClassArray" in event) {
    return event?.itemClassArray?.join(" ");
  }
  return "";
};

export const getEventKey = (event: EventEvent) => {
  return event.event_instances[0].event_instance.id;
};
