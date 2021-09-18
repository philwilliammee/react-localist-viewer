const GET_EVENTS = `
  query getEventsByDateQuery(
    $startDate: String
    $endDate: String
    $limit: Int
    $offset: Int
  ) {
    nodeQuery(
      filter: {
        conjunction: AND
        conditions: [
          { field: "type", value: "event", operator: EQUAL }
          {
            operator: GREATER_THAN_OR_EQUAL
            field: "field_event_date"
            value: [$startDate]
          }
          {
            operator: SMALLER_THAN_OR_EQUAL
            field: "field_event_date"
            value: [$endDate]
          }
        ]
      },
      sort: [{
        field: "field_event_date",
        direction: ASC
      }],
      limit: $limit
      offset: $offset
    ) {
      count
      entities {
        ... on NodeEvent {
          title
          entityId
          nid
          entityUrl{
            path
          }
          fieldEventDate {
            value
          }
          fieldEventDateEnd {
            value
          }
          fieldEventLocation
          fieldEventImage {
            url
          }
          fieldDestinationUrl {
            uri
            url {
              path
              routed
            }
          }
          fieldLocalistId
          fieldShortDescription {
            value
            processed
          }
          fieldTags {
            targetId
            entity {
              entityLabel
            }
          }
        }
      }
    }
  }
`;

export default GET_EVENTS;
