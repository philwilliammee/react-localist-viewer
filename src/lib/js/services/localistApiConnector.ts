import {
  ViewComponentProps,
  DisplayedDateRange,
  Events,
} from "./../../types/types";
// import { ApiConnectorProps } from "./../../types/types";
import axios from "axios";
import moment from "moment";

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
    distinct: true,
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

export default localistApiConnector;

export async function fetchEvents(
  props: ViewComponentProps,
  currentPage = 0,
  displayedDateRange: DisplayedDateRange
) {
  let start, end;
  if (props.format === "calendar") {
    start = displayedDateRange.start.format("YYYY-MM-DD hh:mm");
    end = displayedDateRange.end.format("YYYY-MM-DD hh:mm");
  }

  console.log(start, end);
  const { data }: { data: Events } = await localistApiConnector({
    ...props,
    page: currentPage,
    start,
    end,
  });
  return data;
}
