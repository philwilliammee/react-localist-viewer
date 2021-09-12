import React from "react";
import PropTypes from "prop-types";
import { getEventFullTime, getFullDate } from "../../../helpers/displayEvent";
import Grid from "../../atoms/Grid";
import { EventEvent } from "../../../../types/types";

import "./MoreInfo.scss";
import { truncateString } from "lib/js/helpers/common";

interface Props {
  event: EventEvent;
}

// function createMarkup(markup: string) {
//   return { __html: markup };
// }

const MoreInfo = ({ event }: Props) => {
  const deptWebsite = event?.custom_fields?.dept_web_site
    ? event.custom_fields.dept_web_site
    : event.url;

  // const eventType = getEventTypeString(event);
  // const startDate = moment(getEventStart(event))
  // const end

  return (
    <div className="rlv-more-info">
      <Grid container>
        <Grid col={12}>
          <h4>Details</h4>
        </Grid>
        <Grid col={6}>
          <h5>When</h5>
          <p>{getFullDate(event)}</p>
          <p>
            {/* {event.event.startTime}{" "}
            {event.event.endTime ? `- ${event.event.endTime}` : ""} */}
            {getEventFullTime(event)}
          </p>

          <h5>Where</h5>
          <p>{event.location ? event.location : "NA"}</p>

          <h5>Room</h5>
          <p>{event.room_number ? event.room_number : "NA"}</p>
        </Grid>

        <Grid col={6}>
          <h5>Website</h5>
          <p>
            {deptWebsite ? (
              <>
                <h5>Website</h5>
                <p>
                  <a href={deptWebsite}>{truncateString(deptWebsite, 60)}</a>
                </p>
              </>
            ) : (
              "NA"
            )}
          </p>

          <h5>Contact E-Mail</h5>
          <p>
            {event?.custom_fields?.contact_email ? (
              <a href={`mailto:${event?.custom_fields?.contact_email}`}>
                {event?.custom_fields?.contact_email}
              </a>
            ) : (
              "NA"
            )}
          </p>

          <h5>Zoom Link</h5>
          <div className="zoom-link">
            {event.stream_url ? (
              // <a href={`mailto:${event.event.zoomLink}`}>
              /**  @todo get actual zoom link */
              // <div dangerouslySetInnerHTML={createMarkup(event.url)} />
              // <a href={`mailto:${event.}`}>{event.zoomLink}</a>
              <a href={event.stream_url}>{event.stream_url}</a>
            ) : (
              "NA"
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

MoreInfo.propTypes = {
  event: PropTypes.object.isRequired,
};

export default MoreInfo;
