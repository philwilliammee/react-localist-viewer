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

export default GET_EVENTS;
