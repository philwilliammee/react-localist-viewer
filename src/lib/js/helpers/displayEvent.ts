import {
  EventEvent,
  Department,
  AppProps,
  ViewProps,
} from "./../../types/types";
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

const getEventEndTime = (event: EventEvent) => {
  const endTime = getEventEnd(event);
  let time = "";
  if (endTime) {
    time = getTimeFromDateTime(endTime);
  }
  return time;
};

/**
 * Some events don't have end dates/times
 * @param {EventEvent} event
 * @returns {Date | null}
 */
export const getEventEnd = (event: EventEvent): Date | null => {
  return event.event_instances[0].event_instance.end;
};

/**
 * Get event start date.
 * @param {EventEvent} event A localist event obj
 * @return {Date} Date string.
 */
export const getEventStart = (event: EventEvent): Date => {
  return event.event_instances[0].event_instance.start || event.first_date;
};

/**
 *
 * @param {EventEvent} event The localist event.
 * @return {string} The event start date.
 */
export const getEventStartMonthDayString = (event: EventEvent): string => {
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
export const getEventStartDayString = (event: EventEvent): string => {
  return moment(getEventStart(event)).format("D");
};

export const isAllDay = (event: EventEvent): boolean => {
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
  const department = event.filters.departments[0].id;
  const groupName = event.group_name;
  let eventTypes: Department[] | string[] = [];
  if (typeof event.filters.event_types !== "undefined") {
    eventTypes = event.filters.event_types;
  }
  if (prefCategory === "dept" && department !== 0) {
    eventTypes = event.filters.departments;
  }
  if (prefCategory === "group" && groupName) {
    eventTypes = [groupName];
  }
  return eventTypes;
};

/**
 * Gets start date in standard format.
 * @param {event} event The event.
 * @return {string} The MMM".
 */
export const getStartDayMonthAbbr = (event: EventEvent): string => {
  const startDateTime = getEventStart(event);
  const abbrMonth = moment(startDateTime).format("MMM");
  return abbrMonth;
};

/**
 * If event has a class array return it as a string.
 * @param {event} event The event.
 * @return {string}
 */
export const getClassItem = (props: AppProps | ViewProps) => {
  return props.itemclass;
};

export const getEventKey = (event: EventEvent) => {
  return event.event_instances[0].event_instance.id;
};
