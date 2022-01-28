import { Events } from "./../../../../dist/types/types";
import axios from "axios";
import moment from "moment";
import { EventElement, EventInstanceElement } from "../../types/types";

export interface ApiConnectorProps {
  depts?: string;
  entries?: string;
  group?: string;
  keyword?: string;
  daysahead?: string;
  apikey?: string;
  calendarurl: string;
  page?: number;
  start?: string;
  end?: string;
  type?: [];
}

interface ApiParams {
  apikey?: string;
  distinct: boolean;
  pp?: string;
  page?: number;
  direction: string;
  type?: string[];
  start?: string;
  group_id?: string;
  end?: string;
  keyword?: string;
  days?: string;
}

/**
 * Sets params and returns axios Promise.
 * options: https://developer.localist.com/doc/api#event-list
 */
const localistApiConnector = (props: ApiConnectorProps) => {
  const {
    depts,
    entries,
    group,
    keyword,
    daysahead,
    apikey,
    calendarurl,
    page,
    start,
    end,
  } = props;

  const params: ApiParams = {
    apikey,
    distinct: false, // show repeating events
    pp: entries,
    page,
    direction: daysahead?.startsWith("-") ? "desc" : "asc",
  };

  // Supports multiple departments with CSV string.
  if (depts && depts !== "0") {
    params.type = [];
    depts.split(",").forEach((item) => {
      params?.type?.push(item.trim());
    });
  }

  if (group && group !== "0") {
    params.group_id = group;
  }

  // @todo add support for multiple keywords
  if (keyword && keyword !== "") {
    params.keyword = keyword;
  }

  // Archive support
  if (daysahead?.startsWith("-")) {
    params.start = moment()
      .add(parseInt(daysahead), "days")
      .format("YYYY-MM-DD");
    params.end = moment().format("YYYY-MM-DD");
  } else if (start && end) {
    params.start = start;
    params.end = end;
  } else {
    params.days = daysahead;
  }

  return axios.get(calendarurl, { params });
};

const localistTransformEvents = (events: Events): Events => {
  const transformedEvents = events.events.map((event: EventElement) => {
    //localist date format 2022-01-28 08:00:00 -0500
    const transformedEventInstances = event.event.event_instances.map(
      (eventInstance: EventInstanceElement) => {
        const transformedEventInstance = {
          start: moment(
            eventInstance.event_instance.start,
            "YYYY-MM-DD H:m:i Z"
          ).toDate(),
          end: moment(
            eventInstance.event_instance.end,
            "YYYY-MM-DD H:m:i Z"
          ).toDate(),
        };
        eventInstance.event_instance = {
          ...eventInstance.event_instance,
          ...transformedEventInstance,
        };
        return eventInstance;
      }
    );

    event.event.event_instances = transformedEventInstances;
    event.event.first_date = moment(event.event.first_date).toDate();
    event.event.created_at = moment(
      event.event.created_at,
      "YYYY-MM-DD H:m:i Z"
    ).toDate();
    event.event.updated_at = moment(
      event.event.updated_at,
      "YYYY-MM-DD H:m:i Z"
    ).toDate();
    return event;
  });

  events.events = transformedEvents;

  return events;
};

export { localistTransformEvents };
export default localistApiConnector;
