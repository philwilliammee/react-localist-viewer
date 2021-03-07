export interface AppProps {
  calendarurl: string;
  entries?: string;
  daysahead?: string;
  depts?: string;
  group?: string;
  keyword?: string;
  format: Format;
  apikey?: string;
  truncatedescription: string;
  heading?: string;
  hidedescription?: number | string;
  hideimages?: number | string;
  hideaddcal?: number | string;
  hidepagination?: number | string;
  filterby: FilterBy;
  wrapperclass?: string;
  listclass?: string;
  itemclass?: string;
  page?: CurrentPage;
  readmore?: string;
  url?: string;
}

export interface StandardProps {
  events: EventElement[];
  hideaddcal: string | number;
  truncatedescription: string;
  hidedescription: string | number;
  hideimages: string | number;
  hidetime?: boolean;
  wrapperClassArray: string[];
  listClassArray: string[];
}

export interface InnerProps {
  event: EventEvent;
  hideaddcal: string | number;
  truncatedescription: string;
  hidedescription: string | number;
  hideimages: string | number;
  hidetime?: boolean;
}

export type FilterBy = "group" | "dept" | "type" | "none";

export type EventImageCropTypes = "huge" | "big" | "big_square";

export type Format =
  | "standard"
  | "compact"
  | "modern_compact"
  | "modern_standard"
  | "inline_compact"
  | "calendar";

export interface Events {
  events: EventElement[];
  page: Page;
  date: DateClass;
}

export interface DateClass {
  first: Date;
  last: Date;
}

export interface EventElement {
  event: EventEvent;
}

export interface EventEvent {
  id: number;
  title: string;
  url: string;
  updated_at: Date;
  created_at: Date;
  facebook_id: null;
  first_date: Date;
  last_date: Date;
  hashtag: string;
  urlname: string;
  user_id: number;
  directions: null;
  allows_reviews: boolean;
  allows_attendance: boolean;
  location: string;
  room_number: null;
  location_name: string;
  status: string;
  experience: string;
  stream_url: string;
  stream_info: string;
  stream_embed_code: string;
  created_by: number;
  updated_by: number;
  city_id: null;
  neighborhood_id: null;
  school_id: number;
  campus_id: null;
  recurring: boolean;
  free: boolean;
  private: boolean;
  verified: boolean;
  rejected: boolean;
  sponsored: boolean;
  venue_id: null;
  ticket_url: string;
  ticket_cost: string;
  keywords: string[];
  tags: string[];
  description_text: string;
  photo_id: number | null;
  detail_views: number;
  event_instances: EventInstanceElement[];
  address: string;
  description: string;
  featured: boolean;
  geo: Geo;
  filters: Filters;
  custom_fields: CustomFields;
  localist_url: string;
  localist_ics_url: string;
  photo_url: string;
  venue_url: null;
  group_id: number;
  group_name: string;
  itemClassArray?: string[]; // custom type
}

export interface CustomFields {
  contact_email: string;
  contact_name: string;
  dept_web_site: string;
  open_to?: string;
  registration_status?: string;
}

export interface EventInstanceElement {
  event_instance: EventInstanceEventInstance;
}

export interface EventInstanceEventInstance {
  id: number;
  event_id: number;
  start: Date;
  end: Date;
  ranking: number;
  all_day: boolean;
  num_attending: number;
}

export interface Filters {
  departments: Department[];
  event_types: Department[];
}

export interface Department {
  name: string;
  id: number;
}

export interface Geo {
  latitude: null;
  longitude: null;
  street: null;
  city: null;
  state: null;
  country: null;
  zip: null;
}

export interface Page {
  current: CurrentPage;
  size: number;
  total: number;
}

export type CurrentPage = number;
