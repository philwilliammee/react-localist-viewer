import axios from "axios";
import moment from "moment";
import { GetEventsByDateQueryQueryVariables } from "types/graphql";

// import { loader } from "graphql.macro";
import { EventElement } from "../../types/types";
import { NodeEvent } from "types/drupalGraphql";
// Rollup cant handle this
// import { gql } from "graphql.macro";

// const GET_EVENTS = loader(
//   "../../graphql/queries/getDrupalEventsByDateQuery.graphql"
// );

const GET_EVENTS = `
  query getEventsByDateQuery(
    $startDate: String
    $endDate: String
    $limit: Int
    $offset: Int
  ) {
    nodeQuery(
      filter: {
        conjunction: AND
        conditions: [
          { field: "type", value: "event", operator: EQUAL }
          {
            operator: GREATER_THAN_OR_EQUAL
            field: "field_event_date"
            value: [$startDate]
          }
          {
            operator: SMALLER_THAN_OR_EQUAL
            field: "field_event_date"
            value: [$endDate]
          }
        ]
      },
      sort: [{
        field: "field_event_date",
        direction: ASC
      }],
      limit: $limit
      offset: $offset
    ) {
      count
      entities {
        ... on NodeEvent {
          title
          entityId
          nid
          entityUrl{
            path
          }
          fieldEventDate {
            value
          }
          fieldEventDateEnd {
            value
          }
          fieldEventLocation
          fieldEventImage {
            url
          }
          fieldDestinationUrl {
            uri
            url {
              path
              routed
            }
          }
          fieldLocalistId
          fieldShortDescription {
            value
            processed
          }
          fieldTags {
            targetId
            entity {
              entityLabel
            }
          }
        }
      }
    }
  }
`;

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

  let start_param = start || moment().format("YYYY-MM-DD");
  let end_param = end || moment().add(daysahead, "days").format("YYYY-MM-DD");
  let page_param = page || 1;

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
  const limit = parseInt(entries || "1000", 10);

  const offset = (page_param - 1) * limit;
  // const query = GET_EVENTS.loc?.source.body;
  const query = GET_EVENTS;
  const variables: GetEventsByDateQueryQueryVariables = {
    startDate: start_param,
    endDate: end_param,
    limit,
    offset,
  };

  return axios.post(calendarurl, { query, variables });
};

const drupalEventsTransformer = (
  drupalEvents: NodeEvent[],
  calendarurl: string
): EventElement[] => {
  const baseUrl = calendarurl.replace("/graphql", "");
  const drupalTransformedEvents: EventElement[] = drupalEvents?.map((event) => {
    const drupalTransformedEvent: EventElement = {
      event: {
        id: parseInt(event.entityId!, 10),
        title: event.title!,
        url: null,
        updated_at: moment(event.fieldEventDate?.value).toDate(),
        created_at: moment(event.fieldEventDateEnd?.value).toDate(),
        facebook_id: null,
        first_date: moment(event.fieldEventDate?.value).toDate(),
        last_date: moment(event.fieldEventDateEnd?.value).toDate(),
        hashtag: null,
        urlname: "",
        user_id: 0,
        directions: null,
        allows_reviews: false,
        allows_attendance: false,
        location: event.fieldEventLocation || "",
        room_number: null,
        location_name: event.fieldEventLocation || "",
        status: "",
        experience: "",
        stream_url: null,
        stream_info: null,
        stream_embed_code: null,
        created_by: 0,
        updated_by: 0,
        city_id: null,
        neighborhood_id: null,
        school_id: 0,
        campus_id: null,
        recurring: false,
        free: false,
        private: false,
        verified: false,
        rejected: false,
        sponsored: false,
        venue_id: 0,
        ticket_url: null,
        ticket_cost: null,
        keywords: [],
        tags:
          event?.fieldTags?.map((tag) => tag?.entity?.entityLabel || "") || [],
        description_text: event.fieldShortDescription?.value || "",
        photo_id: 0,
        detail_views: 0,
        event_instances: [
          {
            event_instance: {
              id: parseInt(event.entityId || "0", 10),
              event_id: parseInt(event.entityId || "0", 10),
              start: moment(event.fieldEventDate?.value).toDate(),
              end: moment(event.fieldEventDateEnd?.value).toDate(),
              ranking: 0,
              all_day: false,
              num_attending: 0,
            },
          },
        ],
        address: event.fieldEventLocation || "",
        description: event.fieldShortDescription?.processed || "",
        featured: false,
        geo: {
          latitude: null,
          longitude: null,
          street: null,
          city: null,
          state: null,
          country: null,
          zip: null,
        },
        filters: {
          departments: [],
          event_types:
            event?.fieldTags?.map((tag) => {
              return {
                name: tag?.entity?.entityLabel || "",
                id: parseInt(tag?.entity?.entityId || "0", 10),
              };
            }) || [],
        },
        custom_fields: {},
        localist_url: baseUrl + event.entityUrl?.path,
        localist_ics_url: "",
        photo_url: event.fieldEventImage?.url || "",
        venue_url: null,
        group_id: null,
        group_name: null,
      },
    };
    return drupalTransformedEvent;
  });

  return drupalTransformedEvents;
};

export default drupalApiConnector;
export { drupalEventsTransformer };
