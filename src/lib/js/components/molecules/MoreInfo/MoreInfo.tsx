import React from "react";
import PropTypes from "prop-types";
import truncateUrl from "truncate-url";
import Grid from "../../atoms/Grid";

import "./MoreInfo.scss";
import { NodeEvent } from "types/graphql";

interface Props {
  event: NodeEvent;
}

const MoreInfo = ({ event }: Props) => {
  return (
    <div className="rlv-more-info">
      <Grid container>
        <Grid col={6}>
          {event?.fieldTags && event.fieldTags.length > 0 ? (
            <>
              <h5>Tags</h5>
              <p>
                {event?.fieldTags
                  .map((tag) => {
                    return tag?.entity?.entityLabel;
                  })
                  .join(", ")}
              </p>
            </>
          ) : (
            ""
          )}
          {event.fieldDestinationUrl?.uri ? (
            <>
              <h5>More info on this event</h5>
              <p>
                <a href={event.fieldDestinationUrl?.uri}>
                  {truncateUrl(event.fieldDestinationUrl?.uri, 60)}
                </a>
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
