import { NodeEvent } from "./../../../types/graphql";
import { last } from "cypress/types/lodash";
import moment from "moment";
import { GetEventsByDateQueryQuery } from "types/graphql";
import {
  ViewComponentProps,
  AppProps,
  DisplayedDateRange,
  Events,
  EventElement,
} from "./../../types/types";
import drupalApiConnector from "./drupalApiConnector";
import localistApiConnector from "./localistApiConnector";

export async function fetchEvents(
  props: AppProps,
  currentPage = 0,
  displayedDateRange: DisplayedDateRange
) {
  let start, end;
  if (props.format === "calendar") {
    start = displayedDateRange.start.format("YYYY-MM-DD hh:mm");
    end = displayedDateRange.end.format("YYYY-MM-DD hh:mm");
  }

  let data: Events | null = null;

  if (props.api === "localist") {
    const response = await localistApiConnector({
      ...props,
      page: currentPage,
      start,
      end,
    });
    data = response.data;
  }

  if (props.api === "drupal") {
    const response = await drupalApiConnector({
      ...props,
      page: currentPage,
      start,
      end,
    });
    const response_data = response.data.data as GetEventsByDateQueryQuery;
    const limit = parseInt(props.entries || "0", 10);
    const events = response_data.nodeQuery?.entities as NodeEvent[];

    const formatedEvents: EventElement[] = events?.map((event) => {
      const formatedEvent: EventElement = {
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
          tags: [],
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
            event_types: [],
          },
          custom_fields: {},
          localist_url: event.entityUrl?.path || "",
          localist_ics_url: "",
          photo_url: event.fieldEventImage?.url || "",
          venue_url: null,
          group_id: null,
          group_name: null,
        },
      };
      console.log(formatedEvent);
      return formatedEvent;
    });

    data = {
      events: formatedEvents,
      page: {
        current: currentPage,
        size: limit,
        total: (response_data.nodeQuery?.count || 0) / limit,
      },
      date: {
        first: moment(start).toDate(),
        last: moment(end).toDate(),
      },
    };

    // console.log(data);
  }

  return data;
}
