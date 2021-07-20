import { NodeEvent } from "./../../../types/graphql";
import { ViewComponentProps, DisplayedDateRange } from "./../../types/types";
// import { ApiConnectorProps } from "./../../types/types";
import axios from "axios";
import moment from "moment";
import { GetEventsByDateQueryQueryVariables } from "types/graphql";

import { loader } from "graphql.macro";

const GET_EVENTS = loader(
  "../../graphql/queries/getDrupalEventsByDateQuery.graphql"
);

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
const drupalApiConnector = (props: ApiConnectorProps) => {
  const { entries, daysahead, apikey, calendarurl, page, start, end } = props;

  const params: ApiParams = {
    apikey,
    distinct: false, // show repeating events
    pp: entries,
    page,
    direction: daysahead?.startsWith("-") ? "desc" : "asc",
  };

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

  const query = GET_EVENTS.loc?.source.body;
  const variables: GetEventsByDateQueryQueryVariables = {
    startDate: params.start,
    endDate: params.end,
    limit: 1000,
    offset: 0,
  };

  return axios.post(calendarurl, { query, variables });
};

export default drupalApiConnector;
