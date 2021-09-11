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

const drupalApiConnector = (props: ApiConnectorProps) => {
  const { entries, daysahead, calendarurl, page, start, end } = props;

  let start_param = start;
  let end_param = end;

  // Archive support
  if (daysahead?.startsWith("-")) {
    start_param = moment()
      .add(parseInt(daysahead), "days")
      .format("YYYY-MM-DD");
    end_param = moment().format("YYYY-MM-DD");
  } else if (start && end) {
    start_param = start;
    end_param = end;
  } else {
    end_param = moment()
      .add(parseInt(daysahead || "365"), "days")
      .format("YYYY-MM-DD");
  }

  const query = GET_EVENTS.loc?.source.body;
  const variables: GetEventsByDateQueryQueryVariables = {
    startDate: start_param,
    endDate: end_param,
    limit: parseInt(entries || "1000", 10),
    offset: page,
  };

  return axios.post(calendarurl, { query, variables });
};

export default drupalApiConnector;
