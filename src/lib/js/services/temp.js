import axios from "axios";
import moment from "moment";
import { isNested } from "../helpers/common";

const GET_EVENTS = `
  query getEvents(
    $startDay: Int!
    $startMonth: Int!
    $startYear: Int!
    $endDay: Int!
    $endMonth: Int!
    $endYear: Int!
  ) {
    events(
	  first: 500,
      where: {
        dateQuery: {
          after: { day: $startDay, month: $startMonth, year: $startYear }
          before: { day: $endDay, month: $endMonth, year: $endYear }
        }
      }
    ) {
      nodes {
        id
        date
        title
        uri
        featuredImage{
          node{
            sourceUrl
          }
        }
        eventTaxonomies{
          nodes{
            id
            name
          }
        }
        event {
          eventId
          description
          location
          date
          isAllDay
          localistUrl
          startTime
          photoUrl
          email
          endDate
          endTime
          eventUrl
          zoomLink
        }
      }
    }
  }
`;

const GET_FEATURED_EVENTS = `
  query getFeaturedEvents {
    eventTaxonomies(where: {name: "featured"}) {
      nodes {
        events {
          nodes {
            id
            date
            title
            uri
            featuredImage{
              node{
                sourceUrl
              }
            }
            event {
              eventId
              description
              location
              date
              isAllDay
              localistUrl
              startTime
              photoUrl
              email
              endDate
              endTime
              eventUrl
              zoomLink
            }
          }
        }
      }
    }
  }
`;

const GET_META_EVENTS = `
  query getEvents($startDate: String!, $endDate: String!) {
    events(first:500, where: {metaQuery: {relation: AND, metaArray: [
        {key: "date", type:DATE, value: $startDate, compare: GREATER_THAN_OR_EQUAL_TO},
        {key: "date", type:DATE, value: $endDate, compare: LESS_THAN_OR_EQUAL_TO}
    ]
    }}) {
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

const GET_HOME_EVENTS = `
query getFeaturedEvents($startDate: String!, $endDate: String!) {
  eventTaxonomies(where: {name: "featured"}) {
    nodes {
      events {
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
            date
            isAllDay
            localistUrl
            startTime
            photoUrl
            email
            endDate
            endTime
            eventUrl
            zoomLink
          }
        }
      }
    }
  }
  events(first: 3, where: {metaQuery: {relation: AND, metaArray: [{key: "date", type: DATE, value: $startDate, compare: GREATER_THAN_OR_EQUAL_TO}, {key: "date", type: DATE, value: $endDate, compare: LESS_THAN_OR_EQUAL_TO}]}}) {
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
}`;

function getEvents(date) {
  const start = date
    .clone()
    .subtract(4, "month")
    .startOf("month")
    .format("YYYY-MM-DD hh:mm");
  const end = date
    .clone()
    .add(2, "month")
    .endOf("month")
    .format("YYYY-MM-DD hh:mm");
  const query = GET_EVENTS;
  const variables = {
    startDay: parseInt(moment(start).format("D"), 10),
    startMonth: parseInt(moment(start).format("M"), 10),
    startYear: parseInt(moment(start).format("YYYY"), 10),
    endDay: parseInt(moment(end).format("D"), 10),
    endMonth: parseInt(moment(end).format("M"), 10),
    endYear: parseInt(moment(end).format("YYYY"), 10),
  };
  return { query, variables };
}

function getMetaEvents(date = moment(), endDate = null) {
  const startDate = date.clone().format("YYYY-MM-DD");
  let formattedDate;
  if (endDate) {
    formattedDate = endDate.clone().format("YYYY-MM-DD");
  } else {
    formattedDate = date
      .clone()
      .add(2, "month")
      .endOf("month")
      .format("YYYY-MM-DD");
  }

  const query = GET_META_EVENTS;
  const variables = {
    startDate,
    endDate: formattedDate,
  };
  return { query, variables };
}

function getHomeEvents(date = moment(), endDate = null) {
  const startDate = date.clone().format("YYYY-MM-DD");
  let formattedDate;
  if (endDate) {
    formattedDate = endDate.clone().format("YYYY-MM-DD");
  } else {
    formattedDate = date
      .clone()
      .add(2, "month")
      .endOf("month")
      .format("YYYY-MM-DD");
  }

  const query = GET_HOME_EVENTS;
  const variables = {
    startDate,
    endDate: formattedDate,
  };
  return { query, variables };
}

/**
 *
 * @param {object} props
 * @return {Promise}
 */
const apiConnector = (props) => {
  const { format, date, endDate } = props;

  let start, end, query, variables;
  if (format === "calendar") {
    const response = getMetaEvents(date, endDate);
    query = response.query;
    variables = response.variables;
  } else {
    const response = getHomeEvents(date, endDate);
    query = response.query;
    variables = response.variables;
  }
  return axios.post("/graphql", { query, variables });
};

export default apiConnector;

/**
 *
 * @param {string} format
 * @param {object} res
 */
const getDataFromFormat = (format, res) => {
  // Do something like if (res.data.error) handle it.
  if (
    format === "calendar" &&
    isNested(res, "data", "data", "events", "nodes")
  ) {
    return res.data.data.events.nodes;
  }
  if (format === "rq-calendar" && isNested(res, "data", "events", "nodes")) {
    return res.data.events.nodes;
  }
  if (
    isNested(res, "data", "data", "eventTaxonomies", "nodes") &&
    res.data.data.eventTaxonomies.nodes.length &&
    isNested(res, "data", "data", "events", "nodes") &&
    res.data.data.events.nodes.length
  ) {
    const featured_events = res.data.data.eventTaxonomies.nodes[0].events.nodes;

    const featured_ids = featured_events.map((event) => {
      return event.id;
    });

    const events = res.data.data.events.nodes;
    const filtered_events = events.filter(
      (event) => !featured_ids.includes(event.id)
    );
    const all_events = [...featured_events, ...filtered_events];

    return all_events;
  }
  // This can happen if there are no taxonomies.
  console.warn(res);
  return [];
};

export async function fetchEvents(props, displayedDateRange) {
  const { data } = await apiConnector({
    format: props.format,
    date: displayedDateRange.start,
    endDate: displayedDateRange.end,
  });
  // prefetch photos
  data.data.events.nodes.forEach((event) => {
    if (event.event.photoUrl) {
      const src = event.event.photoUrl.replace("/huge/", `/big/`);
      const img = new Image();
      img.src = src;
    }
  });

  return data;
}

export { getDataFromFormat };
