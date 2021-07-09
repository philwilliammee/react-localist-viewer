import moment from "moment";
import React from "react";
import { NodeEvent } from "types/graphql";
import { EventElement } from "../../types/types";

interface DisplayedDateRange {
  start: moment.Moment;
  end: moment.Moment;
}

const events: NodeEvent[] = [];
const filteredEvents: NodeEvent[] = [];

const initDate = new Date();
export const initialEvent: any = {
  // id: -1,
  // title: "",
  // url: "",
  // updated_at: initDate,
  // created_at: initDate,
  // facebook_id: null,
  // first_date: initDate,
  // last_date: initDate,
  // hashtag: "",
  // urlname: "",
  // user_id: -1,
  // directions: null,
  // allows_reviews: false,
  // allows_attendance: false,
  // location: "",
  // room_number: null,
  // location_name: "",
  // // status: "",
  // experience: "",
  // stream_url: "",
  // stream_info: "",
  // stream_embed_code: "",
  // created_by: -1,
  // updated_by: -1,
  // city_id: null,
  // neighborhood_id: null,
  // school_id: -1,
  // campus_id: null,
  // recurring: false,
  // free: false,
  // private: false,
  // verified: false,
  // rejected: false,
  // sponsored: false,
  // venue_id: null,
  // ticket_url: "",
  // ticket_cost: "",
  // keywords: [""],
  // tags: [""],
  // description_text: "",
  // photo_id: null,
  // detail_views: -1,
  // event_instances: [
  //   {
  //     event_instance: {
  //       id: -1,
  //       event_id: -1,
  //       start: initDate,
  //       end: initDate,
  //       ranking: -1,
  //       all_day: false,
  //       num_attending: -1,
  //     },
  //   },
  // ],
  // address: "",
  // description: "",
  // featured: false,
  // geo: {
  //   latitude: null,
  //   longitude: null,
  //   street: null,
  //   city: null,
  //   state: null,
  //   country: null,
  //   zip: null,
  // },
  // filters: {
  //   departments: [
  //     {
  //       name: "",
  //       id: -1,
  //     },
  //   ],
  //   event_types: [
  //     {
  //       name: "",
  //       id: -1,
  //     },
  //   ],
  // },
  // custom_fields: {
  //   contact_email: "",
  //   contact_name: "",
  //   dept_web_site: "",
  // },
  // localist_url: "",
  // localist_ics_url: "",
  // photo_url: "",
  // venue_url: null,
  // group_id: -1,
  // group_name: "",
};

const EventsContext = React.createContext({
  events,
  setEvents: (events: NodeEvent[] | never) => {},
  filteredEvents,
  setFilteredEvents: (filteredEvents: NodeEvent[]) => {},
  showDialog: false,
  setShowDialog: (show: boolean) => {},
  eventSelected: initialEvent,
  setEventSelected: (selectedEvent: NodeEvent) => {},
  displayedDateRange: {
    start: moment().startOf("month"),
    end: moment().endOf("month"),
  },
  setDisplayedDateRange: (displayedDateRange: DisplayedDateRange) => {},
});

export default EventsContext;
