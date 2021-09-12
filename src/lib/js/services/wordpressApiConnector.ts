import { Department } from "./../../../../dist/types/types";
import axios from "axios";
import moment from "moment";

import { loader } from "graphql.macro";
import { NodesEntity, WordpressEventsQuery } from "types/wordpressGraphql";
import { EventElement } from "lib/types/types";

const GET_EVENTS = loader(
  "../../graphql/queries/getWordpressEventsByDateQuery.graphql"
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

const wordpressApiConnector = (props: ApiConnectorProps) => {
  const { daysahead, calendarurl, start, end } = props;
  let start_param = moment(start, "YYYY-MM-DD HH:mm");
  let end_param = moment(end, "YYYY-MM-DD HH:mm");

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

  const query = GET_EVENTS.loc?.source.body;
  const variables: WordpressEventsQuery = {
    startDate: start_param.format("YYYY-MM-DD"),
    endDate: end_param.format("YYYY-MM-DD"),
  };

  return axios.post(calendarurl, { query, variables });
};

const wordpressTransformEvents = (events: NodesEntity[]): EventElement[] => {
  const wordpressTransformedEvents: EventElement[] = events?.map((event) => {
    const endDateTime = event.event.endDate
      ? new Date(`${event.event.endDate} ${event.event.endTime}`)
      : new Date(`${event.event.date} ${event.event.endTime}`);
    const startDateTime = new Date(
      `${event.event.date} ${event.event.startTime}`
    );
    console.log(event);
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
  });
  return wordpressTransformedEvents;
};

export { wordpressTransformEvents };
export default wordpressApiConnector;
