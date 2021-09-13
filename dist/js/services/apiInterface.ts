import { WordpressGraphql } from "./../../../types/wordpressGraphql";
import { NodeEvent } from "../../../types/drupalGraphql";
import moment from "moment";
import { GetEventsByDateQueryQuery } from "types/graphql";
import {
  AppProps,
  DisplayedDateRange,
  Events,
  EventElement,
} from "./../../types/types";
import drupalApiConnector, {
  drupalEventsTransformer,
} from "./drupalApiConnector";
import localistApiConnector from "./localistApiConnector";
import wordpressApiConnector, {
  wordpressTransformEvents,
} from "./wordpressApiConnector";

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

    const drupalTransformedEvents: EventElement[] = drupalEventsTransformer(
      events
    );
    data = {
      events: drupalTransformedEvents,
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
  }

  if (props.api === "wordpress") {
    const response = await wordpressApiConnector({
      ...props,
      page: currentPage,
      start,
      end,
    });
    const response_data = response.data as WordpressGraphql;
    const limit = parseInt(props.entries || "0", 10);
    const events = response_data.data.events.nodes;

    if (events) {
      const wordpressTransformedEvents = wordpressTransformEvents(events);

      data = {
        events: wordpressTransformedEvents,
        page: {
          current: currentPage,
          size: limit,
          total: (response_data.data.events.nodes?.length || 0) / limit,
        },
        date: {
          first: moment(start).toDate(),
          last: moment(end).toDate(),
        },
      };
    }
  }

  return data;
}
