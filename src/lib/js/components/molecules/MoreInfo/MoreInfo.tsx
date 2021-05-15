import React from "react";
import PropTypes from "prop-types";
import {
  getEventTypeString,
  getEventDepartmentsString,
} from "../../../helpers/displayEvent";
import truncateUrl from "truncate-url";
import Grid from "../../atoms/Grid";
import { EventEvent } from "../../../../types/types";

import "./MoreInfo.scss";

interface Props {
  event: EventEvent;
}

const MoreInfo = ({ event }: Props) => {
  const deptWebsite = event?.custom_fields?.dept_web_site
    ? event.custom_fields.dept_web_site
    : "";

  const eventType = getEventTypeString(event);

  return (
    <div className="rlv-more-info">
      <Grid container>
        <Grid col={12}>
          <h4>Details</h4>
        </Grid>
        <Grid col={6}>
          {eventType ? (
            <>
              <h5>Event Type</h5>
              <p>{eventType}</p>
            </>
          ) : (
            ""
          )}
          <h5>Departments</h5>
          <p>{getEventDepartmentsString(event)}</p>
          {event.tags.length > 0 ? (
            <>
              <h5>Tags</h5>
              <p>{event.tags.join(", ")}</p>
            </>
          ) : (
            ""
          )}
          {event.url ? (
            <>
              <h5>Website</h5>
              <p>
                <a href={event.url}>{truncateUrl(event.url, 60)}</a>
              </p>
            </>
          ) : (
            ""
          )}
        </Grid>
        <Grid col={6}>
          <h5>Group</h5>
          <p>{event.group_name}</p>
          {event.hashtag ? (
            <>
              <h5>HashTag</h5>
              <p>#{event.hashtag}</p>
            </>
          ) : (
            ""
          )}

          <h5>Contact E-Mail</h5>
          <p>
            <a href={`mailto:${event?.custom_fields?.contact_email}`}>
              {event?.custom_fields?.contact_email}
            </a>
          </p>
          <h5>Contact Name</h5>
          <p>{event?.custom_fields?.contact_name}</p>
          {deptWebsite ? (
            <>
              <h5>Dept. Web Site</h5>
              <p>
                <a href={deptWebsite}>{truncateUrl(deptWebsite, 60)}</a>
              </p>
            </>
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </div>
  );
};

MoreInfo.propTypes = {
  event: PropTypes.object.isRequired,
};

export default MoreInfo;
