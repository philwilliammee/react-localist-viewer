export interface WordpressGraphql {
  data: Data;
  extensions: Extensions;
}
export interface Data {
  events: Events;
}
export interface Events {
  nodes?: NodesEntity[] | null;
}
export interface NodesEntity {
  id: string;
  date: string;
  title: string;
  uri: string;
  featuredImage?: null;
  event: Event;
  eventTaxonomies: EventTaxonomies;
}
export interface Event {
  eventId: string;
  description: string;
  location: string;
  isAllDay?: null;
  localistUrl: string;
  startTime: string;
  photoUrl: string;
  email: string;
  endDate?: null;
  endTime: string;
  eventUrl?: null;
  zoomLink?: null;
  date: string;
}
export interface EventTaxonomies {
  nodes?: NodesEntity1[] | null;
}
export interface NodesEntity1 {
  id: string;
  name: string;
}
export interface Extensions {
  debug?: DebugEntity[] | null;
}
export interface DebugEntity {
  type: string;
  message: string;
}

export interface WordpressEventsQuery {
  startDate: string; //YYYY-MM-DD
  endDate: string;
}
