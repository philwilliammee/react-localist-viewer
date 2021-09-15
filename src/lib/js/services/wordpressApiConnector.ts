import { Department, EventElement } from "../../types/types";
import axios from "axios";
import moment from "moment";

// import { gql } from "graphql.macro";
import { NodesEntity, WordpressEventsQuery } from "types/wordpressGraphql";

// const GET_EVENTS = loader(
//   "../../graphql/queries/getWordpressEventsByDateQuery.graphql"
// );

// Order By needs meta field, does not support pagination.
const GET_EVENTS = `query getWordpressEventsByDateQuery(
  $startDate: String!
  $endDate: String!
  $limit: Int!
) {
  events(
    first: $limit
    where: {
      metaQuery: {
        relation: AND
        metaArray: [
          {
            key: "date"
            type: DATE
            value: $startDate
            compare: GREATER_THAN_OR_EQUAL_TO
          }
          {
            key: "date"
            type: DATE
            value: $endDate
            compare: LESS_THAN_OR_EQUAL_TO
          }
        ]
      }
    }
  ) {
    nodes {
      id
      date
      title
      uri
      featuredImage {
        node {
          sourceUrl
        }
      }
      event {
        eventId
        description
        location
        isAllDay
        localistUrl
        startTime
        photoUrl
        email
        endDate
        endTime
        eventUrl
        zoomLink
        date
      }
      eventTaxonomies {
        nodes {
          id
          name
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

const wordpressApiConnector = (props: ApiConnectorProps) => {
  const { daysahead, calendarurl, start, end } = props;
  let start_param = start ? moment(start, "YYYY-MM-DD HH:mm") : moment();
  let end_param = moment(end, "YYYY-MM-DD HH:mm");
  // const limit = parseInt(entries || "1000", 10);
  // Archive support
  if (daysahead?.startsWith("-")) {
    start_param = moment().add(parseInt(daysahead), "days");
    end_param = moment();
  } else if (start && end) {
    start_param = moment(start);
    end_param = moment(end);
  } else {
    end_param = moment().add(parseInt(daysahead || "365"), "days");
  }

  // const query = GET_EVENTS.loc?.source.body;
  const query = GET_EVENTS;
  const variables: WordpressEventsQuery = {
    startDate: start_param.format("YYYY-MM-DD"),
    endDate: end_param.format("YYYY-MM-DD"),
    limit: 100,
  };
  return axios.post(calendarurl, { query, variables });
};

const wordpressTransformEvents = (
  events: NodesEntity[],
  limit: number,
  currentPage: number
): EventElement[] => {
  const offset = currentPage * limit;
  // for now just sort the array by meta-date and limit it to limit_param
  const sortedEvents = events
    .sort((a, b) => {
      return moment(a.event.date, "MMMM D, YYY").diff(
        moment(b.event.date, "MMMM D, YYY")
      );
    })
    .slice(offset - limit, offset);
  const wordpressTransformedEvents: EventElement[] = sortedEvents?.map(
    (event) => {
      const endDateTime = event.event.endDate
        ? new Date(`${event.event.endDate} ${event.event.endTime}`)
        : new Date(`${event.event.date} ${event.event.endTime}`);
      const startDateTime = new Date(
        `${event.event.date} ${event.event.startTime}`
      );
      const wordpressTransformedEvent: EventElement = {
        event: {
          id: parseInt(event.event.eventId, 10),
          title: event.title!,
          url: null,
          facebook_id: null,
          first_date: startDateTime,
          last_date: endDateTime,
          updated_at: moment().toDate(),
          created_at: moment().toDate(),
          hashtag: null,
          urlname: "",
          user_id: 0,
          directions: null,
          allows_reviews: false,
          allows_attendance: false,
          location: event.event.location || "",
          room_number: null,
          location_name: event.event.location || "",
          status: "",
          experience: "",
          stream_url: event.event.zoomLink,
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
          tags: event.eventTaxonomies.nodes?.map((node) => node.name) || [],
          description_text: event.event.description || "",
          photo_id: 0,
          detail_views: 0,
          event_instances: [
            {
              event_instance: {
                id: parseInt(event.event.eventId || "0", 10),
                event_id: parseInt(event.event.eventId || "0", 10),
                start: startDateTime,
                end: endDateTime,
                ranking: 0,
                all_day: event.event.isAllDay ? true : false,
                num_attending: 0,
              },
            },
          ],
          address: event.event.location || "",
          description: event.event.description || "",
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
              event.eventTaxonomies.nodes?.map(
                (node): Department => {
                  return { name: node.name, id: parseInt(node.id, 10) };
                }
              ) || [],
          },
          custom_fields: {
            contact_email: event.event.email,
          },
          localist_url: event.event.localistUrl || "",
          localist_ics_url: "",
          photo_url: event.event.photoUrl || "",
          venue_url: null,
          group_id: null,
          group_name: null,
        },
      };
      return wordpressTransformedEvent;
    }
  );
  return wordpressTransformedEvents;
};

export { wordpressTransformEvents };
export default wordpressApiConnector;
