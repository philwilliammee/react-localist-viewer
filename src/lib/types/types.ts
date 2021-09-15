import moment from "moment";

export interface AppProps {
  target?: string;
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
  hidedescription?: HideType;
  hideimages?: HideType;
  hideaddcal?: HideType;
  hidepagination?: HideType;
  filterby: FilterBy;
  wrapperclass?: string;
  listclass?: string;
  itemclass?: string;
  page?: CurrentPage;
  readmore?: string;
  url?: string;
  api: Api;
}

// @todo consolidate these props
export interface ViewProps {
  events: EventElement[];
  format: Format;
  truncatedescription: string;
  hidedescription: HideType; //string | number;
  hideimages: HideType; // string | number;
  hideaddcal: HideType; // string | number;
  filterby: FilterBy;
  wrapperclass: string;
  listclass: string;
  itemclass: string;
  page: number;
  loading: boolean;
  wrapperClassArray: string[];
  listClassArray: string[];
  calendarurl: string;
  setCurrentPage: (page: number) => void;
  currentPage: number;
  api: Api;
  depts?: string;
}

export type HideType = 0 | "true" | 1 | "false" | "";

export interface ViewComponentProps extends ViewProps {
  key: number;
}

export interface DateRangeEvent {
  start: Date;
  end: Date;
}

export type Api = "localist" | "drupal" | "wordpress";

export interface DisplayedDateRange {
  start: moment.Moment;
  end: moment.Moment;
}

export interface StandardProps {
  events: EventElement[];
  hideaddcal: HideType;
  truncatedescription: string;
  hidedescription: HideType;
  hideimages: HideType;
  hidetime?: boolean;
  wrapperClassArray: string[];
  listClassArray: string[];
}

export interface InnerProps {
  event: EventEvent;
  hideaddcal: HideType;
  truncatedescription: string;
  hidedescription: HideType;
  hideimages: HideType;
  hidetime?: boolean;
}

interface Init {}
export type InitialEventState = Init | EventElement;

export type FilterBy = "group" | "dept" | "type" | "none";

export type EventImageCropTypes = "huge" | "big" | "big_square";

export type Format =
  | "standard"
  | "compact"
  | "modern_compact"
  | "modern_standard"
  | "inline_compact"
  | "calendar"
  | "cards";

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
  url: string | null;
  updated_at: Date;
  created_at: Date;
  facebook_id: null;
  first_date: Date;
  last_date: Date;
  hashtag: string | null;
  urlname: string;
  user_id: number | null;
  directions: string | null;
  allows_reviews: boolean;
  allows_attendance: boolean;
  location: string;
  room_number: string | null;
  location_name: string;
  status?: string;
  experience?: string;
  stream_url?: string | null;
  stream_info?: string | null;
  stream_embed_code?: string | null;
  created_by: number | null;
  updated_by: number | null;
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
  venue_id: number | null;
  ticket_url: string | null;
  ticket_cost: string | null;
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
  custom_fields?: CustomFields;
  localist_url: string;
  localist_ics_url: string;
  photo_url: string;
  venue_url?: string | null;
  group_id?: number | null;
  group_name?: string | null;
  itemClassArray?: string[]; // custom type
}

export interface CustomFields {
  contact_email?: string | null;
  contact_name?: string | null;
  dept_web_site?: string | null;
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
  end: Date | null;
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
  latitude: string | null;
  longitude: string | null;
  street: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  zip: string | null;
}

export interface Page {
  current: CurrentPage;
  size: number;
  total: number;
}

export type CurrentPage = number;
